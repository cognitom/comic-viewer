<comic-viewer tabindex="0" style={style}>
  <header if={title && overviewMode}>{title}</header>
  <div class="outer" style={outerStyle}>
    <div ref="stage" class={rightToLeft: rightToLeft, inner: true} style={innerStyle} onclick={toggleMode} ondblclick={toggleFullScreen}>
      <img if={plusOneBefore} class="dummy" src={stack[0].url}></span>
      <img each={stack} src={url} />
      <img if={plusOneAfter} class="dummy" src={stack[stack.length - 1].url} />
    </div>
  </div>
  <footer if={overviewMode}>
    <icon-fullscreen if={!fullScreenMode} onclick={toggleFullScreen}/>
    <icon-close if={fullScreenMode} onclick={toggleFullScreen}/>
  </footer>

  <script>
    /* global opts */
    import Book from './book.js'
    import scrollTo from './scroll-to.js'
    import wait from './wait.js'
    import * as scrollEnd from './scroll-end.js'
    import * as fullScreen from './full-screen.js'

    let book

    this.title = ''
    this.firstPageSpread = false // true: double-face, false: single
    this.rightToLeft = true // true: manga (RtoL), false: comic (LtoR)

    this.currentIndex = 0
    this.currentIndexInStack = 0 // in the stack
    this.stack = []

    this.style = ''
    this.stageStyle = ''
    this.landscapeMode = false
    this.overviewMode = false
    this.fullScreenMode = false

    this.on('mount', () => {
      book = new Book(opts.pages, {
        title: opts.title,
        firstPageSpread: opts.firstPageSpread === 'yes',
        rightToLeft: opts.direction === undefined || opts.direction === 'manga'
      })
      // book.on('pageLoaded', page => {this.update()})
      const title = book.title
      const firstPageSpread = book.firstPageSpread
      const rightToLeft = book.rightToLeft

      const storeKey = opts.pages
      const currentIndex = (window.localStorage.getItem(storeKey) || 0) - 0
      const style = (opts.width ? `width:${opts.width}px;` : '') + (opts.height ? `height:${opts.height}px;` : '')

      book.load(currentIndex)

      // the next line is needed for calculating stageSize in calcStatus()
      this.root.setAttribute('style', style)

      const props = {title, firstPageSpread, rightToLeft, currentIndex, style}
      this.update(props)

      fullScreen.register(this.update)
      scrollEnd.register(this.scrollEnd, this.refs.stage)
      window.addEventListener('optimizedResize', this.update)
      this.root.addEventListener('keydown', this.keydown)
    })

    this.on('update', () => {
      const cur = this.currentIndex
      const len = book.pages.length
      const rToL = book.rightToLeft
      const fps = this.firstPageSpread
      const fullScreenMode = fullScreen.isActive()
      const styleWidth = fullScreenMode
        ? window.innerWidth : opts.width
        ? `width:${opts.width}px;` : ''
      const styleHeight = fullScreenMode
        ? window.innerHeight : opts.height
        ? `height:${opts.height}px;` : ''
      const style = styleWidth + styleHeight
      const w = fullScreenMode ? window.innerWidth : this.root.offsetWidth
      const h = fullScreenMode ? window.innerHeight : this.root.offsetHeight
      const pw = this.stack.length ? this.stack[0].width : book.defaultPageWidth
      const ph = this.stack.length ? this.stack[0].height : book.defaultPageHeight
      const wph = w / h
      const landscapeMode = h < w
      const stageWph = pw * (landscapeMode ? 2 : 1) / ph
      const stageWidth = wph > stageWph ? h * stageWph : w
      const stageHeight = wph > stageWph ? h : w / stageWph
      const pageScale = wph > stageWph ? stageHeight / ph : stageWidth / (landscapeMode ? 2 : 1) / pw
      const stageMarginTop = wph > stageWph ? 0 : (h - stageHeight) / 2
      const stageMarginRight = wph > stageWph ? (w - stageWidth) / 2 : 0
      const outerStyle = `
        width: ${stageWidth}px;
        height: ${stageHeight}px;
        margin: ${stageMarginTop}px ${stageMarginRight}px;
      `
      const innerStyle = `
        width: ${stageWidth}px;
        height: ${stageHeight}px;
      `
      const from0 = cur - (landscapeMode ? 2 : 1)
      const from = from0 >= 0 ? from0 : 0
      const plusOneBefore = landscapeMode && !fps && from === 0
      const to0 = from0 + (landscapeMode ? 6 : 3) - (plusOneBefore && cur === 0)
      const to = to0 < len ? to0 : len
      const plusOneAfter = landscapeMode && !!(len % 2 - !fps) && !!(to === len)
      const currentIndexInStack = cur - from
      const stack = book.pages.slice(from, to)

      const taken = rToL
        ? stack.slice(currentIndexInStack + (landscapeMode && !(plusOneBefore && cur === 0) ? 2 : 1), stack.length)
        : stack.slice(0, currentIndexInStack)
      const scrollLeft = pageScale * (
        (!rToL && plusOneBefore && cur > 0 ? book.pages[0].width : 0) +
        taken.reduce((acc, page) => acc + page.width, 0) +
        (rToL && plusOneAfter && cur < len - 1 ? book.pages[len - 1].width : 0)
      )

      Object.assign(this, {
        fullScreenMode,
        landscapeMode,
        style,
        stageWidth,
        innerStyle,
        outerStyle,
        currentIndexInStack,
        stack,
        plusOneBefore,
        plusOneAfter,
        scrollLeft
      })
    })

    this.on('updated', () => {
      scrollEnd.stop()
      wait(50).then(() => {
        this.refs.stage.scrollLeft = this.scrollLeft
        return wait(50)
      }).then(() => {
        scrollEnd.start()
      })
      /*
      this.refs.stage.scrollLeft = this.scrollLeft
      wait(50).then(() => scrollEnd.start())
      */
    })

    this.on('unmount', () => {
      fullScreen.unregister(this.update)
      scrollEnd.unregister(this.scrollEnd, this.refs.stage)
      window.removeEventListener('optimizedResize', this.update)
      this.root.removeEventListener('keydown', this.keydown)
    })

    this.toggleMode = e => {
      this.overviewMode = !this.overviewMode
    }

    this.toggleFullScreen = e => {
      if (this.fullScreenMode) fullScreen.exit()
      else fullScreen.request(this.root)
    }

    this.scrollEnd = e => {
      scrollEnd.stop()
      const threshold = 0.33
      const duration = 500
      const stage = this.refs.stage
      const sw = this.stageWidth
      const diff = stage.scrollLeft - this.scrollLeft
      if (diff < sw * -1 * threshold) {
        scrollTo(0, duration, true, stage).then(this.goForward)
      } else if (diff > sw * threshold) {
        scrollTo(sw * 2, duration, true, stage).then(this.goBack)
      } else {
        scrollTo(this.scrollLeft, duration, true, stage).then(this.update)
      }
    }

    this.keydown = e => {
      switch (e.keyCode) {
        case 37:
          if (this.rightToLeft) this.goForward()
          else this.goBack()
          e.preventDefault()
          return
        case 39:
          if (this.rightToLeft) this.goBack()
          else this.goForward()
          e.preventDefault()
      }
    }

    this.goForward = () => {
      const cur = this.currentIndex
      const len = book.pages.length
      const lm = this.landscapeMode
      const fps = this.firstPageSpread
      const lastIndex = len - 1 - (lm && !(len % 2 - !fps))
      if (cur >= lastIndex) this.currentIndex = lastIndex
      else this.currentIndex += lm && !(!fps && cur === 0) ? 2 : 1
      book.load(this.currentIndex)
      this.update()
      this.saveBookmark()
    }

    this.goBack = () => {
      this.currentIndex -= this.landscapeMode ? 2 : 1
      if (this.currentIndex < 0) this.currentIndex = 0
      book.load(this.currentIndex)
      this.update()
      this.saveBookmark()
    }

    this.saveBookmark = () => {
      const storeKey = opts.pages
      window.localStorage.setItem(storeKey, this.currentIndex)
    }
  </script>

  <style>
    :scope {
      display: block;
      position: relative;
      background: #333;
      overflow: hidden;
    }
    :scope:focus {
      outline: none;
    }
    header {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 24px;
      padding: 0 1em;
      background: rgba(0,0,0,.8);
      color: rgba(255,255,255,.7);
      line-height: 24px;
      font-size: 80%;
      overflow: hidden;
    }
    footer {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 32px;
      background: rgba(0,0,0,.8);
      color: rgba(255,255,255,.7);
      padding: 14px;
    }
    footer > icon-fullscreen,
    footer > icon-close {
      float: right;
    }
    div.outer {
      overflow: hidden;
    }
    div.inner {
      padding-bottom: 30px;
      display: flex;
      flex-direction: row;
      overflow-y: hidden;
      overflow-x: scroll;
      -webkit-overflow-scrolling: auto;
    }
    div.rightToLeft {
      flex-direction: row-reverse;
    }
    div > img {
      height: 100%;
    }
    div > img.dummy {
      visibility: hidden;
    }
  </style>
</comic-viewer>
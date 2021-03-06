<comic-viewer class={fullscreen: fullScreenMode, rtol: rightToLeft} tabindex="0" style={style}>
  <div class="btn-go-forward" onclick={goForward}></div>
  <div class="btn-go-back" onclick={goBack}></div>
  <header if={title && toolbarMode}>{title}</header>
  <div class="outer" style={outerStyle}>
    <div ref="stage" class="inner" style={innerStyle} onclick={toggleMode} ondblclick={toggleFullScreen}>
      <span each={stack} class={dummy: dummy} style="width: {width * parent.pageScale}px; background-image: url({url});"></span>
    </div>
  </div>
  <footer if={toolbarMode}>
    <icon-arrow-left onclick={goToLeft} />
    <icon-arrow-right onclick={goToRight} />
    <icon-fullscreen-enter if={!fullScreenMode} onclick={toggleFullScreen} />
    <icon-fullscreen-exit if={fullScreenMode} onclick={toggleFullScreen} />
  </footer>

  <script>
    /* global opts */
    import Book from './book.js'
    import scrollTo from './scroll-to.js'
    import wait from './wait.js'
    import * as fullScreen from './full-screen.js'

    let book
    let scrollLeftOnTouchStart = 0
    let clientXonTouchStart = 0
    let fullScreenIsSupported = false
    let fullScreenIsActive = false // only used when fullScreenIsSupported == false
    let iAmBusy = false

    this.title = ''
    this.firstPageSpread = false // true: double-face, false: single
    this.rightToLeft = true // true: manga (RtoL), false: comic (LtoR)

    this.pageCount = 0
    this.currentIndex = 0
    this.pageScale = 1
    this.stack = []

    this.style = ''
    this.outerStyle = ''
    this.innerStyle = ''
    this.landscapeMode = false
    this.toolbarMode = true
    this.fullScreenMode = false

    this.on('mount', () => {
      fullScreenIsSupported = fullScreen.isSupported(this.root)
      book = new Book(opts.pages, {
        title: opts.title,
        firstPageSpread: opts.firstPageSpread === 'yes',
        rightToLeft: opts.direction === undefined || opts.direction === 'manga'
      })
      book.on('pageLoaded', page => {
        if (iAmBusy) return
        if (!this.stack.find(p => p.url === page.url)) return
        this.update()
      })
      const title = book.title
      const firstPageSpread = book.firstPageSpread
      const rightToLeft = book.rightToLeft
      const pageCount = book.pages.length

      const storeKey = opts.pages
      const currentIndex = (window.localStorage.getItem(storeKey) || 0) - 0
      const style = (opts.width ? `width:${opts.width}px;` : '') + (opts.height ? `height:${opts.height}px;` : '')

      book.load(currentIndex)

      // the next line is needed for calculating stageSize in calcStatus()
      this.root.setAttribute('style', style)

      const props = {title, firstPageSpread, rightToLeft, pageCount, currentIndex, style}
      this.update(props)

      fullScreen.register(this.update)
      window.addEventListener('optimizedResize', this.update)
      this.root.addEventListener('keydown', this.keydown)
      this.root.addEventListener('touchstart', this.touchstart)
      this.root.addEventListener('touchmove', this.touchmove)
      this.root.addEventListener('touchend', this.touchend)
    })

    this.on('update', () => {
      const cur = this.currentIndex
      const len = book.pages.length
      const rToL = book.rightToLeft
      const fps = this.firstPageSpread
      const fullScreenMode = fullScreen.isActive() || fullScreenIsActive
      const w = fullScreenMode ? window.innerWidth : this.root.offsetWidth
      const h = fullScreenMode ? window.innerHeight : this.root.offsetHeight
      const landscapeMode = h < w
      const from0 = cur - (landscapeMode ? 2 : 1)
      const from = from0 >= 0 ? from0 : 0
      const plusOneBefore = landscapeMode && !fps && from === 0
      const to0 = from0 + (landscapeMode ? 6 : 3) - (plusOneBefore && cur === 0)
      const to = to0 < len ? to0 : len
      const plusOneAfter = landscapeMode && !!(len % 2 - !fps) && !!(to === len)
      const stack0 = book.pages.slice(from, to)
      const dummyB = plusOneBefore ? Object.assign({dummy: true}, stack0[0]) : []
      const dummyA = plusOneAfter ? Object.assign({dummy: true}, stack0[stack0.length - 1]) : []
      const stack1 = [].concat(dummyB, stack0, dummyA)
      const stack = rToL ? [].concat(stack1).reverse() : [].concat(stack1)
      const pw = stack.length ? stack[0].width : book.defaultPageWidth
      const ph = stack.length ? stack[0].height : book.defaultPageHeight
      const wph = w / h
      const stageWph = pw * (landscapeMode ? 2 : 1) / ph
      const stageWidth = wph > stageWph ? h * stageWph : w
      const stageHeight = wph > stageWph ? h : w / stageWph
      const pageScale = wph > stageWph ? stageHeight / ph : stageWidth / (landscapeMode ? 2 : 1) / pw
      const stageMarginTop = wph > stageWph ? 0 : (h - stageHeight) / 2
      const stageMarginRight = wph > stageWph ? (w - stageWidth) / 2 : 0
      const fullScreenPolyfill = fullScreenIsSupported || !fullScreenMode ? '' : `
        position: fixed;
        top: 0; right: 0; bottom: 0; left: 0;
        width: ${window.innerWidth}px;
        height: ${window.innerHeight}px;
        z-index: 2147483647;
      `
      const style = fullScreenPolyfill + (
        fullScreenMode ? ';' : (opts.width ? `width:${opts.width}px;` : '') + (opts.height ? `height:${opts.height}px;` : '')
      )
      const outerStyle = `
        width: ${stageWidth}px;
        height: ${stageHeight}px;
        margin: ${stageMarginTop}px ${stageMarginRight}px;
      `
      const innerStyle = `
        width: ${stageWidth}px;
        height: ${stageHeight}px;
      `

      const pos = cur - from + (plusOneBefore && cur > 0 ? 1 : 0)
      const taken = rToL ? stack1.slice(pos + (landscapeMode ? 2 : 1), stack1.length) : stack1.slice(0, pos)
      const scrollLeft = pageScale * taken.reduce((acc, page) => acc + page.width, 0)

      Object.assign(this, {
        fullScreenMode,
        landscapeMode,
        style,
        pageScale,
        stageWidth,
        outerStyle,
        scrollLeft,
        innerStyle,
        stack
      })
    })

    this.on('updated', () => {
      this.refs.stage.scrollLeft = this.scrollLeft
    })

    this.on('unmount', () => {
      fullScreen.unregister(this.update)
      window.removeEventListener('optimizedResize', this.update)
      this.root.removeEventListener('keydown', this.keydown)
    })

    this.toggleMode = e => {
      this.toolbarMode = !this.toolbarMode
    }

    this.toggleFullScreen = e => {
      if (fullScreenIsSupported) {
        if (this.fullScreenMode) fullScreen.exit()
        else fullScreen.request(this.root)
      } else {
        fullScreenIsActive = !this.fullScreenMode
      }
    }

    this.adjustScrollPosition = e => {
      const threshold = 0.33
      const duration = 500
      const stage = this.refs.stage
      const sw = this.stageWidth
      const diff = stage.scrollLeft - this.scrollLeft
      
      if (Math.abs(diff) < 1) {
        // no change
        return Promise.resolve()
      } else if (diff < sw * -1 * threshold) {
        // go to next page
        return scrollTo(0, duration, true, stage).then(this.goForward)
      } else if (diff > sw * threshold) {
        // go to prev page
        return scrollTo(sw * 2, duration, true, stage).then(this.goBack)
      } else {
        // keep
        return scrollTo(this.scrollLeft, duration, true, stage).then(this.update)
      }
    }
    
    this.touchstart = e => {
      if (e.touches.length != 1) return
      scrollLeftOnTouchStart = this.refs.stage.scrollLeft
      clientXonTouchStart = e.touches[0].clientX
      iAmBusy = true
    }
    
    this.touchmove = e => {
      if (e.touches.length != 1) return
      const scrollLeft = scrollLeftOnTouchStart - (e.touches[0].clientX - clientXonTouchStart)
      this.refs.stage.scrollLeft = scrollLeft
    }
    
    this.touchend = e => {
      if (e.changedTouches.length != 1) return
      const scrollLeft = scrollLeftOnTouchStart - (e.changedTouches[0].clientX - clientXonTouchStart)
      this.refs.stage.scrollLeft = scrollLeft
      this.adjustScrollPosition().then(() => {
        iAmBusy = false
      })
    }

    this.keydown = e => {
      switch (e.keyCode) {
        case 37: // left arrow key
          if (this.rightToLeft) this.goForward()
          else this.goBack()
          e.preventDefault()
          return
        case 39: // right arrow key
          if (this.rightToLeft) this.goBack()
          else this.goForward()
          e.preventDefault()
      }
    }
    
    this.goToLeft = () => {
      if (this.rightToLeft) this.goForward()
      else this.goBack()
    }
    
    this.goToRight = () => {
      if (this.rightToLeft) this.goBack()
      else this.goForward()
    }

    /** Go to the next page */
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

    /** Go to the prev page */
    this.goBack = () => {
      this.currentIndex -= this.landscapeMode ? 2 : 1
      if (this.currentIndex < 0) this.currentIndex = 0
      book.load(this.currentIndex)
      this.update()
      this.saveBookmark()
    }

    /** Save current the page index to localStorage */
    this.saveBookmark = () => {
      const storeKey = opts.pages
      window.localStorage.setItem(storeKey, this.currentIndex)
    }
  </script>

  <style>
    :scope {
      display: block;
      position: relative;
      background: white;/*#333;*/
      overflow: hidden;
    }
    :scope:focus {
      outline: none;
    }
    header,
    footer,
    .btn-go-forward,
    .btn-go-back {
      position: absolute;
    }    
    :scope.fullscreen header,
    :scope.fullscreen footer,
    :scope.fullscreen .btn-go-forward,
    :scope.fullscreen .btn-go-back {
      position: fixed;
    }
    header {
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
      box-sizing: content-box;
    }
    footer {
      bottom: 0;
      left: 0;
      right: 0;
      height: 32px;
      background: rgba(0,0,0,.8);
      color: rgba(255,255,255,.7);
      padding: 14px;
      box-sizing: content-box;
    }
    footer > icon-arrow-left,
    footer > icon-arrow-right {
      margin-right: 5px;
      cursor: pointer;
    }
    footer > icon-fullscreen-enter,
    footer > icon-fullscreen-exit {
      float: right;
      cursor: pointer;
    }
    .outer {
      overflow: hidden;
      box-sizing: content-box;
    }
    .inner {
      padding-bottom: 30px;
      display: block;
      /* display: flex;
      flex-direction: row; */
      overflow: hidden;
      white-space: nowrap;
      box-sizing: content-box;
    }
    .btn-go-forward,
    .btn-go-back {
      top: 0;
      bottom: 0;
      width: 25%;
      cursor: pointer;
    }
    .btn-go-forward,
    :scope.rtol .btn-go-back {
      right: 0;
      left: auto;
    }
    .btn-go-back,
    :scope.rtol .btn-go-forward {
      right: auto;
      left: 0;
    }
    .inner > span {
      height: 100%;
      display: inline-block;
      background-repeat: no-repeat;
      background-size: cover;
    }
    .inner > span.dummy {
      visibility: hidden;
    }
  </style>
</comic-viewer>

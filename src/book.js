import Emitter from 'es6-event-emitter'
import expandUrl from './expand-url.js'

const preloadStrategy = [0, 1, -1, -2, 2, 3, 4, 5, 6, 7]
const defaultOpts = {
  title: '',
  firstPageSpread: false,
  rightToLeft: true,
  defaultPageWidth: 595, // A5 short edge
  defaultPageHeight: 842 // A5 long edge
}

export default class Book extends Emitter {
  constructor (url, opts = {}) {
    super()
    const urls = Array.isArray(url) ? url : expandUrl(url)
    Object.assign(this, defaultOpts, filterProps(opts, defaultOpts))
    this.pages = urls.map(url => new Page(url, {
      defaultPageWidth: this.defaultPageWidth,
      defaultPageHeight: this.defaultPageHeight
    }))
    this.que = []
    this.loadingPage = null
  }
  load (n = 0) {
    n = n - 0 // cast to integer
    this.que = preloadStrategy
      .map(i => i + n)
      .filter(i => i >= 0 && i < this.pages.length)
      .map(i => this.pages[i])
      .filter(page => !page.loaded && !page.loading)
    if (this.loadingPage) return
    this.loadNextInQue()
  }
  loadNextInQue () {
    this.loadingPage = this.que.shift()
    if (!this.loadingPage) return
    this.loadingPage.on('imageLoaded', page => {
      this.trigger('pageLoaded', page)
      this.loadNextInQue()
    })
    this.loadingPage.load()
  }
}

export class Page extends Emitter {
  constructor (url, opts) {
    super()
    this.url = url
    this.loading = false
    this.loaded = false
    this.width = opts.defaultPageWidth
    this.height = opts.defaultPageHeight
  }
  load () {
    this.loading = true
    const img = new window.Image()
    img.src = this.url
    img.onload = () => {
      const width = img.width
      const height = img.height
      this.width = width
      this.height = height
      this.loaded = true
      this.loading = false
      this.trigger('imageLoaded', this)
    }
  }
}

/**
 * strip properties which don't exists on `ref`
 * @param {Object} obj - target object
 * @param {Object} ref - refernce object
 * @returns {Object} a new stripped object
 */
export function filterProps (obj, ref) {
  return Object.keys(obj)
    .filter(key => ref[key] !== undefined)
    .reduce((acc, key) => Object.assign(acc, {[key]: obj[key]}), {})
}

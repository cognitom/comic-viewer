(function (riot) {
'use strict';

riot = 'default' in riot ? riot['default'] : riot;

riot.tag2('icon-fullscreen', '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewbox="0 0 384.97 384.97"> <path d="M384.97,12.03c0-6.713-5.317-12.03-12.03-12.03H264.847c-6.833,0-11.922,5.39-11.934,12.223 c0,6.821,5.101,11.838,11.934,11.838h96.062l-0.193,96.519c0,6.833,5.197,12.03,12.03,12.03c6.833-0.012,12.03-5.197,12.03-12.03 l0.193-108.369c0-0.036-0.012-0.06-0.012-0.084C384.958,12.09,384.97,12.066,384.97,12.03z"></path> <path d="M120.496,0H12.403c-0.036,0-0.06,0.012-0.096,0.012C12.283,0.012,12.247,0,12.223,0C5.51,0,0.192,5.317,0.192,12.03 L0,120.399c0,6.833,5.39,11.934,12.223,11.934c6.821,0,11.838-5.101,11.838-11.934l0.192-96.339h96.242 c6.833,0,12.03-5.197,12.03-12.03C132.514,5.197,127.317,0,120.496,0z"></path> <path d="M120.123,360.909H24.061v-96.242c0-6.833-5.197-12.03-12.03-12.03S0,257.833,0,264.667v108.092 c0,0.036,0.012,0.06,0.012,0.084c0,0.036-0.012,0.06-0.012,0.096c0,6.713,5.317,12.03,12.03,12.03h108.092 c6.833,0,11.922-5.39,11.934-12.223C132.057,365.926,126.956,360.909,120.123,360.909z"></path> <path d="M372.747,252.913c-6.833,0-11.85,5.101-11.838,11.934v96.062h-96.242c-6.833,0-12.03,5.197-12.03,12.03 s5.197,12.03,12.03,12.03h108.092c0.036,0,0.06-0.012,0.084-0.012c0.036-0.012,0.06,0.012,0.096,0.012 c6.713,0,12.03-5.317,12.03-12.03V264.847C384.97,258.014,379.58,252.913,372.747,252.913z"></path> </svg>', 'icon-fullscreen,[data-is="icon-fullscreen"]{ display: inline-block; width: 32px; fill: currentColor; }', '', function (opts) {});

riot.tag2('icon-close', '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewbox="0 0 384.97 384.97"> <path d="M384.97,12.03c0-6.713-5.317-12.03-12.03-12.03H264.847c-6.833,0-11.922,5.39-11.934,12.223 c0,6.821,5.101,11.838,11.934,11.838h96.062l-0.193,96.519c0,6.833,5.197,12.03,12.03,12.03c6.833-0.012,12.03-5.197,12.03-12.03 l0.193-108.369c0-0.036-0.012-0.06-0.012-0.084C384.958,12.09,384.97,12.066,384.97,12.03z"></path> <path d="M120.496,0H12.403c-0.036,0-0.06,0.012-0.096,0.012C12.283,0.012,12.247,0,12.223,0C5.51,0,0.192,5.317,0.192,12.03 L0,120.399c0,6.833,5.39,11.934,12.223,11.934c6.821,0,11.838-5.101,11.838-11.934l0.192-96.339h96.242 c6.833,0,12.03-5.197,12.03-12.03C132.514,5.197,127.317,0,120.496,0z"></path> <path d="M120.123,360.909H24.061v-96.242c0-6.833-5.197-12.03-12.03-12.03S0,257.833,0,264.667v108.092 c0,0.036,0.012,0.06,0.012,0.084c0,0.036-0.012,0.06-0.012,0.096c0,6.713,5.317,12.03,12.03,12.03h108.092 c6.833,0,11.922-5.39,11.934-12.223C132.057,365.926,126.956,360.909,120.123,360.909z"></path> <path d="M372.747,252.913c-6.833,0-11.85,5.101-11.838,11.934v96.062h-96.242c-6.833,0-12.03,5.197-12.03,12.03 s5.197,12.03,12.03,12.03h108.092c0.036,0,0.06-0.012,0.084-0.012c0.036-0.012,0.06,0.012,0.096,0.012 c6.713,0,12.03-5.317,12.03-12.03V264.847C384.97,258.014,379.58,252.913,372.747,252.913z"></path> </svg>', 'icon-close,[data-is="icon-close"]{ display: block; width: 32px; fill: currentColor; padding: 4px; }', '', function (opts) {});

var _createClass$1 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var emitter = new WeakMap();

var Emitter = function () {
	function Emitter() {
		_classCallCheck$1(this, Emitter);

		emitter.set(this, {
			events: {}
		});

		this.eventLength = 0;
	}

	_createClass$1(Emitter, [{
		key: 'on',
		value: function on(event, cb) {
			if (typeof cb === 'undefined') {
				throw new Error('You must provide a callback method.');
			}

			if (typeof cb !== 'function') {
				throw new TypeError('Listener must be a function');
			}

			this.events[event] = this.events[event] || [];
			this.events[event].push(cb);

			this.eventLength++;

			return this;
		}
	}, {
		key: 'off',
		value: function off(event, cb) {
			if (typeof cb === 'undefined') {
				throw new Error('You must provide a callback method.');
			}

			if (typeof cb !== 'function') {
				throw new TypeError('Listener must be a function');
			}

			if (typeof this.events[event] === 'undefined') {
				throw new Error('Event not found - the event you provided is: ' + event);
			}

			var listeners = this.events[event];

			listeners.forEach(function (v, i) {
				if (v === cb) {
					listeners.splice(i, 1);
				}
			});

			if (listeners.length === 0) {
				delete this.events[event];

				this.eventLength--;
			}

			return this;
		}
	}, {
		key: 'trigger',
		value: function trigger(event) {
			var _this = this;

			for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
				args[_key - 1] = arguments[_key];
			}

			if (typeof event === 'undefined') {
				throw new Error('You must provide an event to trigger.');
			}

			var listeners = this.events[event];

			if (typeof listeners !== 'undefined') {
				listeners = listeners.slice(0);

				listeners.forEach(function (v) {
					v.apply(_this, args);
				});
			}

			return this;
		}
	}, {
		key: 'events',
		get: function get() {
			return emitter.get(this).events;
		}
	}]);

	return Emitter;
}();

/**
 * Expands a given url to an array of urls
 * ex. '/images/[1-2].jpg' --> ['/images/1.jpg', '/images/2.jpg']
 * @param {string} url - url with expanding syntax
 */
function expandUrl(url) {
  var re = /^(.*)\[(\d+)-(\d+)\](.*)$/;
  if (!re.test(url)) return [url];

  var m = url.match(re);
  var m2 = m[2] - 0;
  var m3 = m[3] - 0;
  var prefix = m[1];
  var suffix = m[4];
  var from = m2 < m3 ? m2 : m3;
  var to = m2 < m3 ? m3 : m2;
  var width = m[2].length; // '001' --> 3

  var errorMsg = 'Check your url. The pattern should be like this: /images/[001-032].jpg';
  if (Number.isNaN(from) || Number.isNaN(to)) throw new Error(errorMsg);

  return range(from, to).map(function (v) {
    return prefix + pad(v, width) + suffix;
  });
}

function range(from, to) {
  return Array.from({ length: to - from + 1 }, function (v, i) {
    return (v || from) + i;
  });
}

function pad(num, width) {
  var numStr = num + '';
  var p = width - numStr.length;
  return (p > 0 ? '0'.repeat(p) : '') + numStr;
}

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var preloadStrategy = [0, 1, -1, -2, 2, 3, 4, 5, 6, 7];
var defaultOpts = {
  title: '',
  firstPageSpread: false,
  rightToLeft: true,
  defaultPageWidth: 595, // A5 short edge
  defaultPageHeight: 842 // A5 long edge
};

var Book = function (_Emitter) {
  _inherits(Book, _Emitter);

  function Book(url) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Book);

    var _this = _possibleConstructorReturn(this, (Book.__proto__ || Object.getPrototypeOf(Book)).call(this));

    var urls = Array.isArray(url) ? url : expandUrl(url);
    Object.assign(_this, defaultOpts, filterProps(opts, defaultOpts));
    _this.pages = urls.map(function (url) {
      return new Page(url, {
        defaultPageWidth: _this.defaultPageWidth,
        defaultPageHeight: _this.defaultPageHeight
      });
    });
    _this.que = [];
    _this.loadingPage = null;
    return _this;
  }

  _createClass(Book, [{
    key: 'load',
    value: function load() {
      var _this2 = this;

      var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      n = n - 0; // cast to integer
      this.que = preloadStrategy.map(function (i) {
        return i + n;
      }).filter(function (i) {
        return i >= 0 && i < _this2.pages.length;
      }).map(function (i) {
        return _this2.pages[i];
      }).filter(function (page) {
        return !page.loaded && !page.loading;
      });
      if (this.loadingPage) return;
      this.loadNextInQue();
    }
  }, {
    key: 'loadNextInQue',
    value: function loadNextInQue() {
      var _this3 = this;

      this.loadingPage = this.que.shift();
      if (!this.loadingPage) return;
      this.loadingPage.on('imageLoaded', function (page) {
        _this3.trigger('pageLoaded', page);
        _this3.loadNextInQue();
      });
      this.loadingPage.load();
    }
  }]);

  return Book;
}(Emitter);

var Page = function (_Emitter2) {
  _inherits(Page, _Emitter2);

  function Page(url, opts) {
    _classCallCheck(this, Page);

    var _this4 = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this));

    _this4.url = url;
    _this4.loading = false;
    _this4.loaded = false;
    _this4.width = opts.defaultPageWidth;
    _this4.height = opts.defaultPageHeight;
    return _this4;
  }

  _createClass(Page, [{
    key: 'load',
    value: function load() {
      var _this5 = this;

      this.loading = true;
      var img = new window.Image();
      img.src = this.url;
      img.onload = function () {
        var width = img.width;
        var height = img.height;
        _this5.width = width;
        _this5.height = height;
        _this5.loaded = true;
        _this5.loading = false;
        _this5.trigger('imageLoaded', _this5);
      };
    }
  }]);

  return Page;
}(Emitter);

/**
 * strip properties which don't exists on `ref`
 * @param {Object} obj - target object
 * @param {Object} ref - refernce object
 * @returns {Object} a new stripped object
 */
function filterProps(obj, ref) {
  return Object.keys(obj).filter(function (key) {
    return ref[key] !== undefined;
  }).reduce(function (acc, key) {
    return Object.assign(acc, _defineProperty({}, key, obj[key]));
  }, {});
}

var que = {};

function scrollTo(position, duration, horizontal, obj) {
  duration = duration || 1000;
  horizontal = horizontal || false;
  obj = obj || window;
  que[obj] = position;
  return new Promise(function (resolve, reject) {
    var firstPosition = getPosition();
    var cosParameter = (firstPosition - position) / 2;
    var scrollCount = 0;
    var oldTimestamp = now();
    window.requestAnimationFrame(step);

    function step(newTimestamp) {
      if (position !== que[obj]) return reject(new Error('Another scroll detected'));
      scrollCount += Math.PI / (duration / (newTimestamp - oldTimestamp));
      if (scrollCount >= Math.PI) {
        setPosition(position);
        return resolve();
      }
      if (getPosition() === position) return resolve();
      var newPosition = position + Math.round(cosParameter + cosParameter * Math.cos(scrollCount));
      setPosition(newPosition);
      if (newPosition === position) return resolve();
      oldTimestamp = newTimestamp;
      window.requestAnimationFrame(step);
    }

    function setPosition(pos) {
      if (horizontal) obj.scrollLeft = pos;else obj.scrollTop = pos;
    }

    function getPosition() {
      return horizontal ? obj.scrollLeft : obj.scrollTop;
    }
  });
}

function now() {
  return window.performance ? window.performance.now() : window.Date.now();
}

function wait(ms) {
  return new Promise(function (resolve, reject) {
    window.setTimeout(resolve, ms);
  });
}

function isSupported(el) {
  if (el.requestFullscreen) return true;
  if (el.webkitRequestFullscreen) return true;
  if (el.mozRequestFullScreen) return true;
  if (el.msRequestFullscreen) return true;
  return false;
}

function request(el) {
  if (el.requestFullscreen) el.requestFullscreen();else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();else if (el.mozRequestFullScreen) el.mozRequestFullScreen();else if (el.msRequestFullscreen) el.msRequestFullscreen();
}

function exit() {
  var d = document;
  if (d.exitFullscreen) d.exitFullscreen();else if (d.webkitExitFullscreen) d.webkitExitFullscreen();else if (d.mozCancelFullScreen) d.mozCancelFullScreen();else if (d.msExitFullscreen) d.msExitFullscreen();
}

function register(handler) {
  var add = document.addEventListener;
  add('fullscreenchange', handler);
  add('webkitfullscreenchange', handler);
  add('mozfullscreenchange', handler);
  add('MSFullscreenChange', handler);
}

function unregister(handler) {
  var rem = document.removeEventListener;
  rem('fullscreenchange', handler);
  rem('webkitfullscreenchange', handler);
  rem('mozfullscreenchange', handler);
  rem('MSFullscreenChange', handler);
}

function isActive() {
  return !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement);
}

riot.tag2('comic-viewer', '<div class="btn-go-forward" onclick="{goForward}"></div> <div class="btn-go-back" onclick="{goBack}"></div> <header if="{title && overviewMode}">{title}</header> <div class="outer" riot-style="{outerStyle}"> <div ref="stage" class="inner" riot-style="{innerStyle}" onclick="{toggleMode}" ondblclick="{toggleFullScreen}"> <img if="{plusOneBefore && !rightToLeft}" class="dummy" riot-src="{stack[0].url}"> <img if="{plusOneAfter && rightToLeft}" class="dummy" riot-src="{stack[stack.length - 1].url}"> <img each="{stack}" riot-src="{url}"> <img if="{plusOneBefore && rightToLeft}" class="dummy" riot-src="{stack[0].url}"> <img if="{plusOneAfter && !rightToLeft}" class="dummy" riot-src="{stack[stack.length - 1].url}"> </div> </div> <footer if="{overviewMode}"> <icon-fullscreen if="{!fullScreenMode}" onclick="{toggleFullScreen}"></icon-fullscreen> <icon-close if="{fullScreenMode}" onclick="{toggleFullScreen}"></icon-close> </footer>', 'comic-viewer,[data-is="comic-viewer"]{ display: block; position: relative; background: #333; overflow: hidden; } comic-viewer:focus,[data-is="comic-viewer"]:focus{ outline: none; } comic-viewer header,[data-is="comic-viewer"] header,comic-viewer footer,[data-is="comic-viewer"] footer,comic-viewer .btn-go-forward,[data-is="comic-viewer"] .btn-go-forward,comic-viewer .btn-go-back,[data-is="comic-viewer"] .btn-go-back{ position: absolute; z-index: 100; } comic-viewer.fullscreen header,[data-is="comic-viewer"].fullscreen header,comic-viewer.fullscreen footer,[data-is="comic-viewer"].fullscreen footer,comic-viewer.fullscreen .btn-go-forward,[data-is="comic-viewer"].fullscreen .btn-go-forward,comic-viewer.fullscreen .btn-go-back,[data-is="comic-viewer"].fullscreen .btn-go-back{ position: fixed; } comic-viewer header,[data-is="comic-viewer"] header{ top: 0; left: 0; right: 0; height: 24px; padding: 0 1em; background: rgba(0,0,0,.8); color: rgba(255,255,255,.7); line-height: 24px; font-size: 80%; overflow: hidden; } comic-viewer footer,[data-is="comic-viewer"] footer{ bottom: 0; left: 0; right: 0; height: 32px; background: rgba(0,0,0,.8); color: rgba(255,255,255,.7); padding: 14px; } comic-viewer footer > icon-fullscreen,[data-is="comic-viewer"] footer > icon-fullscreen,comic-viewer footer > icon-close,[data-is="comic-viewer"] footer > icon-close{ float: right; } comic-viewer .outer,[data-is="comic-viewer"] .outer{ overflow: hidden; } comic-viewer .inner,[data-is="comic-viewer"] .inner{ padding-bottom: 30px; display: flex; flex-direction: row; overflow: hidden; -webkit-overflow-scrolling: auto; } comic-viewer .btn-go-forward,[data-is="comic-viewer"] .btn-go-forward,comic-viewer .btn-go-back,[data-is="comic-viewer"] .btn-go-back{ top: 0; bottom: 0; width: 25%; } comic-viewer .btn-go-forward,[data-is="comic-viewer"] .btn-go-forward,comic-viewer.rtol .btn-go-back,[data-is="comic-viewer"].rtol .btn-go-back{ right: 0; left: auto; } comic-viewer .btn-go-back,[data-is="comic-viewer"] .btn-go-back,comic-viewer.rtol .btn-go-forward,[data-is="comic-viewer"].rtol .btn-go-forward{ right: auto; left: 0; } comic-viewer div > img,[data-is="comic-viewer"] div > img{ height: 100%; } comic-viewer div > img.dummy,[data-is="comic-viewer"] div > img.dummy{ visibility: hidden; }', 'class="{fullscreen: fullScreenMode, rtol: rightToLeft}" tabindex="0" riot-style="{style}"', function (opts) {
  var _this = this;

  var book = void 0;
  var scrollLeftOnTouchStart = 0;
  var clientXonTouchStart = 0;
  var fullScreenIsSupported = false;
  var fullScreenIsActive = false;

  this.title = '';
  this.firstPageSpread = false;
  this.rightToLeft = true;

  this.currentIndex = 0;
  this.currentIndexInStack = 0;
  this.stack = [];

  this.style = '';
  this.stageStyle = '';
  this.landscapeMode = false;
  this.overviewMode = false;
  this.fullScreenMode = false;

  this.on('mount', function () {
    fullScreenIsSupported = isSupported(_this.root);
    book = new Book(opts.pages, {
      title: opts.title,
      firstPageSpread: opts.firstPageSpread === 'yes',
      rightToLeft: opts.direction === undefined || opts.direction === 'manga'
    });

    var title = book.title;
    var firstPageSpread = book.firstPageSpread;
    var rightToLeft = book.rightToLeft;

    var storeKey = opts.pages;
    var currentIndex = (window.localStorage.getItem(storeKey) || 0) - 0;
    var style = (opts.width ? 'width:' + opts.width + 'px;' : '') + (opts.height ? 'height:' + opts.height + 'px;' : '');

    book.load(currentIndex);

    _this.root.setAttribute('style', style);

    var props = { title: title, firstPageSpread: firstPageSpread, rightToLeft: rightToLeft, currentIndex: currentIndex, style: style };
    _this.update(props);

    register(_this.update);
    window.addEventListener('optimizedResize', _this.update);
    _this.root.addEventListener('keydown', _this.keydown);
    _this.root.addEventListener('touchstart', _this.touchstart);
    _this.root.addEventListener('touchmove', _this.touchmove);
    _this.root.addEventListener('touchend', _this.touchend);
  });

  this.on('update', function () {
    var cur = _this.currentIndex;
    var len = book.pages.length;
    var rToL = book.rightToLeft;
    var fps = _this.firstPageSpread;
    var fullScreenMode = isActive() || fullScreenIsActive;
    var styleWidth = fullScreenMode ? window.innerWidth : opts.width ? 'width:' + opts.width + 'px;' : '';
    var styleHeight = fullScreenMode ? window.innerHeight : opts.height ? 'height:' + opts.height + 'px;' : '';
    var style = styleWidth + styleHeight;
    var w = fullScreenMode ? window.innerWidth : _this.root.offsetWidth;
    var h = fullScreenMode ? window.innerHeight : _this.root.offsetHeight;
    var pw = _this.stack.length ? _this.stack[0].width : book.defaultPageWidth;
    var ph = _this.stack.length ? _this.stack[0].height : book.defaultPageHeight;
    var wph = w / h;
    var landscapeMode = h < w;
    var stageWph = pw * (landscapeMode ? 2 : 1) / ph;
    var stageWidth = wph > stageWph ? h * stageWph : w;
    var stageHeight = wph > stageWph ? h : w / stageWph;
    var pageScale = wph > stageWph ? stageHeight / ph : stageWidth / (landscapeMode ? 2 : 1) / pw;
    var stageMarginTop = wph > stageWph ? 0 : (h - stageHeight) / 2;
    var stageMarginRight = wph > stageWph ? (w - stageWidth) / 2 : 0;
    var fullScreenPolyfill = fullScreenIsSupported || !fullScreenMode ? '' : '\n        position: fixed;\n        top: 0; right: 0; bottom: 0; left: 0;\n      ';
    var outerStyle = fullScreenPolyfill + ('\n        width: ' + stageWidth + 'px;\n        height: ' + stageHeight + 'px;\n        margin: ' + stageMarginTop + 'px ' + stageMarginRight + 'px;\n      ');
    var innerStyle = '\n        width: ' + stageWidth + 'px;\n        height: ' + stageHeight + 'px;\n      ';
    var from0 = cur - (landscapeMode ? 2 : 1);
    var from = from0 >= 0 ? from0 : 0;
    var plusOneBefore = landscapeMode && !fps && from === 0;
    var to0 = from0 + (landscapeMode ? 6 : 3) - (plusOneBefore && cur === 0);
    var to = to0 < len ? to0 : len;
    var plusOneAfter = landscapeMode && !!(len % 2 - !fps) && !!(to === len);
    var currentIndexInStack = cur - from;
    var stack = rToL ? book.pages.slice(from, to).reverse() : book.pages.slice(from, to);

    var taken = rToL ? stack.slice(currentIndexInStack + (landscapeMode && !(plusOneBefore && cur === 0) ? 2 : 1), stack.length) : stack.slice(0, currentIndexInStack);
    var scrollLeft = pageScale * ((!rToL && plusOneBefore && cur > 0 ? book.pages[0].width : 0) + taken.reduce(function (acc, page) {
      return acc + page.width;
    }, 0) + (rToL && plusOneAfter && cur < len - 1 ? book.pages[len - 1].width : 0));

    Object.assign(_this, {
      fullScreenMode: fullScreenMode,
      landscapeMode: landscapeMode,
      style: style,
      stageWidth: stageWidth,
      innerStyle: innerStyle,
      outerStyle: outerStyle,
      currentIndexInStack: currentIndexInStack,
      stack: stack,
      plusOneBefore: plusOneBefore,
      plusOneAfter: plusOneAfter,
      scrollLeft: scrollLeft
    });
  });

  this.on('updated', function () {
    wait(50).then(function () {
      _this.refs.stage.scrollLeft = _this.scrollLeft;
    });
  });

  this.on('unmount', function () {
    unregister(_this.update);
    window.removeEventListener('optimizedResize', _this.update);
    _this.root.removeEventListener('keydown', _this.keydown);
  });

  this.toggleMode = function (e) {
    _this.overviewMode = !_this.overviewMode;
  };

  this.toggleFullScreen = function (e) {
    if (fullScreenIsSupported) {
      if (_this.fullScreenMode) exit();else request(_this.root);
    } else {
      fullScreenIsActive = !_this.fullScreenMode;
    }
  };

  this.scrollEnd = function (e) {
    var threshold = 0.33;
    var duration = 500;
    var stage = _this.refs.stage;
    var sw = _this.stageWidth;
    var diff = stage.scrollLeft - _this.scrollLeft;
    if (diff < sw * -1 * threshold) {
      scrollTo(0, duration, true, stage).then(_this.goForward);
    } else if (diff > sw * threshold) {
      scrollTo(sw * 2, duration, true, stage).then(_this.goBack);
    } else {
      scrollTo(_this.scrollLeft, duration, true, stage).then(_this.update);
    }
  };

  this.touchstart = function (e) {
    if (e.touches.length != 1) return;
    scrollLeftOnTouchStart = _this.refs.stage.scrollLeft;
    clientXonTouchStart = e.touches[0].clientX;
  };

  this.touchmove = function (e) {
    if (e.touches.length != 1) return;
    var scrollLeft = scrollLeftOnTouchStart - (e.touches[0].clientX - clientXonTouchStart);
    _this.refs.stage.scrollLeft = scrollLeft;
  };

  this.touchend = function (e) {
    if (e.changedTouches.length != 1) return;
    var scrollLeft = scrollLeftOnTouchStart - (e.changedTouches[0].clientX - clientXonTouchStart);
    _this.refs.stage.scrollLeft = scrollLeft;
    _this.scrollEnd();
  };

  this.keydown = function (e) {
    switch (e.keyCode) {
      case 37:
        if (_this.rightToLeft) _this.goForward();else _this.goBack();
        e.preventDefault();
        return;
      case 39:
        if (_this.rightToLeft) _this.goBack();else _this.goForward();
        e.preventDefault();
    }
  };

  this.goForward = function () {
    var cur = _this.currentIndex;
    var len = book.pages.length;
    var lm = _this.landscapeMode;
    var fps = _this.firstPageSpread;
    var lastIndex = len - 1 - (lm && !(len % 2 - !fps));
    if (cur >= lastIndex) _this.currentIndex = lastIndex;else _this.currentIndex += lm && !(!fps && cur === 0) ? 2 : 1;
    book.load(_this.currentIndex);
    _this.update();
    _this.saveBookmark();
  };

  this.goBack = function () {
    _this.currentIndex -= _this.landscapeMode ? 2 : 1;
    if (_this.currentIndex < 0) _this.currentIndex = 0;
    book.load(_this.currentIndex);
    _this.update();
    _this.saveBookmark();
  };

  this.saveBookmark = function () {
    var storeKey = opts.pages;
    window.localStorage.setItem(storeKey, _this.currentIndex);
  };
});

/**
 * suppress repeating fire of events
 */
function throttle(type, name, obj) {
  obj = obj || window;
  var running = false;
  obj.addEventListener(type, function () {
    if (running) return;
    running = true;
    window.requestAnimationFrame(function () {
      obj.dispatchEvent(new window.CustomEvent(name));
      running = false;
    });
  });
}

throttle('resize', 'optimizedResize');

}(riot));

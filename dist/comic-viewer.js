(function (riot) {
'use strict';

riot = 'default' in riot ? riot['default'] : riot;

riot.tag2('icon-fullscreen-enter', '<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 385 385"> <path d="M385 12c0-6.7-5.3-12-12-12H264.7c-6.8 0-12 5.4-12 12.2 0 6.8 5.2 12 12 12h96v96.4c0 6.8 5 12 12 12 6.8 0 12-5.2 12-12l.2-108.4V12zM120.5 0h-108-.2C5.4 0 .2 5.3.2 12L0 120.4c0 6.8 5.4 12 12.2 12 6.8 0 12-5.2 12-12V24h96.3c6.8 0 12-5 12-12 0-6.8-5.2-12-12-12zM120 361H24v-96.3c0-7-5-12-12-12s-12 5-12 12V373c0 6.7 5.3 12 12 12h108c7 0 12-5.4 12-12.3 0-6.8-5-11.8-12-11.8zM372.7 253c-6.8 0-11.8 5-11.8 11.8v96h-96.3c-7 0-12 5.3-12 12s5 12.2 12 12.2H373c6.7 0 12-5.3 12-12V264.7c0-6.8-5.4-12-12.3-12z"></path> </svg>', 'icon-fullscreen-enter,[data-is="icon-fullscreen-enter"]{ display: inline-block; width: 32px; fill: currentColor; }', '', function (opts) {});

riot.tag2('icon-fullscreen-exit', '<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 385 385"> <path d="M253 120.6c0 6.7 5.2 12 12 12h108c7 0 12-5.4 12-12.2 0-6.8-5-12-12-12h-96l.2-96.4c0-6.8-5.2-12-12-12-7 0-12 5.2-12 12l-.3 108.4v.2zM12 132.3h108.2c6.8 0 12-5.3 12-12l.3-108.4c0-7-5.4-12-12.2-12-6.8 0-11.8 5-11.8 12l-.2 96.3H12c-6.8 0-12 5.2-12 12s5.2 12 12 12zM12 276.7h96V373c0 6.8 5.2 12 12 12 7 0 12-5.2 12-12V264.7c0-6.8-5.3-12.2-12-12.2H12c-7 0-12 5.4-12 12.3 0 6.7 5 11.7 12 11.7zM265 385c6.7 0 11.7-5 11.7-12v-96H373c6.8 0 12-5.2 12-12 0-7-5.2-12-12-12H264.7c-6.8 0-12.2 5.2-12.2 12v108c0 7 5.4 12 12.3 12z"></path> </svg>', 'icon-fullscreen-exit,[data-is="icon-fullscreen-exit"]{ display: inline-block; width: 32px; fill: currentColor; }', '', function (opts) {});

riot.tag2('icon-arrow-left', '<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 385 385"><path d="M55.3 185L183 57.7c4.7-5 4.7-12.2 0-17-5-5-12.3-5-17 0L18.3 188c-5 4.7-5 12.3 0 17l147 147.2c4.8 4.8 12.2 4.6 17-.3 5-5 4.8-12 0-17l-126-126H355c7 0 12-5 12-12 0-6.8-5-12-12-12h-300z"></path></svg>', 'icon-arrow-left,[data-is="icon-arrow-left"]{ display: inline-block; width: 32px; fill: currentColor; }', '', function (opts) {});

riot.tag2('icon-arrow-right', '<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 385 385"> <path d="M326.7 207.7L199 335c-4.7 5-4.7 12.2 0 17 5 5 12.3 5 17 0L363.7 205c5-4.8 5-12.3 0-17l-147-147.2c-4.8-5-12.3-4.7-17 .2-5 4.8-5 12 0 16.8l126 126h-299c-6.7 0-12 5.3-12 12 0 7 5.3 12 12 12h300z"></path> </svg>', 'icon-arrow-right,[data-is="icon-arrow-right"]{ display: inline-block; width: 32px; fill: currentColor; }', '', function (opts) {});

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

riot.tag2('comic-viewer', '<div class="btn-go-forward" onclick="{goForward}"></div> <div class="btn-go-back" onclick="{goBack}"></div> <header if="{title && toolbarMode}">{title}</header> <div class="outer" riot-style="{outerStyle}"> <div ref="stage" class="inner" riot-style="{innerStyle}" onclick="{toggleMode}" ondblclick="{toggleFullScreen}"> <span each="{stack}" class="{dummy: dummy}" riot-style="width: {width * parent.pageScale}px; background-image: url({url});"></span> </div> </div> <footer if="{toolbarMode}"> <icon-arrow-left onclick="{goToLeft}"></icon-arrow-left> <icon-arrow-right onclick="{goToRight}"></icon-arrow-right> <icon-fullscreen-enter if="{!fullScreenMode}" onclick="{toggleFullScreen}"></icon-fullscreen-enter> <icon-fullscreen-exit if="{fullScreenMode}" onclick="{toggleFullScreen}"></icon-fullscreen-exit> </footer>', 'comic-viewer,[data-is="comic-viewer"]{ display: block; position: relative; background: white; overflow: hidden; } comic-viewer:focus,[data-is="comic-viewer"]:focus{ outline: none; } comic-viewer header,[data-is="comic-viewer"] header,comic-viewer footer,[data-is="comic-viewer"] footer,comic-viewer .btn-go-forward,[data-is="comic-viewer"] .btn-go-forward,comic-viewer .btn-go-back,[data-is="comic-viewer"] .btn-go-back{ position: absolute; } comic-viewer.fullscreen header,[data-is="comic-viewer"].fullscreen header,comic-viewer.fullscreen footer,[data-is="comic-viewer"].fullscreen footer,comic-viewer.fullscreen .btn-go-forward,[data-is="comic-viewer"].fullscreen .btn-go-forward,comic-viewer.fullscreen .btn-go-back,[data-is="comic-viewer"].fullscreen .btn-go-back{ position: fixed; } comic-viewer header,[data-is="comic-viewer"] header{ top: 0; left: 0; right: 0; height: 24px; padding: 0 1em; background: rgba(0,0,0,.8); color: rgba(255,255,255,.7); line-height: 24px; font-size: 80%; overflow: hidden; box-sizing: content-box; } comic-viewer footer,[data-is="comic-viewer"] footer{ bottom: 0; left: 0; right: 0; height: 32px; background: rgba(0,0,0,.8); color: rgba(255,255,255,.7); padding: 14px; box-sizing: content-box; } comic-viewer footer > icon-arrow-left,[data-is="comic-viewer"] footer > icon-arrow-left,comic-viewer footer > icon-arrow-right,[data-is="comic-viewer"] footer > icon-arrow-right{ margin-right: 5px; cursor: pointer; } comic-viewer footer > icon-fullscreen-enter,[data-is="comic-viewer"] footer > icon-fullscreen-enter,comic-viewer footer > icon-fullscreen-exit,[data-is="comic-viewer"] footer > icon-fullscreen-exit{ float: right; cursor: pointer; } comic-viewer .outer,[data-is="comic-viewer"] .outer{ overflow: hidden; box-sizing: content-box; } comic-viewer .inner,[data-is="comic-viewer"] .inner{ padding-bottom: 30px; display: block; overflow: hidden; white-space: nowrap; box-sizing: content-box; } comic-viewer .btn-go-forward,[data-is="comic-viewer"] .btn-go-forward,comic-viewer .btn-go-back,[data-is="comic-viewer"] .btn-go-back{ top: 0; bottom: 0; width: 25%; cursor: pointer; } comic-viewer .btn-go-forward,[data-is="comic-viewer"] .btn-go-forward,comic-viewer.rtol .btn-go-back,[data-is="comic-viewer"].rtol .btn-go-back{ right: 0; left: auto; } comic-viewer .btn-go-back,[data-is="comic-viewer"] .btn-go-back,comic-viewer.rtol .btn-go-forward,[data-is="comic-viewer"].rtol .btn-go-forward{ right: auto; left: 0; } comic-viewer .inner > span,[data-is="comic-viewer"] .inner > span{ height: 100%; display: inline-block; background-repeat: no-repeat; background-size: cover; } comic-viewer .inner > span.dummy,[data-is="comic-viewer"] .inner > span.dummy{ visibility: hidden; }', 'class="{fullscreen: fullScreenMode, rtol: rightToLeft}" tabindex="0" riot-style="{style}"', function (opts) {
  var _this = this;

  var book = void 0;
  var scrollLeftOnTouchStart = 0;
  var clientXonTouchStart = 0;
  var fullScreenIsSupported = false;
  var fullScreenIsActive = false;
  var iAmBusy = false;

  this.title = '';
  this.firstPageSpread = false;
  this.rightToLeft = true;

  this.pageCount = 0;
  this.currentIndex = 0;
  this.pageScale = 1;
  this.stack = [];

  this.style = '';
  this.outerStyle = '';
  this.innerStyle = '';
  this.landscapeMode = false;
  this.toolbarMode = false;
  this.fullScreenMode = false;

  this.on('mount', function () {
    fullScreenIsSupported = isSupported(_this.root);
    book = new Book(opts.pages, {
      title: opts.title,
      firstPageSpread: opts.firstPageSpread === 'yes',
      rightToLeft: opts.direction === undefined || opts.direction === 'manga'
    });
    book.on('pageLoaded', function (page) {
      if (iAmBusy) return;
      if (!_this.stack.find(function (p) {
        return p.url === page.url;
      })) return;
      _this.update();
    });
    var title = book.title;
    var firstPageSpread = book.firstPageSpread;
    var rightToLeft = book.rightToLeft;
    var pageCount = book.pages.length;

    var storeKey = opts.pages;
    var currentIndex = (window.localStorage.getItem(storeKey) || 0) - 0;
    var style = (opts.width ? 'width:' + opts.width + 'px;' : '') + (opts.height ? 'height:' + opts.height + 'px;' : '');

    book.load(currentIndex);

    _this.root.setAttribute('style', style);

    var props = { title: title, firstPageSpread: firstPageSpread, rightToLeft: rightToLeft, pageCount: pageCount, currentIndex: currentIndex, style: style };
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
    var w = fullScreenMode ? window.innerWidth : _this.root.offsetWidth;
    var h = fullScreenMode ? window.innerHeight : _this.root.offsetHeight;
    var landscapeMode = h < w;
    var from0 = cur - (landscapeMode ? 2 : 1);
    var from = from0 >= 0 ? from0 : 0;
    var plusOneBefore = landscapeMode && !fps && from === 0;
    var to0 = from0 + (landscapeMode ? 6 : 3) - (plusOneBefore && cur === 0);
    var to = to0 < len ? to0 : len;
    var plusOneAfter = landscapeMode && !!(len % 2 - !fps) && !!(to === len);
    var stack0 = book.pages.slice(from, to);
    var dummyB = plusOneBefore ? Object.assign({ dummy: true }, stack0[0]) : [];
    var dummyA = plusOneAfter ? Object.assign({ dummy: true }, stack0[stack0.length - 1]) : [];
    var stack1 = [].concat(dummyB, stack0, dummyA);
    var stack = rToL ? [].concat(stack1).reverse() : [].concat(stack1);
    var pw = stack.length ? stack[0].width : book.defaultPageWidth;
    var ph = stack.length ? stack[0].height : book.defaultPageHeight;
    var wph = w / h;
    var stageWph = pw * (landscapeMode ? 2 : 1) / ph;
    var stageWidth = wph > stageWph ? h * stageWph : w;
    var stageHeight = wph > stageWph ? h : w / stageWph;
    var pageScale = wph > stageWph ? stageHeight / ph : stageWidth / (landscapeMode ? 2 : 1) / pw;
    var stageMarginTop = wph > stageWph ? 0 : (h - stageHeight) / 2;
    var stageMarginRight = wph > stageWph ? (w - stageWidth) / 2 : 0;
    var fullScreenPolyfill = fullScreenIsSupported || !fullScreenMode ? '' : '\n        position: fixed;\n        top: 0; right: 0; bottom: 0; left: 0;\n        width: ' + window.innerWidth + 'px;\n        height: ' + window.innerHeight + 'px;\n        z-index: 2147483647;\n      ';
    var style = fullScreenPolyfill + (fullScreenMode ? ';' : (opts.width ? 'width:' + opts.width + 'px;' : '') + (opts.height ? 'height:' + opts.height + 'px;' : ''));
    var outerStyle = '\n        width: ' + stageWidth + 'px;\n        height: ' + stageHeight + 'px;\n        margin: ' + stageMarginTop + 'px ' + stageMarginRight + 'px;\n      ';
    var innerStyle = '\n        width: ' + stageWidth + 'px;\n        height: ' + stageHeight + 'px;\n      ';

    var pos = cur - from + (plusOneBefore && cur > 0 ? 1 : 0);
    var taken = rToL ? stack1.slice(pos + (landscapeMode ? 2 : 1), stack1.length) : stack1.slice(0, pos);
    var scrollLeft = pageScale * taken.reduce(function (acc, page) {
      return acc + page.width;
    }, 0);

    Object.assign(_this, {
      fullScreenMode: fullScreenMode,
      landscapeMode: landscapeMode,
      style: style,
      pageScale: pageScale,
      stageWidth: stageWidth,
      outerStyle: outerStyle,
      scrollLeft: scrollLeft,
      innerStyle: innerStyle,
      stack: stack
    });
  });

  this.on('updated', function () {
    _this.refs.stage.scrollLeft = _this.scrollLeft;
  });

  this.on('unmount', function () {
    unregister(_this.update);
    window.removeEventListener('optimizedResize', _this.update);
    _this.root.removeEventListener('keydown', _this.keydown);
  });

  this.toggleMode = function (e) {
    _this.toolbarMode = !_this.toolbarMode;
  };

  this.toggleFullScreen = function (e) {
    if (fullScreenIsSupported) {
      if (_this.fullScreenMode) exit();else request(_this.root);
    } else {
      fullScreenIsActive = !_this.fullScreenMode;
    }
  };

  this.adjustScrollPosition = function (e) {
    var threshold = 0.33;
    var duration = 500;
    var stage = _this.refs.stage;
    var sw = _this.stageWidth;
    var diff = stage.scrollLeft - _this.scrollLeft;

    if (Math.abs(diff) < 1) {

      return Promise.resolve();
    } else if (diff < sw * -1 * threshold) {

      return scrollTo(0, duration, true, stage).then(_this.goForward);
    } else if (diff > sw * threshold) {

      return scrollTo(sw * 2, duration, true, stage).then(_this.goBack);
    } else {

      return scrollTo(_this.scrollLeft, duration, true, stage).then(_this.update);
    }
  };

  this.touchstart = function (e) {
    if (e.touches.length != 1) return;
    scrollLeftOnTouchStart = _this.refs.stage.scrollLeft;
    clientXonTouchStart = e.touches[0].clientX;
    iAmBusy = true;
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
    _this.adjustScrollPosition().then(function () {
      iAmBusy = false;
    });
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

  this.goToLeft = function () {
    if (_this.rightToLeft) _this.goForward();else _this.goBack();
  };

  this.goToRight = function () {
    if (_this.rightToLeft) _this.goBack();else _this.goForward();
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

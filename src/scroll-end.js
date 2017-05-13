const registered = []
let green = true
let touchMode = false

window.addEventListener('touchstart', () => {
  if (!touchMode) {
    touchMode = true
    for (let i = 0; i < registered.length; i++) {
      const o = registered[i]
      o.obj.removeEventListener('scroll', o.delayHandler)
      o.obj.addEventListener('touchend', o.delayHandler)
    }
  }
})

/**
 * fire when the value get stable
 */
export function register (handler, obj) {
  obj = obj || window
  let timer
  const dispatch = () => {
    if (green) handler()
    timer = null
  }
  const delayHandler = () => {
    if (!green) return
    if (timer) window.clearTimeout(timer)
    if (touchMode) handler()
    else timer = window.setTimeout(dispatch, 100)
  }
  registered.push({obj, handler, delayHandler})
  const eventType = touchMode ? 'touchend' : 'scroll'
  obj.addEventListener(eventType, delayHandler)
}

export function unregister (handler, obj) {
  obj = obj || window
  for (let i = 0; i < registered.length; i++) {
    const o = registered[i]
    if (o.obj === obj && o.handler === handler) {
      const eventType = touchMode ? 'touchend' : 'scroll'
      registered.splice(i, 1)
      obj.removeEventListener(eventType, o.delayHandler)
      return
    }
  }
  console.log('No such a handler registered')
}

export function stop () {
  // console.log('scroll detection stopped')
  green = false
}

export function start () {
  // console.log('scroll detection restarted')
  green = true
}

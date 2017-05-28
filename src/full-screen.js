export function isSupported (el) {
  if (el.requestFullscreen) return true
  if (el.webkitRequestFullscreen) return true
  if (el.mozRequestFullScreen) return true
  if (el.msRequestFullscreen) return true
  return false
}

export function request (el) {
  if (el.requestFullscreen) el.requestFullscreen()
  else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen()
  else if (el.mozRequestFullScreen) el.mozRequestFullScreen()
  else if (el.msRequestFullscreen) el.msRequestFullscreen()
}

export function exit () {
  const d = document
  if (d.exitFullscreen) d.exitFullscreen()
  else if (d.webkitExitFullscreen) d.webkitExitFullscreen()
  else if (d.mozCancelFullScreen) d.mozCancelFullScreen()
  else if (d.msExitFullscreen) d.msExitFullscreen()
}

export function register (handler) {
  const add = document.addEventListener
  add('fullscreenchange', handler)
  add('webkitfullscreenchange', handler)
  add('mozfullscreenchange', handler)
  add('MSFullscreenChange', handler)
}

export function unregister (handler) {
  const rem = document.removeEventListener
  rem('fullscreenchange', handler)
  rem('webkitfullscreenchange', handler)
  rem('mozfullscreenchange', handler)
  rem('MSFullscreenChange', handler)
}

export function isActive () {
  return !!(document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullScreenElement ||
    document.msFullscreenElement)
}

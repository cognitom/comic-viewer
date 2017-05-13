/**
 * suppress repeating fire of events
 */
export default function throttle (type, name, obj) {
  obj = obj || window
  let running = false
  obj.addEventListener(type, () => {
    if (running) return
    running = true
    window.requestAnimationFrame(() => {
      obj.dispatchEvent(new window.CustomEvent(name))
      running = false
    })
  })
}

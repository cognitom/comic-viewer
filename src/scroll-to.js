const que = {}

export default function scrollTo (position, duration, horizontal, obj) {
  duration = duration || 1000
  horizontal = horizontal || false
  obj = obj || window
  que[obj] = position
  return new Promise((resolve, reject) => {
    const firstPosition = getPosition()
    const cosParameter = (firstPosition - position) / 2
    let scrollCount = 0
    let oldTimestamp = now()
    window.requestAnimationFrame(step)

    function step (newTimestamp) {
      if (position !== que[obj]) return reject(new Error('Another scroll detected'))
      scrollCount += Math.PI / (duration / (newTimestamp - oldTimestamp))
      if (scrollCount >= Math.PI) {
        setPosition(position)
        return resolve()
      }
      if (getPosition() === position) return resolve()
      const newPosition = position + Math.round(cosParameter + cosParameter * Math.cos(scrollCount))
      setPosition(newPosition)
      if (newPosition === position) return resolve()
      oldTimestamp = newTimestamp
      window.requestAnimationFrame(step)
    }

    function setPosition (pos) {
      if (horizontal) obj.scrollLeft = pos
      else obj.scrollTop = pos
    }

    function getPosition () {
      return horizontal ? obj.scrollLeft : obj.scrollTop
    }
  })
}

function now () {
  return window.performance ? window.performance.now() : window.Date.now()
}

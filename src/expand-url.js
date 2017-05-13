/**
 * Expands a given url to an array of urls
 * ex. '/images/[1-2].jpg' --> ['/images/1.jpg', '/images/2.jpg']
 * @param {string} url - url with expanding syntax
 */
export default function expandUrl (url) {
  const re = /^(.*)\[(\d+)-(\d+)\](.*)$/
  if (!re.test(url)) return [url]

  const m = url.match(re)
  const m2 = m[2] - 0
  const m3 = m[3] - 0
  const prefix = m[1]
  const suffix = m[4]
  const from = m2 < m3 ? m2 : m3
  const to = m2 < m3 ? m3 : m2
  const width = m[2].length // '001' --> 3

  const errorMsg = 'Check your url. The pattern should be like this: /images/[001-032].jpg'
  if (Number.isNaN(from) || Number.isNaN(to)) throw new Error(errorMsg)

  return range(from, to).map(v => prefix + pad(v, width) + suffix)
}

export function range (from, to) {
  return Array.from({length: to - from + 1}, (v, i) => (v || from) + i)
}

export function pad (num, width) {
  const numStr = num + ''
  const p = width - numStr.length
  return (p > 0 ? '0'.repeat(p) : '') + numStr
}

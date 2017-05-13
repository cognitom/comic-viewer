/* eslint-env mocha */
import assert from 'assert'
import {
  default as expandUrl,
  range,
  pad
} from '../../src/expand-url.js'

describe('expand-url', () => {
  it('returns a ranged array', () => {
    const arr = range(4, 5)

    assert.equal(arr.length, 2)
    assert.equal(arr[0], 4)
    assert.equal(arr[1], 5)
  })

  it('returns a padded number', () => {
    assert.equal(pad(11, 5), '00011')
  })

  it('keeps the url as is if it has no expanding expression', () => {
    const url = '/images/a.jpg'
    const arr = expandUrl(url)

    assert.equal(arr.length, 1)
    assert.equal(arr[0], '/images/a.jpg')
  })

  it('expands an url with a single digit', () => {
    const url = '/images/[1-2].jpg'
    const arr = expandUrl(url)

    assert.equal(arr.length, 2)
    assert.equal(arr[0], '/images/1.jpg')
    assert.equal(arr[1], '/images/2.jpg')
  })

  it('expands an url with a double digits', () => {
    const url = '/images/[01-02].jpg'
    const arr = expandUrl(url)

    assert.equal(arr.length, 2)
    assert.equal(arr[0], '/images/01.jpg')
    assert.equal(arr[1], '/images/02.jpg')
  })

  it('expands an url with a tripple digits', () => {
    const url = '/images/[001-002].jpg'
    const arr = expandUrl(url)

    assert.equal(arr.length, 2)
    assert.equal(arr[0], '/images/001.jpg')
    assert.equal(arr[1], '/images/002.jpg')
  })

  it('expands an url starting from a non-one value', () => {
    const url = '/images/[033-035].jpg'
    const arr = expandUrl(url)

    assert.equal(arr.length, 3)
    assert.equal(arr[0], '/images/033.jpg')
    assert.equal(arr[1], '/images/034.jpg')
    assert.equal(arr[2], '/images/035.jpg')
  })

  it('expands an url with a carry', () => {
    const url = '/images/[001-025].jpg'
    const arr = expandUrl(url)

    assert.equal(arr.length, 25)
    assert.equal(arr[0], '/images/001.jpg')
    assert.equal(arr[24], '/images/025.jpg')
  })
})

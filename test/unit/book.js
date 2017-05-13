/* eslint-env mocha */
import assert from 'assert'
import {
  filterProps
} from '../../src/book.js'

describe('book', () => {
  it('returns a filtered object', () => {
    const ref = {a: 'A', b: 'B'}
    const obj = {b: 'BB', c: 'CC'}
    const filtered = filterProps(obj, ref)
    assert.deepEqual(Object.keys(filtered), ['b'])
    assert.equal(filtered.b, 'BB')
    assert.equal(filtered.c, undefined)
  })
})

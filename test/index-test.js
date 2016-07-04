/**
 * Created by personal on 04/07/2016.
 */
import { createDebugSelector, debugMemoize } from '../src/index'
import { expect } from 'chai'

describe('debugMemoize', () => {
  // monkey patch console.log
  let lastPrinted = null
  const oriLog = console.log
  function patchLog() {
    console.log = function(...args) {
      oriLog(...args)
      lastPrinted = args[0]
    }
  }

  beforeEach(patchLog);
  afterEach(function() {
    console.log = oriLog
  })

  it('should log when recompute happens', () => {
    function plus(a, b) {
      return a + b
    }
    const memoized = debugMemoize(plus)
    memoized(10, 10)

    const copiedLastPrinted = lastPrinted

    memoized(10, 10)
    expect(lastPrinted).to.equal(copiedLastPrinted)
    
    memoized(10, 2)
    expect(lastPrinted).to.not.equal(copiedLastPrinted)
  })

  it('should not log when no recompute', () => {
    function plus(a, b) {
      return a + b
    }
    const memoized = debugMemoize(plus)
    memoized(10, 10)

    const copiedLastPrinted = lastPrinted
    expect(lastPrinted).to.be.not.null

    memoized(10, 10)
    expect(lastPrinted).to.equal(copiedLastPrinted)

    memoized(10, 10)
    expect(lastPrinted).to.equal(copiedLastPrinted)
  })
})
const assertEquals = require('./assert-equals')

describe('assertEquals', () => {
  describe('when expected and actual are the same string', () => {
    it('returns without throwing an error', () => {
      expect(() => assertEquals(expect, actual)).not.toThrow()
    })
  })

  describe('when expected and actual are different strings', () => {
    it.todo('throws an error')
  })
})
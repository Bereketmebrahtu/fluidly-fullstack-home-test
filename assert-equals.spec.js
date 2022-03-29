const assertEquals = require('./assert-equals')

describe('assertEquals', () => {
  describe('when expected and actual are the same data type', () => {
    it('returns without throwing an error', () => {
      expect((expect, actual) => assertEquals(expect === actual)).not.toThrow()
    })
  })

  describe('when expected and actual are different data type', () => {
    it.todo('throws an error')
  })
})


describe('assertEquals', () => {
  describe('when expected and actual are the same string length', () => {
    it('returns without throwing an error', () => {
      expect(() => assertEquals()).not.toThrow()
    })
  })

  describe('when expected and actual are different string length', () => {
    it.todo('throws an error')
  })
})
function assertEquals(expect, actual) {
    if(expect === actual) {
        return actual
    }
    else {
        return `expected ${expect} but got ${actual}`
    }

}


const checkEqual = (value) => {
    return typeof(value)
}

let actual = checkEqual(null)
let expected = 'primitive'
assertEquals(expect, actual)

module.exports = assertEquals
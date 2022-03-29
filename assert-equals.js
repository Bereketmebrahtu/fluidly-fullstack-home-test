function assertEquals(expect, actual) {
    if (expect === actual) {
        return ` Passed: ${expect} === ${actual}`
    }
    else {
        return `Failed: expected ${expect} but got ${actual}`
    }

}
const checkEqual = (value) => {
    return typeof (value)
}

let actual = checkEqual(null)
let expect = 'null'
assertEquals(expect, actual)

let actual1 = checkEqual({})
let expect1 = 'object'
assertEquals(expect1, actual1)


const checkLength = (str) => {
    return str.length
}


let actual2 = checkLength('Hello')
let expect2 = 3;
assertEquals(expect2, actual2)

module.exports = assertEquals
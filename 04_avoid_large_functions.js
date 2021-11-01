// bad practice
const addSub = (a, b) => {
    // add
    const addition = a + b
    // sub
    const sub = a - b
    // returning as a string
    return `${addition}${sub}`
}

// good practice
// add
const add = (a, b) => {
    return a + b
}
// sub
const sub = (a, b) => {
    return a - b
}

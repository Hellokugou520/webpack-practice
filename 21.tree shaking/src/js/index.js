import '../css/index.css'
import { test1 } from './test.js'

function sum (...args) {
    return args.reduce((p, c) => p + c, 0)
}

console.log(sum(1, 2, 3, 4, 5, 6))
console.log(test1(2, 3))
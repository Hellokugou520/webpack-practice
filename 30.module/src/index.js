import count from './count'

console.log('index.js加载了')
import('./add').then(({ default: add }) => {
    console.log(add(5, 3))
})
console.log(count(5, 3))
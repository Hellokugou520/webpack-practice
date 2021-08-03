import print from './print'

console.log('index.js被加载了')

if (module.hot) {
    module.hot.accept('./print.js', function () {
        print()
    })
}

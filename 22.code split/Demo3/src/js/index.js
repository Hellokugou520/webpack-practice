function sum (...args) {
    return args.reduce((p, c) => p + c, 0)
}

/*
  通过js代码，让某个文件被单独打包成一个chunk
  import动态导入语法：能将某个文件单独打包
*/
import(/* webpackChunkName: 'myName' */'./test')
    .then(({ test1, test2 }) => {
        console.log(test1(3, 5));
    })
    .catch(() => {
        console.log('文件加载失败~');
    });

console.log(sum(1, 2, 3, 4))
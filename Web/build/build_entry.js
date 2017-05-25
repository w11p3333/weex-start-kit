require('shelljs/global')
const path = require('path')
const fs = require('fs-extra')

const srcPath = path.resolve(__dirname, '../src/views')
const entryPath = path.resolve(__dirname, '../entry/')
const FILE_TYPE = '.vue'

const getEntryFileContent = path => {
  return `// 入口文件
import App from '${path}${FILE_TYPE}'
/* eslint-disable no-new */
new Vue({
  el: '#root',
  render: h => h(App)
})

  `
}

module.exports = () => {
  // 删除原目录
  rm('-rf', entryPath)
  // 写入每个文件的入口文件
  fs.readdirSync(srcPath).forEach(file => {
    const fullpath = path.resolve(srcPath, file)
    const extname = path.extname(fullpath)
    const name = path.basename(file, extname)
    if (fs.statSync(fullpath).isFile() && extname === FILE_TYPE) {
      fs.outputFileSync(path.resolve(entryPath, name + '.js'), getEntryFileContent('../src/views/' + name))
    }
  })
  const entry = {}
    // 单独打包src/views下的每个js文件
  fs.readdirSync(entryPath).forEach(file => {
    const name = path.basename(file, path.extname(path.resolve(entryPath, file)))
    entry[name] = path.resolve(entryPath, name + '.js')
  })
  return entry
}


<p align="center"><img width="100"src="https://market.dotwe.org/assets/images/logo.png"></a></p>

<p align="center">
  <a href="https://circleci.com/gh/w11p3333/weex-start-kit/tree/master"><img src="https://img.shields.io/circleci/project/w11p3333/weex-start-kit/master.svg" alt="Build Status"></a>
  <img src="https://img.shields.io/github/stars/w11p3333/weex-start-kit.svg?style=social&label=Star" alt="Build Status">
  <img src="https://img.shields.io/packagist/l/doctrine/orm.svg" alt="License">
  <br>
</p>

## Intro

weex-start-kit is a simple template for building mobile cross-platform project

## Preview

[Web](https://w11p3333.github.io/weex-start-kit/example/web)

iOS/Android 
Using [playground](https://weex.apache.org/cn/playground.html) scan the code  
<img src="https://qr.api.cli.im/qr?data=https%253A%252F%252Fw11p3333.github.io%252Fweex-start-kit%252Fexample%252Fweex%252Fjs%252Findex.js&level=H&transparent=false&bgcolor=%23ffffff&forecolor=%23000000&blockpixel=12&marginblock=1&logourl=&size=280&kid=cliim&key=02ac6d4ed2d38700ec480bc99b6da32e"
style="width: 100px;" />

## Usage

### web

```bash
# install node_modules
git clone https://github.com/w11p3333/weex-start-kit.git
cd Web
npm install
# watch for dev
npm run dev
# build for production
npm run build
# copy dist to iOS and Android Project (in MACOS)
npm run copy
```

### iOS

```bash
cd iOS/Demo
pod install
# open iOS/Demo/test.xcworkspace
```

### Android

open Android/Demo by Android Studio  

```
make Project -> Run
```

if installed error

```
clean Project -> Rebuild Project -> Run
```

## Q&A

see [article](http://www.jianshu.com/p/497f1a9ff33f)

## Changelog

2017.5.25 first commit

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2017-present, AppleCatKay



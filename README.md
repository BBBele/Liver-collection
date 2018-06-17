# 功能清单
* ~~用于日常记录，比如你今天刷了多少记忆~~
  
* 隐藏所有侧边栏，这里建议用Viramate的童鞋把左侧的侧边栏改成水平的，不然维拉会浮在页面上很难看的..
  
* 修改滚动条样式，现在的滚动条可以用鼠标拖了
  
* 共斗房间搜索。不符合条件的房间会被隐藏，多个搜索项分号分割
# 用法
## 如果你只是单纯要用
* 
  去[这里](https://github.com/zy410419243/Liver-collection/releases)下最新的版本，然后把dist文件夹拖到浏览器的扩展程序里，或者点“加载已解压的扩展程序”，选dist作为路径
* 或者clone下来（需要先装好git及学会它几条命令），装好依赖包，执行npm run build
  
  这样可以获得最新的扩展，release里放的是稳定版，但这种方式不排除会有调试用的map文件 ~~因为我有时候懒得删~~

## 如果你要改代码
### 当你需要只需要修改布局，比如Popup时，执行
``` bash
npm start
```

### 当你需要改环境交互逻辑时，执行
``` bash
npm run dev
```
这条命令会生成map文件便于调试

### 当你只需要打包时，执行
``` bash
npm run build
```
这条命令只会生成压缩后的文件
  
### 还有一条命令
``` bash
npm run push
```
因为截止至上次commit的时候，这扩展都是我一个人维护，也懒得写提交注释，于是就这么放一条好了，
  
~~我才不会想着会有人会来pr的~~
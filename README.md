## react + webpack 实际项目开发脚手架

##### 项目分支
- master 主分支. 关键词 sass es6 ie9+
- mobx   添加mobx进行数据管理.
- redux 添加redux + redux-thunk进行数据管理.

##### 项目目录
- node_modules
- src
    - components
    - containers
    - util  项目中常用的一些方法
    - plugins   插件 —— 打包后直接被copy进dist文件夹, 在index.html 中使用  src="/static/plugins/xx"  即可使用
    - static    
        - images  静态图片文件
        - fonts   静态字体文件
        - styles  公用样式
    - index.html
    - index.jsx
- .babelrc
- package.json
- postcss.config.js
- webpack.dev.config.js
- webpack.prod.config.js


#### 打包后
- dist
    - static
        - css
        - js
        - images
        - fonts
    - index.html
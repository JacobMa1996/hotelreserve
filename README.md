# hotelreserve
全景预览酒店预订系统
本项目基于Nodejs，web框架express。

###Nodejs

Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。 

Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效。 

Node.js 的包管理器 npm，是全球最大的开源库生态系统。

nodejs官方中文API：[nodejs官方中文API](http://nodejs.cn/api/)

###express

Express 是一个基于 Node.js 平台的极简、灵活的 web 应用开发框架，它提供一系列强大的特性，帮助你创建各种 Web 和移动设备应用。

安装Express: [安装Express](http://www.expressjs.com.cn/starter/installing.html)

###启动

假设你已经正确安装nodejs， npm，以及全局express，克隆本项目，在根目录执行`npm install`安装所有依赖。

等待安装完成后，执行`npm start`启动项目。

如果报错，请根据错误提示解决，正确安装和搭建开发环境。

###调试

安装npm模块supervisor，进行无重启调试；
执行`npm install -g supervisor`，安装完成后，在跟目录执行`supervisor ./www/bin`启动项目并开启热更新，每次更改完前端代码只需要刷新页面就可以更新，无须重启。

程序地址为：localhost:3000，若有冲突，请在bin文件夹下www文件下更改端口。

具体页面请根据route路由进行访问。

全景预览地址为http://localhost:3000/panorama。

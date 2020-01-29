const express = require('express');
const app=express();
//数据接收器
const controller=require('./controller/controller')
//post数据接收
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

// 引入ejs后台web视图框架
app.set('view engine','ejs')


//向后端发送数据,
app.post('/order',controller.order)
//前端获取后端的数据，get请求
app.get('/all',controller.showAll)
//前端动态获取后端的数据，get请求
app.get('/all/:phone',controller.showDetail)

//自动配置静态资源
app.use(express.static('public'));
app.listen(3001,function () {
    console.log('已经成功运行3001端口');
})

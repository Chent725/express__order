
// 引入fs
const fs=require('fs');
const {saveData,getAll,getDetail}=require('../methods/file.js')

//点餐反馈。bodyParser解析post数据。
exports.order=function (req,res) {
    const{phone,food}=req.body;
    //存储数据
    saveData(phone,food)
    //反馈给前台
    res.send('成功下单')
};

exports.showAll=function (req,res) {
    //get数据接口，获取数据，采用parmas即可
    const result=req.params;
    //回调（形参）用以接收数据
    getAll(function (result) {
        //自动传入result数据，并且渲染views下面的ejs模板，
        // 必须是对象类型
        res.render('showAll',{result})
    });
}

exports.showDetail=function (req,res) {
    //获取用户id
    let {phone} = req.params
    console.log(phone);
    //将id传入，同时返回回调（形参）用以接收数据
    getDetail(phone,function (result) {
        console.log(result);
        //自动传入result数据，并且渲染views下面的ejs模板，
        res.render('showDetail',result)

    })

}

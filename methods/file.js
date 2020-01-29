
const fs = require('fs');
//保存数据，传入对象phone和food，controller中已经进行对象解析。
exports.saveData = function (phone, food) {
    console.log(phone)
    //动态路径则为``,es6模板字符串写法
    fs.readFile(`./data/${phone}.txt`, function (err, data) {
        //读取到就直接结束，未读取到进行下一步；
        if (data)return;
        //写入参数咯，并且数组解析成可用的字符串
        fs.writeFile(`./data/${phone}.txt`, JSON.stringify({
            phone,
            food
        }), function (err) {
            if (err) {
                console.log('写入失败')
            } else {
                console.log('写入成功')
                console.log(typeof JSON.stringify({
                    phone,
                    food
                }));
            }
        })
    })

};
//获取所有用户列表，调取一个回调函数，当作实参，传递至controller中getAll作为实参
exports.getAll=function (callBack) {
    fs.readdir('./data',function (err,data) {
        if(err)return;
        //便利数组，并且替换.txt,然后返回数组的第一项，
        let result = data.map(item=>{
            return item.split('.')[0]
        })
        //用以接收result数据，传递
        callBack(result)
    })
}
//获取详细参数，通过callback返回，
exports.getDetail=function(phone,callBack){
    fs.readFile(`./data/${phone}.txt`,function (err,data) {
        if(err)return
        //转化为字符串后，转化成数组
        callBack(JSON.parse(data.toString()))
    })


}

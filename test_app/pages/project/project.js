//index.js
//获取应用实例
var app = getApp()
var fileData = require('../../utils/data.js')

Page({
  // 页面初始数据
  data: {
      colors:['red','orange','yellow','green','purple'],
      // banner 初始化
      banner_url: fileData.getBannerData(),
      indicatorDots: true,
      vertical: false,
      autoplay: true,
      interval: 3000,
      duration: 1000,
      // nav 初始化
      navTopItems: fileData.getIndexNavData(),
      navSectionItems: fileData.getIndexNavSectionData(),
      curNavId: 1,
		  curIndex: 0
  },
   
  onLoad:function(){
    var that = this
    that.setData({
      list: that.data.navSectionItems
    })
  },
  //标签切换
  switchTab: function(e) {
      let id = e.currentTarget.dataset.id,
      index = parseInt(e.currentTarget.dataset.index)
      this.curIndex = parseInt(e.currentTarget.dataset.index)
      console.log(e)
      var that = this
      this.setData({
        curNavId: id,
        curIndex: index,
      })
  },

  // 跳转至详情页
  navigateDetail: function(e){
    console.log(e);
    wx.navigateTo({
      url:'../detail/detail?artype=' + e.currentTarget.dataset.artype
    })
  },

  // 加载更多
  loadMore: function (e) {
    console.log('加载更多')
    var curid = this.data.curIndex
    if (this.data.navSectionItems[curid].length === 0) return
    var that = this
    that.data.navSectionItems[curid] = that.data.navSectionItems[curid].concat(that.data.navSectionItems[curid])
    that.setData({
      list: that.data.navSectionItems,
    }) 
  },

  //预定
  acceptMission: function (e) {
    // 获取当前点击下标    
    var Index = e.currentTarget.dataset.index;
    console.log(Index);
    // data中获取列表   
    var missionArr = this.data.navSectionItems;
    for (let i in missionArr[0]) {
      console.log(missionArr[0][i]);

      //遍历列表数据      
      if (i == Index) {
        console.log("当前匹配的位置为："+i);
        //根据下标找到目标,改变状态  
        if (missionArr[0][i].status == 0) {
          missionArr[0][i].status = parseInt(missionArr[0][i].status) + 1
        }
      }
    }

    this.setData({
      list: this.data.navSectionItems
    })
  },

  // 取消预定
 cancelMission: function (e) {

    console.log("进入了取消的预约的事件方法");
    // 获取当前点击下标    
    var Index = e.currentTarget.dataset.index;
    
    // data中获取列表   
    var missionArr = this.data.navSectionItems;
    for (let i in missionArr[0]) {
      //遍历列表数据      
      if (i == Index) {
        //根据下标找到目标,改变状态  
        if (missionArr[0][i].status == 1) {
          missionArr[0][i].status = parseInt(missionArr[0][i].status) - 1
        }
      }
    }
   this.setData({
     list: this.data.navSectionItems
   })
 },

  // 将当前的数据存入后台
  generateOrder: function (options){

    console.log("进入了生成订单的方法");
    // 获取当前页面中已经预约项目的id   
    var dataList = this.data.navSectionItems;    


    //将状态为1的ID全部存储到一个json数组中，然后将数据传递给后台

    var paramArr=new Array();
    for (let i in dataList[0]){
       if(dataList[0][i].status==1){        
         paramArr.push(dataList[0][i].id);
       }
    }

    var paramStr=JSON.stringify(paramArr);
    var postData={
      "paramArr":paramArr
    }

    // wx.request({
      //url: 'http://192.168.20.216:8080/test',
      // data:postData,
      // method:'POST',
      // header:{
      //   'content-type':'application/x-www-form-urlencoded'
      // },

   
      // success:function(res){
      //   console.log("数据进行了调用，并进行了数据返回");
      // },
      // error:function(res){
      //   console.log("数据连接后台出现错误")
      // }
      
    // })
    console.log("发送往后台的数据结束");
    console.log(paramArr); 
    wx.redirectTo({
      url: '../book/book',
    })
  }
})

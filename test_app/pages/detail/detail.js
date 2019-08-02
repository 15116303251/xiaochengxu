var app = getApp()
Page( {
  data: {
  },
  onLoad: function (options) {
    console.log("进入了商品的详情页");
    console.log(options.artype);
    this.setData({
      artype:options.artype
    })    
  },
  getLocation:function(){
    wx.navigateTo({
      url:'../location/location'
    })
  },
  bookTap:function(){
    wx.navigateTo({
      url:'../book/book'
    })
  }
})
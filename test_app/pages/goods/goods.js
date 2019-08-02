// pages/goods/goods.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mark: 'home',
    goods: [
      {
        name: '盲辉',
        price: '67',
        job: '店长',
        skills:["洗发","剪发","吹发"],
        goodRate: 0,
        reservationNum: 0,
        achieveNum:40
      },
      {
        name: 'Alex1',
        price: '12',
        job: '总监',
        skills: ["洗发", "剪发", "吹发"],
        goodRate: 0,
        reservationNum: 0,
        achieveNum: 40
      },
      {
        name: 'Alex',
        price: '12',
        job: '总监',
        skills: ["洗发", "剪发", "吹发"],
        goodRate: 0,
        reservationNum: 0,
        achieveNum: 40
      },
      {
        name: 'Alex',
        price: '12',
        job: '总监',
        skills: ["洗发", "剪发", "吹发"],
        goodRate: 0,
        reservationNum: 0,
        achieveNum: 40
      },
      {
        name: 'Alex',
        price: '12',
        job: '总监',
        skills: ["洗发", "剪发", "吹发"],
        goodRate: 0,
        reservationNum: 0,
        achieveNum: 40
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.mark = options.mark;
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  /**
   * 点击预约 
   */
  btnClickGoodsItem: function (e) {
    console.log("从首页点击预约进来");
    console.log(this.data.mark);

    // switch (this.data.mark) {
    //   case 'home':
    //     let barberItemStr = JSON.stringify(e.currentTarget.dataset.item);
    wx.navigateTo({
      url: '../project/project'
    })
    //     break;
    //   // 从预约编辑页面点击添加商品按钮进来
    //   case 'edit_appointment':
    //     // 返回参数 
    //     let pages = getCurrentPages();
    //     let appointmentPage = pages[pages.length - 2]
    //     appointmentPage.setData({
    //       barber: e.currentTarget.dataset.item,
    //       showBarber: true
    //     })
    //     wx.navigateBack({
    //       delta: 1
    //     })
    //     break;
    // }
    // e.currentTarget.dataset.item
    
  }
})
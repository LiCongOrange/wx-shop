//index.js
//获取应用实例
const app = getApp()
Page({
  handleJump:function(e){
    //1:获取扩展属性值
    var id = e.target.dataset.id;
    //2:判断跳转
    if(id==1){
      wx.navigateTo({
        url: '/pages/shoplist/shoplist',
      })
    }
    var id = e.target.dataset.id;
    if(id==2){
      wx.navigateTo({
        url: '/pages/mslist/mslist',
      })
    }
    var id = e.target.dataset.id;
    if(id==3){
      wx.navigateTo({
        url: '/pages/mvlist/mvlist',
      })
    }
  },

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {id:1,img_url:"http://127.0.0.1:3000/img/banner1.png"},
      {id:2,img_url:"http://127.0.0.1:3000/img/banner2.png"},
      {id:3,img_url:"http://127.0.0.1:3000/img/banner3.png"},
      {id:4,img_url:"http://127.0.0.1:3000/img/banner4.png"}
    ],
    navlist:[
      {id:1,img_url:"http://127.0.0.1:3000/icons/grid-01.png",title:"购物"},
      {id:2,img_url:"http://127.0.0.1:3000/icons/grid-02.png",title:"美食"},
      {id:3,img_url:"http://127.0.0.1:3000/icons/grid-03.png",title:"电影"},
    ],
    navlista: [
      { id: 1, img_url: "http://127.0.0.1:3000/img/tj1.png", title: "ILIFE扫地机器人" },
      { id: 2, img_url: "http://127.0.0.1:3000/img/tj2.png", title: "精致潮奢 冬日暖男" },
      { id: 3, img_url: "http://127.0.0.1:3000/img/tj3.png", title: "100%实木家具" },
      { id: 4, img_url: "http://127.0.0.1:3000/img/tj4.png", title: "D-PLAY" },
      { id: 5, img_url: "http://127.0.0.1:3000/img/tj5.png", title: "冬季补钙 营养好物" },
      { id: 6, img_url: "http://127.0.0.1:3000/img/tj6.png", title: "复古巴洛克耳环" },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    
  }
})

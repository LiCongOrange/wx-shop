

Page({
  loadMore:function(){
    if(this.data.hasMore == false) return;
    //加载下一页数据
    //1:获取二个数值 pno pageSize
    var pno = this.data.pageIndex + 1;
    var ps = this.data.pageSize;
    //2:发送ajax请求
    wx.request({
      url: 'http://127.0.0.1:3000/findshops',
      data:{pno:pno,pageSize:ps},
      success:(res)=>{
        //console.log(result.data.data);
        //2.1:保存返回数据 拼接
        var rows = this.data.list.concat(
          res.data.data
        );
        var pageCount = res.data.pageCount;
        var flag = pno < pageCount;
        this.setData({
          list:rows,
          hasMore: flag,
          pageIndex:pno
          });
        //2.2:显示加载动画
        wx.showLoading({
          title: '正在努力加载数据....',
        });
        //2.3:卸载加载动画
        setTimeout(function(){
          wx.hideLoading();
        },1500);
        //3:在shoplist.wxml 显示列表数据
      }
    })
    //4:上拉触顶加载下一页 
  },
  data: {
     list:[],     //当前页内容
     pageIndex:0, //页码
     pageSize:7, 
     hasMore:true,  //页大小
    alist: [
      { id: 1, img_url: "http://127.0.0.1:3000/img/l1.png" },
      { id: 2, img_url: "http://127.0.0.1:3000/img/l2.png" },
      { id: 3, img_url: "http://127.0.0.1:3000/img/l3.png" },
      { id: 4, img_url: "http://127.0.0.1:3000/img/l4.png" }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadMore();
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
   // console.log(123);
    this.loadMore();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
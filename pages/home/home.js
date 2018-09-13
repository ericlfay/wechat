// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 'homepage',
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1500,
    homepage: false,
    group: true,
    remind: true,
    mine: true
  },
  handleChange({ detail }) {
    if (detail.key == "homepage"){
      this.setData({
        current: detail.key,
        homepage: false,
        group: true,
        remind: true,
        mine: true
      });
    } else if (detail.key == "group") {
      this.setData({
        current: detail.key,
        homepage: true,
        group: false,
        remind: true,
        mine: true
      });
    } else if (detail.key == "remind") {
      this.setData({
        current: detail.key,
        homepage: true,
        group: true,
        remind: false,
        mine: true
      });
    }else{
      this.setData({
        current: detail.key,
        homepage: true,
        group: true,
        remind: true,
        mine: false
      }); 
    }
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
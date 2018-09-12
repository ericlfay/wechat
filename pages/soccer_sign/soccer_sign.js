// pages/soccer_sign/soccer_sign.js
const app = getApp()
const { $Toast } = require('../../dist/base/index');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    realname: '',
    position_index: 0,
    date: '1995-01-20',
    position: '请选择长踢位置',
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindPickerChange: function (e) {
    this.setData({
      position_index: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  usernameInput: function (e) {
    this.setData({
      username: e.detail.value
    })
  },
  realnameInput: function (e) {
    this.setData({
      realname: e.detail.value
    })
  },
  onLoad: function (options) {

  },
  submit: function (e) {
    if (!this.data.username) {
      $Toast({
        content: '请输入昵称！',
        type: 'error'
      });
    }
    else{
      if (this.data.real_name.indexOf(this.data.realname) != -1) {
      wx.request({
        url: 'https://ericlfay.cn:8080/wechat/user/',
        method: "POST",
        data: {
          username: this.data.username,
          wechat_username: app.globalData.userInfo.nickName,
          realname: this.data.realname,
          birth: this.data.date,
          user_tag: '0',
          position: this.data.position_list[this.data.position_index][0]
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          wx.redirectTo({
            url: '../home/home'
          })
        }
      })
    }else{
      $Toast({
        content: '真实姓名不存在！',
        type: 'error'
      });
      }
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var _this = this
    wx.request({
      url: 'https://ericlfay.cn:8080/wechat/user/',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        _this.setData({
          position_list: res.data.result,
          real_name: res.data.realname
        });
      }
    })
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
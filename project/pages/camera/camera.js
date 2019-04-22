// pages/camera/camera.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  openCamera: function () {
    var that = this;
    this.cameraCtx = wx.createCameraContext()
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], 
      sourceType: ['camera'],
      success: function (res) {
        that.setData({
          imagesrc: res.tempFilePaths
        })
      }
    })
  },
  fail: function (res) {
    console.log(res.errMsg)
  },

  startRecord: function () {
    var that = this;
    this.cameraCtx = wx.createCameraContext()
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: 'back',
      success(res) {
        that.setData({
          videosrc: res.tempFilePath
        })
      }
    })
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
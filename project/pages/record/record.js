// pages/record/record.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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

  },

  startRecordVoice: function () {
    wx.showToast({
      title: '开始录音',
      icon: 'loading',
      duration: 1000
    })
    var that = this;
    wx.startRecord({
      success: function (res) {
        wx.hideToast()
        wx.showToast({
          title: '恭喜!录音成功',
          icon: 'success',
          duration: 1000
        })
        // 调用了停止录音接口就会触发这个函数，res.tempFilePath为录音文件临时路径
        var tempFilePath = res.tempFilePath
        that.setData({
          path: res.tempFilePath,
        })
      },
      fail: function (res) {
        //录音失败的处理函数
        wx.showModal({
          title: 'warning!!!',
          content: '录音失败!',
          success(res) {
            if (res.confirm) {
              console.log('用户点击确定')
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      }
    })
  },

  stopRecordVoice: function () {
    wx.stopRecord()
  },

  playRecordVoice: function () {
    var that = this;
    wx.playVoice({
      filePath: this.data.path // src可以是录音文件临时路径
    })
  }

})
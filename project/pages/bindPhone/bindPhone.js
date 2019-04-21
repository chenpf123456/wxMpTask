Page({
  /**
   * 页面的初始数据
   */
  data: {
    ajxtrue: false,
  },
  // 手机号验证
  blurPhone: function (e) {
    var phone = e.detail.value;
    let that = this
    if (!(/^1[34578]\d{9}$/.test(phone))) {
      this.setData({
        ajxtrue: false
      })
      if (phone.length >= 11) {
        wx.showToast({
          title: '手机号有误',
          icon: 'none',
          duration: 2000
        })
      }
    } else {
      this.setData({
        ajxtrue: true
      })
      console.log('验证成功', that.data.ajxtrue)
    }
  },
  // 表单提交
  formSubmit(e) {
    let that = this
    let val = e.detail.value
    let ajxtrue = this.data.ajxtrue
    if (ajxtrue == true) {
      wx.showModal({
        title: '结果',
        content: '验证成功',
        complete :function(){
          wx.navigateBack(); 
        }
      }) 
    } else {
      wx.showToast({
        title: '手机号有误',
        icon: 'none',
        duration: 2000
      })
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
// pages/getLocation/getLocation.js
Page({
  onReady(e) {
    // 使用 wx.createMapContext 获取 map 上下文
    this.mapCtx = wx.createMapContext('myMap');
  },
  getMyCurrentLocation() {
    this.mapCtx.moveToLocation();
  },
  //获取手机电量信息
  getPhoneBatteryInfo() {
    var chargeStr = '';
    var _this = this;
    wx.getBatteryInfo({
      success(res) {
        const isCharging = res.isCharging;
        if (isCharging) {
          chargeStr = '是';
        } else {
          chargeStr = '否';
        }
        _this.setData({
          chargeStr: chargeStr
        });
        _this.setData({
          level: res.level
        });
      }
    });

  },
  // 获取手机网络类型
  getPhoneNetworkType() {
    var _this = this;
    var networkType = '';
    wx.getNetworkType({
      success(res) {
        networkType = res.networkType;
        _this.setData({
          networkType: networkType
        });
      }
    });

  }
})
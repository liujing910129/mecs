// pages/yingyong/yingyong.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mode: "scaleToFill",
    arr: [],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
         xingzhengbangong: [{
                 picname: "http://mecs.ip165.com/WeiXin/Style/Image/Menu/qiyedongli.png",
                 name: "企业动力",
         },
         ],
          renliziyuan: [{
                  picname: "http://mecs.ip165.com/WeiXin/Style/Image/Menu/qiyedongli.png",
                  name: "企业动力",
          },
          ],
          waiqinguanli: [{
                  picname: "http://mecs.ip165.com/WeiXin/Style/Image/Menu/qiyedongli.png",
                  name: "企业动力",
          },
          ],
          crm: [{
                  picname: "http://mecs.ip165.com/WeiXin/Style/Image/Menu/qiyedongli.png",
                  name: "企业动力",
          },
          ],
          jinxiaocun: [{
                  picname: "http://mecs.ip165.com/WeiXin/Style/Image/Menu/qiyedongli.png",
                  name: "企业动力",
          },
          ],
          guanlizhongxin: [{
                  picname: "http://mecs.ip165.com/WeiXin/Style/Image/Menu/qiyedongli.png",
                  name: "企业动力",
          },
          ],
          gerenyingyong: [{
                  picname: "http://mecs.ip165.com/WeiXin/Style/Image/Menu/qiyedongli.png",
                  name: "企业动力",
          },
          ],
          yewuguanli: [{
                  picname: "http://mecs.ip165.com/WeiXin/Style/Image/Menu/qiyedongli.png",
                  name: "企业动力",
          },
          ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var array = this.data.arr
    for (let i = 1; i < 2; i++) {
      array.push("../../images/index/" + i + ".png")
    }
    this.setData({ arr: array })
  },
  /**
   * 
   */
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh();

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
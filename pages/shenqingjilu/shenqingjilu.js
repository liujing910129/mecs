// pages/shenqingjilu/shenqingjilu.js
Page({

        /**
          * 页面的初始数据
          */
        data: {
                typename:"申请记录",
                mode: "scaleToFill",
                arr: [],
                indicatorDots: true,
                autoplay: true,
                interval: 2000,
                duration: 1000,
                shenqingjilu: [{
                        title: "1",
                        buzhou: "1",
                        state: "1",
                        time: "1",
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
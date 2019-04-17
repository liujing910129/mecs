// pages/oashenpi/oashenpi.js
var app = getApp()
Page({

        /**
         * 页面的初始数据
         */
        data: {
                typename:'OA审批',
                height: 0,
                widHeight: 0,
                currentTab: 0,
                oadaiban: [{
                        title: "1",
                        buzhou: "1",
                        state: "1",
                        time: "1",
                },
                ],
                oashoutuo: [{
                        title: "2",
                        buzhou: "2",
                        state: "2",
                        time: "2",
                },
                ],
                oaguaqi: [{
                        title: "3",
                        buzhou: "3",
                        state: "3",
                        time: "3",
                },
                ]
        },
        /**
         * 生命周期函数--监听页面加载
         */
        onLoad: function (options) {
                var query = wx.createSelectorQuery();
                var that = this;
                /**
                 * 获取系统信息
                 */
                var daiban = this.data.oadaiban.length;
                query.select('.contentViewcss').boundingClientRect(function (rect) {
                        that.setData({
                                // 获取要循环标签的高度
                                height: rect.height,
                                widHeight: rect.height * daiban + "px"
                        })
                }).exec();
        },
        //滑动切换
        swiperTab: function (e) {
                var that = this;
                // 获取单个轮播循环的高度
                var heights = this.data.height;
                // 获取一级成员的数组个数
                var daiban = this.data.oadaiban.length
                // 获取二级成员的数组个数
                var shoutuo = this.data.oashoutuo.length
                // 获取三级成员的数组个数
                var guaqi = this.data.oaguaqi.length
                that.setData({
                        currentTab: e.detail.current
                });
                if (this.data.currentTab == 0) {
                        that.setData({
                                widHeight: heights* daiban + "px"
                        });
                        //console.log(this.data.daiban.length)
                } 
                else if(this.data.currentTab == 1){
                        that.setData({
                                widHeight: heights * shoutuo + "px"
                        });
                        //console.log(this.data.shoutuo.length)
                }
                else {
                that.setData({
                        widHeight: heights * guaqi + "px"
                });
                        //console.log(this.data.guaqi.length)
        }
        },
        //点击切换
        clickTab: function (e) {

                var that = this;

                if (this.data.currentTab === e.target.dataset.current) {
                        return false;
                } else {
                        that.setData({
                                currentTab: e.target.dataset.current
                        })
                }
        }
})
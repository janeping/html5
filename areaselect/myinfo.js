var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    citySelect:'',
    cityArr:{cid: "1", name: "常州"}, {cid: "2", name: "无锡"}, {cid: "3", name: "泰州"}, {cid: "4", name: "南通"}],
    cityId:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    that.getCityArr();
  },
  closeModal: function (e) {
    this.setData({
      modalName: null
    })
  },
  //选择城市
  radioChange:function(e){
    var that = this;
    var cityArrlen = that.data.cityArr.length; 
    var currentIndex = e.currentTarget.id;
    var cityName = e.currentTarget.dataset.name;
    var cityId = e.currentTarget.dataset.id;
    //console.log(cityId);
    that.setData({
      citySelect: cityName,
      cityId: cityId
    })
    for (var i = 0; i < cityArrlen;i++){
      if (i == currentIndex) {
        that.data.cityArr[i].checked = true;
      } else {
        that.data.cityArr[i].checked = false;
      }
    }

    that.setData({
      cityArr: that.data.cityArr
    })
  },
  /**报错提示 */
  showerrorModal: function (msg) {
    var showName = 'errormodal';
    this.setData({
      errorMsg: msg,
      modalName: showName
    })
  },
  closeerrorModal: function (e) {
    this.setData({
      errorMsg: '',
      modalName: null
    })
  },
})
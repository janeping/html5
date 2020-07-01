var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    citySelect:'',
    cityArr:[{cid: "1", name: "常州",'checked':false}, {cid: "2", name: "无锡",'checked':false}, {cid: "3", name: "泰州",'checked':false}, {cid: "4", name: "南通",'checked':false}],
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
  },
  //选择城市
  radioChangebtn(e){
    var that = this;
    var cityArrlen = that.data.cityArr.length; 
    var currentIndex = e.currentTarget.id;
    var cityName = e.currentTarget.dataset.name;
    var cityId = e.currentTarget.dataset.id;
    console.log(e);
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
  /*显示弹窗*/
  radioChange: function () {
    let showName = 'singleModal';
    this.setData({
      modalName: showName
    })
  },
  //关闭弹窗
  closeModal: function (e) {
    this.setData({
      modalName: null
    })
  },
})

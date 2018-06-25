Page({
  data:{
    imgUrls: [{ src: '/assets/image/banner.jpg', mode: 'aspectfill' },
    { src: '/assets/image/banner2.jpg', mode: 'aspectfill' },
    { src: '/assets/image/banner3.jpg', mode: 'aspectfill' }],
    current:'tab1'
  },
  handleChange({detail}){
this.setData({
  current:detail.key
});
  },
  onLoad:function(options){

  },
})
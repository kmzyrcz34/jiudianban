// page/market/market.js
Component({

    /**
     * 页面的初始数据
     */
    data: {
        isShow: true,
        visible: false,
        textPassword: ''
    },
    methods: {
        handlePopup(e) {
            console.log(e);
          const { item } = e.currentTarget.dataset;
    
          this.setData(
            {
              cur: item,
            },
            () => {
              this.setData({ visible: true });
            },
          );
        },
        onVisibleChange(e) {
          this.setData({
            visible: e.detail.visible,
          });
        },
        onClose() {
          this.setData({
            visible: false,
          });
        },
      },
})
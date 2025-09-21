<template>
  <div class="m-tabBar">
    <div
      :class="
        currentPath === item.pagePath
          ? 'm-tabBar-item m-tabBar-item-active'
          : 'm-tabBar-item'
      "
      v-for="item in list"
      :key="item.pagePath"
      @click="setPage(item)"
    >
      <image
        class="m-tabBar-item-icon"
        :src="
          currentPath === item.pagePath ? item.selectedIconPath : item.iconPath
        "
        mode="heightFix"
      />
      <span class="m-tabBar-item-text">{{ item.text[lang] }}</span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      list: [
        {
          pagePath: "pages/tabbar/home/index",
          iconPath: "/static/tabbar/home.svg",
          selectedIconPath: "/static/neco.svg",
          text: {
            "zh-CN": "首页",
            "en-US": "Home",
            "vi-VN": "trang nhất",
          },
        },
        // {
        //   pagePath: "pages/tabbar/category/category",
        //   iconPath: "/static/tabbar/category.svg",
        //   selectedIconPath: "/static/tabbar/category-s.svg",
        //   text: "分类",
        // },
        // {
        //   pagePath: "pages/tabbar/cart/cartList",
        //   iconPath: "/static/tabbar/cart.svg",
        //   selectedIconPath: "/static/tabbar/cart-s.svg",
        //   text: "购物车",
        // },
        {
          pagePath: "pages/tabbar/community/community",
          iconPath: "/static/tabbar/community.svg",
          selectedIconPath: "/static/tabbar/icommunity-s.svg",
          text: {
            "zh-CN": "社区沙龙",
            "en-US": "Community Salon",
            "vi-VN": "Salon cộng đồng",
          },
        },
        {
          pagePath: "pages/tabbar/chat/chat",
          iconPath: "/static/tabbar/info.svg",
          selectedIconPath: "/static/tabbar/info-s.svg",
          text: {
            "zh-CN": "边聊边选",
            "en-US": "Chat And Choose",
            "vi-VN": "Trò chuyện và lựa chọn",
          },
        },
        {
          pagePath: "pages/my/stockReturn",
          iconPath: "/static/tabbar/stockReturn.svg",
          selectedIconPath: "/static/tabbar/stockReturn-s.svg",
          text: {
            "zh-CN": "消费返股",
            "en-US": "Consumption Rebate",
            "vi-VN": "Hoàn tiền tiêu dùng",
          },
        },
        // {
        //   pagePath: "pages/tabbar/user/my",
        //   iconPath: "/static/tabbar/mine.svg",
        //   selectedIconPath: "/static/tabbar/mine-s.svg",
        //   text: "我的",
        // },
      ],
      currentPath: "",
    };
  },
  computed: {
    ...mapState(["lang"]),
  },
  mounted() {
    this.updateCurrentPath();
  },

  methods: {
    updateCurrentPath() {
      const pages = getCurrentPages();
      if (pages.length) {
        this.currentPath = pages[pages.length - 1].route;
      }
    },
    setPage(item) {
      if (item.pagePath === "pages/tabbar/chat/chat") {
        return uni.showToast({
          title: this.$t("暂未开放"),
          icon: "none",
        });
      }

      if (this.currentPath !== item.pagePath) {
        uni.navigateTo({
          url: "/" + item.pagePath,
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.m-tabBar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 148rpx;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: env(safe-area-inset-bottom); // 适配iphoneX的底部
  // padding: 0 42rpx;
  z-index: 800;
  // box-shadow: 0px -10px 20px 0px rgba(0, 0, 0, 0.1);
  border-top: 2rpx solid rgba(0, 0, 0, 0.1);
  .m-tabBar-item {
    flex: 1;
    height: 148rpx;
    border-radius: 40rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8rpx;
    .m-tabBar-item-icon {
      // width: 44rpx !important;
      height: 44rpx;
    }
    .m-tabBar-item-text {
      font-size: 24rpx;
      text-align: center;
    }
  }
  .m-tabBar-item-active {
    .m-tabBar-item-text {
      color: #07C160;
      font-weight: bold;
    }
  }
}
</style>

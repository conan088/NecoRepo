<template>
  <div class="m-navbar" :class="className">
    <div class="status_bar"></div>
    <div class="navbar-con">
      <div v-if="!showLeft"></div>
      <div v-else class="m-navbar-l" @click="leftHandler">
        <image src="@/static/svg/goback.svg" mode="" />
        <span v-if="leftText" class="m-navbar-l-text">{{ leftText }}</span>
      </div>
      <div class="m-navbar-c">{{ title }}</div>
      <div class="m-navbar-r">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "m-navbar",
  props: {
    className: {
      type: String,
      default: "",
    },
    leftText: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    leftHandler: {
      type: Function,
      default: () => {
        uni.navigateBack({
          delta: 1,
        });
      },
    },
    showLeft: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="less" scoped>
* {
  box-sizing: border-box;
}
.status_bar {
  height: var(--status-bar-height);
  width: 100%;
  // background: #000;
}
.m-navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  background: #f2f4f6;

  .navbar-con {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100rpx;
    padding: 0 32rpx;
    // background: red;
    .m-navbar-l {
      display: flex;
      align-items: center;
      gap: 10rpx;
      > image {
        width: 20rpx;
        height: 36rpx;
        margin-bottom: 6rpx;
      }
      .m-navbar-l-text {
        font-size: 40rpx;
        color: #000;
        margin-bottom: 6rpx;
        font-weight: 700;
      }
    }
    .m-navbar-c {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      font-size: 36rpx;
      color: #000;
      font-weight: 700;
    }
  }
}
</style>

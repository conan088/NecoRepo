<template>
  <div class="m-notice">
    <div class="notice-con">
      <image class="notice-icon" src="@/static/svg/speaker.svg" mode="" />

      <swiper
        class="notice-info"
        circular
        disable-touch
        vertical
        autoplay
        :interval="3000"
      >
        <swiper-item class="notice-text" v-for="(item, i) in list" :key="i">
          {{ $t("恭喜") }}<span class="notice-name">{{ item.name }}</span>
          {{ $t("成为什么VIP会员", { src: vip[item.vip] }) }}
        </swiper-item>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          name: "用户111",
          vip: "1",
        },
        {
          name: "用户222",
          vip: "2",
        },
        {
          name: "用户333",
          vip: "3",
        },
      ],

      vip: {
        1: "白银",
        2: "黄金",
        3: "黑砖",
      },
    };
  },

  mounted() {},
  beforeDestroy() {},
  methods: {},
};
</script>

<style lang="less" scoped>
.m-notice {
  padding: 0 32rpx;
  .notice-con {
    background: #fff;
    height: 66rpx;
    border-radius: 32rpx 32rpx 32rpx 0;
    padding: 16rpx;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    .notice-icon {
      width: 28rpx;
      height: 28rpx;
      margin-right: 10rpx;
    }
    .notice-info {
      width: 100%;
      height: 34rpx;
      overflow: hidden;

      .notice-text {
        height: 34rpx;
        line-height: 34rpx;
        font-size: 24rpx;
        color: #666;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        .notice-name {
          color: #333;
          margin: 0 10rpx;
          font-weight: 700;
        }
      }
    }
  }
}
</style>

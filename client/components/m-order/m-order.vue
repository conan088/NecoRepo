<template>
  <div class="m-order">
    <div class="order-con">
      <image class="order-icon" src="@/static/svg/transportation.svg" mode="" />

      <swiper
        class="order-info"
        circular
        disable-touch
        vertical
        autoplay
        :interval="3000"
      >
        <swiper-item class="order-text" v-for="(item, i) in list" :key="i">
          <span class="transportation"
            >{{ $t("订单运输中") }}{{ i + 1 }}/{{ list.length }}</span
          >
          <span class="content">{{ item.content }}</span>
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
          content: "[成都市]您的快递正在配送您的快递正在配送",
        },
        {
          content: "[成都市]您的快递正在配送您的快递正在配送",
        },
      ],
    };
  },

  mounted() {},
  beforeDestroy() {},
  methods: {},
};
</script>

<style lang="less" scoped>
.m-order {
  padding: 0 32rpx;
  .order-con {
    background: rgba(0, 0, 0, 0.05);
    height: 60rpx;
    border-radius: 32rpx 32rpx 32rpx 0;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    .order-icon {
      width: 60rpx;
      height: 60rpx;
      border-radius: 50%;
      margin-right: 10rpx;
    }
    .order-info {
      width: 100%;
      height: 34rpx;
      overflow: hidden;

      .order-text {
        height: 34rpx;
        line-height: 34rpx;
        font-size: 24rpx;
        color: #666;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        .transportation {
          color: #000;
          margin-right: 10rpx;
        }
      }
    }
  }
}
</style>

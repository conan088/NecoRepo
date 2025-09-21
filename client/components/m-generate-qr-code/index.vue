<template>
  <div class="m-generate-qr-code">
    <uqrcode
      ref="uqrcode"
      canvas-id="qrcode"
      :value="content"
      :options="options"
      :size="size"
      sizeUnit="rpx"
    ></uqrcode>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: "",
    },
    size: {
      type: Number,
      default: 200,
    },
  },
  data() {
    return {
      options: {
        margin: 10,
      },
    };
  },

  mounted() {},
  methods: {},
};
</script>

<style lang="less" scoped>
.m-generate-qr-code {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

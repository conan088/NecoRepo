<template>
  <image
    :style="{ width: width + 'rpx', height: height + 'rpx' }"
    class="qr-code"
    src="@/static/svg/scan.svg"
    mode="widthFix"
    @click="scan()"
  />
</template>

<script>
import config from "@/config/config";
import permission from "@/js_sdk/wa-permission/permission.js"; //权限工具类
export default {
  props: {
    width: {
      type: Number,
      default: 36,
    },
    height: {
      type: Number,
      default: 36,
    },
  },
  data() {
    return {
      config,
      isIos: "",
    };
  },
  mounted() {},
  methods: {
    /**
     * 唤醒客户端扫码
     * 没权限去申请权限，有权限获取扫码功能
     */
    async scan() {
      // #ifdef APP-PLUS
      this.isIos = plus.os.name == "iOS";
      // 判断是否是Ios
      if (this.isIos) {
        const iosFirstCamera = uni.getStorageSync("iosFirstCamera"); //是不是第一次开启相机
        if (iosFirstCamera !== "false") {
          uni.setStorageSync("iosFirstCamera", "false"); //设为false就代表不是第一次开启相机
          this.scanCode();
        } else {
          if (permission.judgeIosPermission("camera")) {
            this.scanCode();
          } else {
            // 没有权限提醒是否去申请权限
            this.tipsGetSettings();
          }
        }
      } else {
        /**
         * TODO 安卓 权限已经授权了，调用api总是显示用户已永久拒绝申请。人傻了
         * TODO 如果xdm有更好的办法请在 https://gitee.com/beijing_hongye_huicheng/lilishop/issues 提下谢谢
         */
        this.scanCode();
      }

      // #endif

      // #ifdef MP-WEIXIN
      this.scanCode();
      // #endif
    },

    /**
     * TODO 扫码功能后续还会后续增加
     * 应该实现的功能目前计划有：
     * 扫描商品跳转商品页面
     * 扫描活动跳转活动页面
     * 扫描二维码登录
     * 扫描其他站信息 弹出提示，返回首页。
     */
    scanCode() {
      uni.scanCode({
        success: function (res) {
          let path = encodeURIComponent(res.result);

          if (path != undefined && path.indexOf("QR_CODE_LOGIN_SESSION") == 0) {
            console.log(path);
            //app扫码登录
            uni.navigateTo({
              url: "/pages/passport/scannerCodeLoginConfirm?token=" + path,
            });
            return;
          }

          // WX_CODE 为小程序码
          if (res.scanType == "WX_CODE") {
            console.log(res);
            uni.navigateTo({
              url: `/${res.path}`,
            });
          } else {
            config.scanAuthNavigation.forEach((src) => {
              if (res.result.indexOf(src) != -1) {
                uni.navigateTo({
                  url: `/${res.result.substring(src.length)}`,
                });
              } else {
                setTimeout(() => {
                  uni.navigateTo({
                    url: "/pages/tabbar/home/web-view?src=" + path,
                  });
                }, 100);
              }
            });
          }
        },
      });
    },

    /**
     * 提示获取权限
     */
    tipsGetSettings() {
      uni.showModal({
        title: this.$t("提示"),
        content: this.$t("您已经关闭相机权限,去设置"),
        success: function (res) {
          if (res.confirm) {
            if (this.isIos) {
              plus.runtime.openURL("app-settings:");
            } else {
              permission.gotoAppPermissionSetting();
            }
          }
        },
      });
    },
  },
};
</script>

<style lang="less" scoped>
// .qr-code {
//   width: 36rpx;
//   height: 36rpx;
// }
</style>

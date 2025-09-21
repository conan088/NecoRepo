<template>
  <u-popup v-model="showPass" mode="center" class="password_popup">
    <view class="pass_box">
      <div class="pass_title">{{ $t("设置支付密码") }}</div>
      <div class="pass_input">
        <u-input
          v-model="password"
          :maxlength="6"
          type="number"
          :placeholder="$t('请输入6位支付数字密码')"
        />
        <u-input
          v-model="passwordAgain"
          type="text"
          :maxlength="6"
          :placeholder="$t('请再次输入密码')"
        />
      </div>
      <div class="pass_btn">
        <div class="btn_cancel" @click="showPass = false">{{ $t("取消") }}</div>
        <div class="btn_confirm" @click="confirm">{{ $t("确认") }}</div>
      </div>
    </view>
  </u-popup>
</template>

<script>
import { hasPayPassword, setPayPassword } from "@/api/integral.js";
export default {
	props:{
	type:{
		default:true
	}	
	},
  data() {
    return {
      showPass: false,
      password: "",
      passwordAgain: "",
    };
  },
  onShow() {},
  mounted() {
    if(this.type){
		this.hasPayPasswordHandle();
	}
  },
  watch: {},
  methods: {
    confirm() {
      console.log("this.password", this.password);

      const rgx = /^[0-9]{6}$/;
      if (!rgx.test(this.password)) {
        uni.showToast({
          title: this.$t("密码格式错误"),
          duration: 2000,
          icon: "none",
        });
        this.password = "";
        return;
      }
      if (this.password !== this.passwordAgain) {
        return uni.showToast({
          title: this.$t("两次输入密码不一致"),
          duration: 2000,
          icon: "none",
        });
      }
      // this.$emit("confirm", this.password);
      this.confirmHandle();
    },
    // 询问是否有支付密码
    hasPayPasswordHandle() {
      hasPayPassword()
        .then(({ data: { data } }) => {
          console.log("询问是否有支付密码", data);
          this.showPass = !data.isSet;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 设置密码
    confirmHandle() {
      const params = {
        pwd: this.password,
      };
      // uni.showLoading({
      //   title: "",
      // });
      setPayPassword(params)
        .then(({ data: { data } }) => {
          // uni.hideLoading();
          this.showPass = false;
        })
        .catch((err) => {
          // uni.hideLoading();
          console.log(err);
        });
    },
  },
};
</script>

<style lang="less" scoped>
.password_popup {
  /deep/ .u-mode-center-box {
    width: calc(100% - 64rpx) !important;
    border-radius: 20rpx;
    .pass_box {
      padding: 32rpx;
      .pass_title {
        font-size: 36rpx;
        font-weight: 500;
        text-align: center;
        color: #000;
      }
      .pass_input {
        margin-top: 56rpx;
        .u-input {
          background: rgba(0, 0, 0, 0.05);
          border-radius: 20rpx;
          height: 92rpx;
          margin-bottom: 32rpx;
          .u-input__input {
            height: 100%;
            padding: 0 32rpx;
            color: #000;
          }
        }
        .input-placeholder {
          color: rgba(0, 0, 0, 0.5) !important;
        }
      }
      .pass_btn {
        margin-top: 76rpx;
        display: flex;
        gap: 20rpx;
        > div {
          flex: 1;
          height: 84rpx;
          border-radius: 10px;
          font-size: 28rpx;
          color: #07C160;
          display: flex;
          justify-content: center;
          align-items: center;
          &:first-child {
            border: 1px solid #07C160;
            color: #07C160;
          }
          &:last-child {
            background: #07C160;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>

import Vue from "vue";
import Vuex from "vuex";

import storage from "@/utils/storage";
import globalAreaCode from "@/utils/globalAreaCode.json";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isShowToast: false, // 是否在展示Toast中
    remark: [], //填写订单备注
    shareLink: "", //分享链接
    verificationKey: "", //获取key表示验证通过
    distributionId: "", //分销员Id 如果当前账户从未登录过时记录
    hasLogin: storage.getHasLogin(),
    userInfo: storage.getUserInfo(),
    uuid: storage.getUuid(),
    token: "",
    areaCode: globalAreaCode.filter((item) => item.name === "China")[0], // 区号
    lang: uni.getStorageSync("LANG") || "zh-CN",
    vipConfig: uni.getStorageSync("VIP_CONFIG") || [], // 会员等级配置
    daoConfig: uni.getStorageSync("DAO_CONFIG") || [], // DAO奖励配置
		cityInfo: {}, // 当前城市或选择城市信息
	exchangeRate:0 // 汇率
  },
  getters: {
    getLang(state) {
      return state.lang;
    },
		// 当前位置
		cityName: state => {
			return state.cityInfo.name || ''
		},
		// 经纬度拼接
		storeCenter: state => {
			return state.cityInfo.lat ? `${state.cityInfo.lat},${state.cityInfo.lng}` : ''
		},
  },
  mutations: {
    login(state, userInfo) {
      state.userInfo = userInfo || {};
      state.userName =
        userInfo.Name || userInfo.Nickname || userInfo.Username || "匿名用户";
      state.hasLogin = true;
    },
    logout(state) {
      state.userName = "";
      state.hasLogin = false;
    },

    // 设置填写订单中备注
    setRemark(state, remark) {
      state.remark = remark;
    },
	// 设置rate
	setRate(state, rate) {
	  state.exchangeRate = rate;
	  uni.setStorageSync("RATE", rate);
	},

    // 设置区号
    setAreaCode(state, code) {
      state.areaCode = code;
    },

    // 设置语言
    setLang(state, lang) {
      state.lang = lang;
      uni.setStorageSync("LANG", lang);
    },

    // 设置Vip配置
    setVipConfig(state, config) {
      state.vipConfig = config;
      uni.setStorageSync("VIP_CONFIG", config);
    },

    // 设置DAO奖励配置
    setDaoConfig(state, config) {
      state.daoConfig = config;
      uni.setStorageSync("DAO_CONFIG", config);
    },
		
		// 设置城市信息
		setCityInfo(state, data) {
		  state.cityInfo = data;
		},
  },
  actions: {},
});

export default store;

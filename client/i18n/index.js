import Vue from "vue";
import VueI18n from "vue-i18n";
import store from "@/store/index.js";

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: store.state.lang,
  messages: {
    "en-US": require("@/i18n/en.json"),
    "zh-CN": require("@/i18n/zh.json"),
    "vi-VN": require("@/i18n/vi.json"),
    "ko-KR": require("@/i18n/ko.json"),
  },
});

export default i18n;

/**
 * base    : 基础业务API
 * buyer   : 买家API
 */
// 开发环境
const dev = {
  // im: "https://im-api.neco.ltd",
  // common: "https://common-api.neco.ltd",
  // buyer: "https://buyer-api.neco.ltd",
  // integral: "https://go-api.neco.ltd",
  // wallet: "https://wallet-api.neco.ltd",
  // defaultWallet: "https://wallet-api.neco.ltd",
  // buyerApi : "https://buyer-api.neco.ltd",
  // webIm : "https://chat-api.novai.live/",
  // buyerApi : "https://buyer-api.neco.ltd",
  im: "https://im-api.novai.live",
  common: "https://common-api.novai.live",
  buyer: "https://buyer-api.novai.live",
  integral: "https://go-api.novai.live",
  wallet: "https://wallet-api.novai.live",
  defaultWallet: "https://wallet-api.novai.live",
  webIm : "https://chat-api.novai.live/",
  buyerApi : "https://buyer-api.novai.live", 
	
};
// 生产环境
const prod = {
  // im: "https://im-api.neco.ltd",
  // common: "https://common-api.neco.ltd",
  // buyer: "https://buyer-api.neco.ltd",
  // integral: "https://go-api.neco.ltd",
  // wallet: "https://wallet-api.neco.ltd",
  // defaultWallet: "https://wallet-api.neco.ltd",
  // buyerApi : "https://buyer-api.neco.ltd",
  // webIm : "https://chat-api.novai.live/",
  // buyerApi : "https://buyer-api.neco.ltd",
  im: "https://im-api.novai.live",
  common: "https://common-api.novai.live",
  buyer: "https://buyer-api.novai.live",
  integral: "https://go-api.novai.live",
  wallet: "https://wallet-api.novai.live",
  defaultWallet: "https://wallet-api.novai.live",
  webIm : "https://chat-api.novai.live/",
	buyerApi : "https://buyer-api.novai.live",
};

//默认生产环境
let api = dev;
//如果是开发环境
if (process.env.NODE_ENV == "development") {
  api = dev;
} else {
  api = prod;
}
//微信小程序，app的打包方式建议为生产环境，所以这块直接条件编译赋值
// #ifdef MP-WEIXIN || APP-PLUS
api = prod;
// #endif

api.buyer += "/buyer";
api.common += "/common";
api.im += "/im";
api.integral += "/api";
api.wallet += "/recharge";
export default {
  ...api,
};

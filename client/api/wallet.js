import { http, Method } from "@/utils/request.js";
import api from "@/config/api.js";

// 获取充值钱包地址
export function getRechargeAddress(params) {
  return http.request({
    url: api.wallet + "/getRechargeWalletAddress",
    method: Method.GET,
    needToken: true,
    params,
  });
}

// 获取所有链
export function getAllChains() {
  return http.request({
    url: api.wallet + "/getChain",
    method: Method.GET,
    needToken: true,
  });
}
export function getCoinsByChainId(params) {
  return http.request({
    url: api.wallet + "/getCoinsByChainId",
    method: Method.GET,
    needToken: true,
	params
  });
}

// 铸造销毁数量
export function mintingAndDestruction(params) {
  return http.request({
    url: api.defaultWallet +`/mintingAndDestruction`,
    method: Method.GET,
	needToken: true,
	params,
  });
}

// im登录
export function imLogin(params) {
  return http.request({
    url: api.webIm +`/login`,
    method: Method.POST,	
	params,
  });
}

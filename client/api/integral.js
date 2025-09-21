// 积分操作API

import { http, Method } from "@/utils/requestintegral.js";

// 获取用户积分信息
export function getUserIntegralInfo() {
  return http.request({
    url: "/account/integralInfo",
    method: Method.GET,
    needToken: true,
  });
}

// 获取vip配置
export function getVipConfig() {
  return http.request({
    url: "/vip/cfg",
    method: Method.GET,
    needToken: true,
  });
}

// 获取业绩信息
export function getPerformanceInfo() {
  return http.request({
    url: "/inside/teamInfo",
    method: Method.GET,
  });
}

// 查询是否绑定了上级
export function checkParent() {
  return http.request({
    url: "/account/isBind",
    method: Method.GET,
  });
}

// 绑定上级
export function bindParent() {
  return http.request({
    url: "/account/bind",
    method: Method.GET,
  });
}

// 获取默认邀请码
export function getDefaultInviteCode() {
  return http.request({
    url: "/invitation/default",
    method: Method.GET,
  });
}

// 提现
export function withdrawApi(params) {
  return http.request({
    url: "/account/withdraw",
    method: Method.POST,
    params,
  });
}

// 获取手续费
export function getFee() {
  return http.request({
    url: "/fee/cfg",
    method: Method.GET,
  });
}

// 判断是否有支付密码
export function hasPayPassword() {
  return http.request({
    url: "/account/isSetPwd",
    method: Method.GET,
  });
}

// 设置支付密码
export function setPayPassword(params) {
  return http.request({
    url: "/account/setPwd",
    method: Method.POST,
    params,
  });
}

// 积分转账
export function transferIntegral(params) {
  return http.request({
    url: "/account/transfer",
    method: Method.POST,
    params,
  });
}

// 转账记录
export function transferRecord(params) {
  return http.request({
    url: "/account/transfer/list",
    method: Method.GET,
    params,
  });
}

// 购买/赠送VIP
export function buyVip(params) {
  return http.request({
    url: "/vip/buy",
    method: Method.POST,
    params,
  });
}

// 获取dao配置
export function getDaoConfig() {
  return http.request({
    url: "/dao/cfg",
    method: Method.GET,
  });
}

// 获取积分信息
export function getIntegralInfo() {
  return http.request({
    url: "/account/psychological/summary",
    method: Method.GET,
  });
}

// 奖励统计
export function getAwardSummary(params) {
  return http.request({
    url: "/award/summary",
    method: Method.GET,
    params,
  });
}

// 获取图表信息
export function getChartInfo(params) {
  return http.request({
    url: "/price/info",
    method: Method.GET,
    params,
  });
}

// 获取会员记录
export function getMemberRecord(params) {
  return http.request({
    url: "/vip/log",
    method: Method.GET,
    params,
  });
}
/**
 * 积分明细
 * @param paramshttp:
 */
export function getUserPointInfo(params) {
  return http.request({
    url: `account/integralChangeList`,
    method: Method.GET,
    params,
  });
}

/**
 * 团队积分明细
 * @param paramshttp
 */
export function getTeamLog(params) {
  return http.request({
    url: `award/log`,
    method: Method.GET,
    params,
  });
}
// 重置支付密码
export function resetPwd(params) {
  return http.request({
    url: "/account/resetPwd",
    method: Method.POST,
    params,
  });
}
// 消费积分释放list 
export function psychologicalList(params) {
  return http.request({
    url: `account/psychological/list`,
    method: Method.GET,
    params,
  });
}
// 创世消费积分释放list http://47.76.212.85:18000/api/
export function genesisList(params) {
  return http.request({
    url: `account/genesis/psychological/list`,
    method: Method.GET,
    params,
  });
}

// 积分释放 http://47.76.212.85:18000/api/
export function getShopMsg(params) {
  return http.request({
    url: `psychological/info`,
    method: Method.GET,
    params,
  });
}
export function getShopMsglog(params) {
  return http.request({
    url: `psychological/log`,
    method: Method.GET,
    params,
  });
}
export function withdrawList(params) {
  return http.request({
    url: `/account/withdrawList`,
    method: Method.GET,
    params,
  });
}
export function rechargeList(params) {
  return http.request({
    url: `/account/rechargeList`,
    method: Method.GET,
    params,
  });
}
export function transferList(params) {
  return http.request({
    url: `/account/transfer/list`,
    method: Method.GET,
    params,
  });
}
// 提现最小金额和手续费配置
export function withdrawalCfg(params) {
  return http.request({
    url: `/withdrawal/cfg`,
    method: Method.GET,
    params,
  });
}
// 转账最低值
export function transferCfg(params) {
  return http.request({
    url: `/transfer/cfg`,
    method: Method.GET,
    params,
  });
}
export function updatePwd(params) {
  return http.request({
    url: `/account/updatePwd`,
    method: Method.POST,
    params,
  });
}
export function other2neco(params) {
  return http.request({
    url: `/other2neco/cfg`,
    method: Method.GET,
    params,
  });
}
export function getSummary(params) {
  return http.request({
    url: `/consume/summary`,
    method: Method.GET,
    params,
  });
}
export function consumeLog(params) {
  return http.request({
    url: `/consume/log`,
    method: Method.GET,
    params,
  });
}
export function googleKey(params) {
  return http.request({
    url: `/google/map/key/cfg`,
    method: Method.GET,
    params,
  });
}
// 获取汇率 
export function rate(params) {
  return http.request({
    url: `/price/exchange_rate`,
    method: Method.GET,
    params,
  });
}
// 消费返利配置
export function rebate(params) {
  return http.request({
    url: `/consume/rebate/cfg`,
    method: Method.GET,
    params,
  });
}
// 充值最低额度
export function rechargeMin(params) {
  return http.request({
    url: `/recharge/usd/min/limit/cfg`,
    method: Method.GET,
    params,
  });
}
// 充值最低额度
export function usaiPrice(params) {
  return http.request({
    url: `/price/info`,
    method: Method.GET,
    params,
  });
}
import { http } from "@/utils/request.js";

// 新增消费体验订单
export function addExperience(data) {
  return http.request({
    url: `/xffl/save`,
    method: "POST",
    data,
  });
}

// 获取消费体验订单列表
export function getExperienceList(params) {
  return http.request({
    url: `/xffl/page`,
    method: "GET",
    params,
  });
}

import axios from "axios";
import config from "./config";
import { IResponse } from "./types";

interface IAxiosParams {
  /** 网关函数方法名称 */
  functionId: string;
  /** 网关系统ID */
  appid: string;
  /** URL 参数 */
  // eslint-disable-next-line @typescript-eslint/ban-types
  urlParam?: {};
  /** 接入网关参数对象 */
  // eslint-disable-next-line @typescript-eslint/ban-types
  body?: {};
  /** baseURLL 与 urlParam 互斥，**整个**地址 */
  baseURL?: string;
  /** 请求方法，默认 get */
  method?: "GET" | "get" | "POST" | "post";
  /** 该接口是否需要登录 **/
  needLogin?: boolean;
}

/**
 * 统一网关请求方法
 *
 * @param customConfig
 */
export async function request<T>(customConfig: IAxiosParams) {
  const bodyParam = customConfig.body
    ? `&body=${encodeURI(JSON.stringify(customConfig.body))}`
    : "";

  const urlParam = `${dealUrlParam(customConfig.urlParam)}`;

  const beforeMergeConfig = {
    ...customConfig,
    url: customConfig.baseURL
      ? ""
      : `${config.url}?functionId=${customConfig.functionId}&appid=${customConfig.appid}${bodyParam}${urlParam}`,
  };
  const mergeConfig: any = { ...config, ...beforeMergeConfig };
  const res = await axios.request<IResponse<T>>(mergeConfig);
  if (res.status === 200) {
    // 网络请求成功
    if (res.data.statusCode === 200 || res.data.code === 0) {
      // 数据请求成功 接口数据可能在data 或者 datas 中
      return Promise.resolve(res.data);
    } else if (res.data.statusCode === 60003) {
      // 数据为空
      return Promise.resolve(res.data);
    } else {
      // todo: 请求数据错误具体处理
      return Promise.reject(res.data.message);
    }
  } else {
    // todo: 网络错误具体处理
    return Promise.reject("网络错误");
  }
}

function dealUrlParam(urlParam?: any): string {
  let result = "";
  if (!urlParam) {
    return result;
  } else {
    Object.keys(urlParam).map((key) => {
      result += `&${key}=${urlParam[key]}`;
    });
  }
  return result;
}

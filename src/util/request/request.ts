import { REQUEST_BASE_URL } from 'react-native-dotenv';
import axios, { AxiosRequestConfig } from 'axios';

export type Method = 'GET' | 'DELETE' | 'HEAD' | 'OPTIONS' | 'POST' | 'PUT' | 'PATCH' | 'LINK' | 'UNLINK';

// axios.interceptors.request.use((config) => {
//   console.log('=============');
//   console.log('interceptor config => ', JSON.stringify(config, undefined, 2));
//   return config;
// }, (error: any) => {
//   console.log('interceptor error =>', error);
//   return Promise.reject(error);
// });

export async function request (config: AxiosRequestConfig): Promise<any> {
  return axios({
    url: config.url,
    method: config.method ?? 'POST',
    baseURL: config.baseURL ?? REQUEST_BASE_URL,
    transformRequest: config.transformRequest,
    transformResponse: config.transformResponse,
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    headers: config.headers || { 'Content-Type': 'application/json' },
    params: config.params,
    paramsSerializer: config.paramsSerializer,
    data: config.data,
    timeout: config.timeout,
    timeoutErrorMessage: config.timeoutErrorMessage,
    withCredentials: config.withCredentials,
    adapter: config.adapter,
    auth: config.auth,
    responseType: config.responseType ?? 'json',
    xsrfCookieName: config.xsrfCookieName,
    xsrfHeaderName: config.xsrfHeaderName,
    onUploadProgress: config.onUploadProgress,
    onDownloadProgress: config.onDownloadProgress,
    maxContentLength: config.maxContentLength,
    validateStatus: config.validateStatus,
    maxRedirects: config.maxRedirects,
    socketPath: config.socketPath,
    httpAgent: config.httpAgent,
    httpsAgent: config.httpsAgent,
    proxy: config.proxy,
    cancelToken: config.cancelToken,
  });
}

import { REQUEST_BASE_URL, REQUEST_APP_MOCK } from 'react-native-dotenv';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { showMessage } from 'react-native-flash-message';

export type Method = 'GET' | 'DELETE' | 'HEAD' | 'OPTIONS' | 'POST' | 'PUT' | 'PATCH' | 'LINK' | 'UNLINK';

export interface RequestMessages {
  ERROR?: string[],
  INFO?: string[],
  SUCCESS?: string[],
  WARNING?: string[],
}

export const handleResponseMessages = (messages: RequestMessages): void => {
  const { ERROR, INFO, SUCCESS, WARNING } = messages;

  if (ERROR) {
    ERROR.forEach((m: string) => {
      showMessage({
        message: m,
        type: 'danger',
        icon: 'danger',
      });
    });
  }

  if (WARNING) {
    WARNING.forEach((m: string) => {
      showMessage({
        message: m,
        type: 'warning',
        icon: 'warning',
      });
    });
  }

  if (INFO) {
    INFO.forEach((m: string) => {
      showMessage({
        message: m,
        type: 'info',
        icon: 'info',
      });
    });
  }

  if (SUCCESS) {
    SUCCESS.forEach((m: string) => {
      showMessage({
        message: m,
        type: 'success',
        icon: 'success',
      });
    });
  }
};

axios.interceptors.response.use(async (response: AxiosResponse) => {
  if (response.data.MESSAGES) {
    handleResponseMessages(response.data.MESSAGES);
  }

  if (REQUEST_APP_MOCK && response.data.RESULT === 'error') {
    return Promise.reject(new Error(JSON.stringify(response.data.MESSAGES)));
  }

  return response;
}, async (error: Error) => Promise.reject(error));

export async function request (config: AxiosRequestConfig): Promise<any> {
  return axios({
    url: config.url,
    method: config.method ?? 'POST',
    baseURL: config.baseURL ?? REQUEST_BASE_URL,
    transformRequest: config.transformRequest,
    transformResponse: config.transformResponse,
    headers: config.headers ?? { 'Content-Type': 'application/json' },
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

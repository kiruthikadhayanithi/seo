/* eslint-disable no-debugger, no-console */
import AxiosInstance from './Interceptor';

const apiUrl: any = process.env.REACT_APP_API_URL;

export const siteUrl: any = process.env.REACT_APP_API_SITE;

export const imageUrl: any = process.env.REACT_APP_ASSETS_IMAGE_URL;

export const videoUrl: any = process.env.REACT_APP_ASSESTS_VIDEO_URL;

export const websocket_url: any = process.env.REACT_APP_WEBSOCKET_URL_PORT;

const Env = {
  async get(path: string, header: any) {
    const api = await AxiosInstance.get(`${apiUrl}${path}`, {
      headers: {
        Authorization: `Bearer ${header}`,
      },
    });
    return api;
  },

  async post(path: string, payload: any, header: any) {
    const api = await AxiosInstance.post(`${apiUrl}${path}`, payload, {
      headers: {
        Authorization: `Bearer ${header}`,
      },
    });
    return api;
  },

  async put(path: string, payload: any, header: any) {
    const api = await AxiosInstance.put(`${apiUrl}${path}`, payload, {
      headers: {
        Authorization: `Bearer ${header}`,
      },
    });
    return api;
  },

  async delete(path: string, header: any) {
    const api = await AxiosInstance.delete(`${apiUrl}${path}`, {
      headers: {
        Authorization: `Bearer ${header}`,
      },
    });
    return api;
  },
};

export default Env;

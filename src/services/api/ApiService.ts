import axios, { AxiosResponse, AxiosHeaders } from "axios";

export class ApiService {
  private access_token: string;

  constructor(accessToken: string) {
    this.access_token = accessToken;
  }

  private get headers(): AxiosHeaders {
    return new AxiosHeaders({
      'Authorization': `Bearer ${this.access_token}`
    })
  }

  async get<T>(url: string): Promise<AxiosResponse<T>> {
    return axios.get<T>(url, {
      headers: this.headers,
    });
  }
}
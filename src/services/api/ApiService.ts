import axios, { AxiosResponse, AxiosHeaders } from "axios";

export class ApiService {
  private access_token: string;
  private user_code: string | undefined = undefined;

  constructor(accessToken: string) {
    this.access_token = accessToken;
  }

  set userCode(code: string) {
    this.user_code = code;
  }

  private get headers(): AxiosHeaders {
    return new AxiosHeaders({
      'Authorization': `Bearer ${this.user_code ?? this.access_token}`
    })
  }

  async get<T>(url: string): Promise<AxiosResponse<T>> {
    return axios.get<T>(url, {
      headers: this.headers,
    });
  }
}
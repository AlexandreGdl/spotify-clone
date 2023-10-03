import axios, { AxiosResponse, AxiosHeaders } from "axios";
import { observable, makeObservable, computed, action } from "mobx";

export class ApiService {
  @observable
  private access_token: string |undefined = undefined;

  constructor() {
    makeObservable(this)
  }

  @computed
  get accessToken(): string | undefined {
    return this.access_token;
  }

  @action
  updateAccessToken(token: string | undefined) {
    this.access_token = token;
  }

  @computed
  private get headers(): AxiosHeaders {
    return new AxiosHeaders({
      'Authorization': `Bearer ${this.access_token}`
    })
  }

  async get<T>(url: string, abortController?: AbortController): Promise<AxiosResponse<T>> {
    return axios.get<T>(url, {
      headers: this.headers,
      signal: abortController?.signal
    });
  }
}
export interface User {
  id: number;
  email: string;
  username: string;
  cash: number;
}

export interface LoginResponse {
  fallback: boolean,
  type: string,
  value: string
}

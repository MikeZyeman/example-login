
export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginUser {
  username: string;
  email: string;
  token: string;

}

export interface UserDTO {
  id: number;

  name: string;
  lastname: string;

  email: string;
  username: string;
  password: string;
}

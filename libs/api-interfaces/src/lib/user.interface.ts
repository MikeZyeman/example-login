
export interface LoginUser {
  userid?: string;
  username?: string;
  email?: string;
  password: string;
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

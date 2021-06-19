export interface SignUpRequest {
  userId: string;
  username: string;
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  roles: Array<string>;
}

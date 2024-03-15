export interface Register
{
  name: string;
  email: string;
  phone: string;
  body: string;
  email_type: string
}

export interface RegisterResponse {
  message: string;
  success: boolean
}
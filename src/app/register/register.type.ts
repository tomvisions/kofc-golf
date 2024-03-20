export interface Register
{
  team_name: string
  player?: {
    player: string;
    email: string;
    phone: string;
  }[];
  body: string;
  email_type: string
}

export interface RegisterResponse {
  message: string;
  success: boolean
}

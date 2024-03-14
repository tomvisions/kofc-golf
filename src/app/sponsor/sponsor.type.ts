export interface sponsorLevel {
    diamond: description
}

export interface description {
    amount: string
    content: string
}

export interface Sponsor
{
  returningSponsor: string;
  contact: string
  email: string;
  phone: string;
  level: string;
  specialRequests: string
}
export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  profileImage?: string;
  createdAt?: string;
  enabled?: boolean;
  [key: string]: unknown; // Allow for extra backend fields
}

export interface AuthResponse {
  accessToken?: string;
  user?: User;
  [key: string]: unknown;
}

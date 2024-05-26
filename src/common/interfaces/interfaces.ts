export interface Role {
  id: number;
  value: string;
  description: string;
}

export interface User {
  email: string;
  id: number;
  roles: Role[];
}

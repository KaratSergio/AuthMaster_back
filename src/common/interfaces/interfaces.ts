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

export interface PostCreationAttrs {
  title: string;
  content: string;
  userId: number;
  image: string;
}

export interface RoleCreationAttrs {
  value: string;
  description: string;
}

export interface UserCreationAttrs {
  email: string;
  password: string;
}

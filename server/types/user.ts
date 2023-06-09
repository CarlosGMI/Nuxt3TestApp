export interface User {
  id: string
  email: string
  password: string
}

export type ClientUser = Omit<User, 'password'>

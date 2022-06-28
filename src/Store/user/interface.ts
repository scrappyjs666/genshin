export interface IUser {
  email: string | null
  id: string | null
  status: 'loading' | 'success' | 'error'
  textError: string | undefined
}

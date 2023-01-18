import { Timestamp } from 'firebase/firestore'

export interface EmailType {
  id: string
  data: {
    to: string
    theme: string
    message: string
    timestamp: Timestamp
  }
}
export interface UserType{
  name : string
  email : string
  photoUrl : string
}
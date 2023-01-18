import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserType } from '../types'

const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    user: null as UserType | null,
  },
  reducers: {
    login: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload
    },
    logout: (state) => {
      state.user = null
    },
  },
})

export default userSlice.reducer
export const { login, logout } = userSlice.actions

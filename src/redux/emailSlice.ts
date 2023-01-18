import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { EmailType } from '../types'

interface selecteMailType {
  id: string
  data: Omit<EmailType['data'], 'timestamp'>
}
const emailSlice = createSlice({
  name: 'emailSlice',
  initialState: {
    selectedEmail: null as selecteMailType | null,
  },
  reducers: {
    emailSelected: (state, action: PayloadAction<selecteMailType>) => {
      state.selectedEmail = action.payload
    },
  },
})

export default emailSlice.reducer
export const { emailSelected } = emailSlice.actions

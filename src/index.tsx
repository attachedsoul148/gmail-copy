import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { BrowserRouter } from 'react-router-dom'
import emailSlice from './redux/emailSlice'
import userSlice from './redux/userSlice'

const store = configureStore({
  reducer: { emailSlice, userSlice },
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
)

const state = store.getState()
export const useOwnSelector: TypedUseSelectorHook<typeof state> = useSelector
export const useOwnDispatch: () => typeof store.dispatch = useDispatch

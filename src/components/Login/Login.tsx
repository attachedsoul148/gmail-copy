import { Button } from '@mui/material'
import React from 'react'
import styles from './Login.module.css'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../../firebase'
import { useOwnDispatch } from '../..'
import { login } from '../../redux/userSlice'

const Login = () => {
  const dispatch = useOwnDispatch()
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user
        dispatch(
          login({
            name: user.displayName as string,
            email: user.email as string,
            photoUrl: user.photoURL as string,
          }),
        )
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <div className={styles.login}>
      <div className={styles.login__img}>
        <img
          src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg"
          alt="logo"
        />
      </div>
      <Button variant="contained" color="primary" sx={{ width: '20%' }} onClick={signIn}>
        Login
      </Button>
    </div>
  )
}

export default Login

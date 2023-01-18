import React, { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import { Routes, Route, Navigate } from 'react-router-dom'
import EmailList from './components/EmailList/EmailList'
import Email from './components/EmailList/Email'
import SendModal from './components/SendModal/SendModal'
import { useOwnDispatch, useOwnSelector } from '.'
import { onAuthStateChanged } from 'firebase/auth'
import Login from './components/Login/Login'
import { auth } from './firebase'
import { login, logout } from './redux/userSlice'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const user = useOwnSelector((state) => state.userSlice.user)
  const dispatch = useOwnDispatch()

  const onModalClose = () => {
    setIsModalOpen(false)
  }
  const onModalOpen = () => {
    setIsModalOpen(true)
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          login({
            name: user.displayName as string,
            email: user.email as string,
            photoUrl: user.photoURL as string,
          }),
        )
      } else {
        dispatch(logout())
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  if (!user) {
    return <Login />
  }
  return (
    <div className="app">
      <Header />

      <div className="app__body">
        <Sidebar openModal={onModalOpen} />
        <Routes>
          <Route path="/:box" element={<EmailList />} />
          <Route path="/:box/mail/:id" element={<Email />} />
          <Route path="/" element={<Navigate to={'/inbox'} />} />
        </Routes>
        {isModalOpen && <SendModal onClose={onModalClose} />}
      </div>
    </div>
  )
}

export default App

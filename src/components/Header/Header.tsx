import React from 'react'
import styles from './Header.module.css'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import TuneIcon from '@mui/icons-material/Tune'
import HelpIcon from '@mui/icons-material/Help'
import SettingsIcon from '@mui/icons-material/Settings'
import { Avatar, IconButton, Link } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { useOwnSelector } from '../..'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'

interface HeaderProps {}
const Header: React.FC<HeaderProps> = () => {
  const user = useOwnSelector((state) => state.userSlice.user)

  const onLogout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Link component={NavLink} to="/inbox">
          <img
            src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"
            alt="logo"
          />
        </Link>
      </div>

      <div className={styles.middle}>
        <div className={styles.middle__input}>
          <SearchIcon />
          <input type="text" placeholder="Search in box" />
          <IconButton>
            <TuneIcon />
          </IconButton>
        </div>
      </div>

      <div className={styles.right}>
        <IconButton>
          <HelpIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <TuneIcon />
        </IconButton>
        <Avatar src={user?.photoUrl} onClick={onLogout} sx={{ cursor: 'pointer' }} />
      </div>
    </div>
  )
}

export default Header

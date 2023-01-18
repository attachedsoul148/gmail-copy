import { Typography } from '@mui/material'
import React from 'react'
import styles from './Sidebar.module.css'
import { useLocation } from 'react-router-dom'

interface SidebarOptionProps {
  Icon: React.FC
  text: string
  number: number
}
const SidebarOption: React.FC<SidebarOptionProps> = ({ Icon, text, number }) => {
  const location = useLocation()
  const isSelected = location.pathname.includes(text.toLowerCase())
  return (
    <div className={`${isSelected ? styles.sidebarOption__active : styles.sidebarOption}`}>
      <div className={styles.sidebarOption__right}>
        <Icon />
        <Typography variant="subtitle2" sx={{ fontWeight: 600, fontSize: '12px' }}>
          {text}
        </Typography>
      </div>
      {isSelected && (
        <Typography
          variant="body1"
          sx={{ fontWeight: 700, fontSize: '14px' }}
          className={styles.number}>
          {number}
        </Typography>
      )}
    </div>
  )
}

export default SidebarOption

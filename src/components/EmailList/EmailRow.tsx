import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'
import React from 'react'
import styles from './EmailList.module.css'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import Typography from '@mui/material/Typography'
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'
import { useLocation, useNavigate } from 'react-router-dom'
import { useOwnDispatch } from '../..'
import { emailSelected } from '../../redux/emailSlice'

interface EmailRowProps {
  id: string
  sender: string
  title: string
  date: string
  message: string
}
const EmailRow: React.FC<EmailRowProps> = ({ id, sender, title, date, message }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useOwnDispatch()

  const onEmailClick = () => {
    dispatch(
      emailSelected({
        id,
        data: {
          to: sender,
          theme: title,
          message,
        },
      }),
    )
    navigate(`${location.pathname}/mail/${id}`)
  }
  return (
    <div className={styles.emailRow} onClick={onEmailClick}>
      <div className={styles.emailRow__left}>
        <Checkbox sx={{ color: 'lightgray' }} />
        <IconButton sx={{ color: 'lightgray' }}>
          <StarBorderIcon />
        </IconButton>
        <Typography sx={{ marginLeft: '10px' }} fontSize={14}>
          {sender}
        </Typography>
      </div>
      <div className={styles.emailRow__right}>
        <div className={styles.emailRow__right__text}>
          <Typography fontSize={14} component="h4">
            {title}
          </Typography>
          <p>&nbsp;-&nbsp;{message}</p>
        </div>
      </div>
      <div className={styles.date}>
        <p>{date}</p>
      </div>
      <div className={styles.emailRow__hoverMenu}>
        <IconButton sx={{ color: 'lightgray' }}>
          <ArchiveOutlinedIcon />
        </IconButton>
        <IconButton sx={{ color: 'lightgray' }}>
          <DeleteOutlinedIcon />
        </IconButton>
        <IconButton sx={{ color: 'lightgray' }}>
          <EmailOutlinedIcon />
        </IconButton>
        <IconButton sx={{ color: 'lightgray' }}>
          <AccessTimeOutlinedIcon />
        </IconButton>
      </div>
    </div>
  )
}

export default EmailRow

import { Avatar, Button, Divider, IconButton } from '@mui/material'
import React from 'react'
import styles from './EmailList.module.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArchiveIcon from '@mui/icons-material/Archive'
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined'
import DriveFileMoveOutlinedIcon from '@mui/icons-material/DriveFileMoveOutlined'
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import LanguageIcon from '@mui/icons-material/Language'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import FilterListIcon from '@mui/icons-material/FilterList'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'
import ShortcutOutlinedIcon from '@mui/icons-material/ShortcutOutlined'
import ReplyIcon from '@mui/icons-material/Reply'
import { useOwnSelector } from '../..'

interface EmailProps {}
const Email: React.FC<EmailProps> = () => {
  const selectedMail = useOwnSelector((state) => state.emailSlice.selectedEmail)

  return (
    <div className={styles.email}>
      <div className={styles.email__header}>
        <div className={styles.email__header__left}>
          <IconButton>
            <ArrowBackIcon />
          </IconButton>
          <IconButton>
            <ArchiveIcon />
          </IconButton>
          <IconButton>
            <ReportGmailerrorredIcon />
          </IconButton>
          <IconButton>
            <DeleteOutlineIcon />
          </IconButton>
          <Divider orientation="vertical" variant="middle" sx={{ display: 'inline' }} flexItem />
          <IconButton>
            <EmailOutlinedIcon />
          </IconButton>
          <IconButton>
            <AccessTimeOutlinedIcon />
          </IconButton>
          <IconButton>
            <AddTaskOutlinedIcon />
          </IconButton>
          <Divider
            orientation="vertical"
            variant="middle"
            sx={{ display: 'inline' }}
            textAlign="center"
            flexItem
          />
          <IconButton>
            <DriveFileMoveOutlinedIcon />
          </IconButton>
          <IconButton>
            <LabelOutlinedIcon />
          </IconButton>
          <IconButton>
            <MoreVertOutlinedIcon />
          </IconButton>
        </div>

        <div className={styles.email__header__right}>
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <LanguageIcon />
          </IconButton>
          <IconButton>
            <KeyboardArrowDownIcon />
          </IconButton>
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </div>
      </div>

      <div className={styles.email__data}>
        <h4>{selectedMail?.data.theme}</h4>
        <div className={styles.email__data__header}>
          <div className={styles.email__data__header__left}>
            <Avatar />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <h5>Google Maps Timeline</h5>
                <span>{`<${selectedMail?.data.to}>`}</span>
              </div>
              <p>For : me</p>
            </div>
          </div>
          <div className={styles.email__data__header__right}>
            <IconButton>
              <StarBorderOutlinedIcon />
            </IconButton>
            <IconButton>
              <ShortcutOutlinedIcon />
            </IconButton>
            <IconButton>
              <MoreVertOutlinedIcon />
            </IconButton>
          </div>
        </div>
      </div>
      <div className={styles.email__message}>
        <p>{selectedMail?.data.message}</p>
      </div>
      <div className={styles.email__buttons}>
        <Button startIcon={<ReplyIcon />} className={styles.email__button}>
          Answer
        </Button>
        <Button startIcon={<ShortcutOutlinedIcon />} className={styles.email__button}>
          Forward
        </Button>
      </div>
    </div>
  )
}

export default Email

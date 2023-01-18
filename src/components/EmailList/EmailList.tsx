import { Checkbox, IconButton } from '@mui/material'
import React, { useState, useEffect } from 'react'
import styles from './EmailList.module.css'
import UpdateIcon from '@mui/icons-material/Update'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import LanguageIcon from '@mui/icons-material/Language'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import FilterListIcon from '@mui/icons-material/FilterList'
import InboxIcon from '@mui/icons-material/Inbox'
import SellOutlinedIcon from '@mui/icons-material/SellOutlined'
import PeopleIcon from '@mui/icons-material/People'
import InboxSection from './InboxSection'
import { useLocation } from 'react-router-dom'
import EmailRow from './EmailRow'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../../firebase'
import { EmailType } from '../../types'

interface EmailListProps {}
const EmailList: React.FC<EmailListProps> = () => {
  const [selectedSection, setSelectedSection] = useState('Primary')
  const [emails, setEmails] = useState<EmailType[]>([])
  const inboxSections = [
    { title: 'Primary', Icon: InboxIcon },
    { title: 'Promotions', Icon: SellOutlinedIcon },
    { title: 'Social', Icon: PeopleIcon },
  ]

  useEffect(() => {
    const unsub = onSnapshot(
      query(collection(db, 'emails'), orderBy('timestamp', 'desc')),
      (snapshot) => {
        const emailsList = snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
        setEmails(emailsList as EmailType[])
      },
    )

    return () => {
      unsub()
    }
  }, [])

  const location = useLocation()
  return (
    <div className={styles.emailList}>
      <div className={styles.top}>
        <div className={styles.top__right}>
          <Checkbox />
          <IconButton>
            <UpdateIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className={styles.top__left}>
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

      {location.pathname.includes('inbox') && (
        <div className={styles.menu}>
          {inboxSections.map((option) => (
            <InboxSection
              title={option.title}
              Icon={option.Icon}
              key={option.title}
              selected={selectedSection === option.title}
              setSelectedSection={setSelectedSection}
            />
          ))}
        </div>
      )}

      <div className={styles.emails}>
        {emails.map((email) => (
          <EmailRow
            key={email.id}
            date={new Date(email.data.timestamp.seconds * 1000).toUTCString()}
            id={email.id}
            sender={email.data.to}
            title={email.data.theme}
            message={email.data.message}
          />
        ))}
      </div>
      <div className={styles.emailList__footer}>Copyright 2023 @attachedsoul148</div>
    </div>
  )
}

export default EmailList

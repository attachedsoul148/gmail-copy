import React from 'react'
import styles from './EmailList.module.css'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box/Box'

interface InboxSectionProps {
  title: string
  Icon: React.FC
  selected: boolean
  setSelectedSection: (sectionTitle: string) => void
}
const InboxSection: React.FC<InboxSectionProps> = ({
  title,
  Icon,
  selected,
  setSelectedSection,
}) => {
  return (
    <Box
      sx={{ color: `${selected ? 'rgba(11,87,208,255)' : '#444746'}` }}
      className={`${selected ? styles.inboxSection__selected : styles.inboxSection}`}
      onClick={() => setSelectedSection(title)}>
      <div
        className={`${
          selected ? styles.inboxSection__innerBox__selected : styles.inboxSection__innerBox
        }`}>
        <Icon />
        <Typography
          sx={{
            color: `${selected ? 'rgba(11,87,208,255)' : '#444746'}`,
            fontSize: '14px',
            fontWeight: 600,
          }}>
          {title}
        </Typography>
      </div>
    </Box>
  )
}

export default InboxSection

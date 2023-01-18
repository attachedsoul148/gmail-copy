import React from 'react'
import styles from './Sidebar.module.css'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined'
import SidebarOption from './SidebarOption'
import InboxIcon from '@mui/icons-material/Inbox'
import DescriptionIcon from '@mui/icons-material/Description'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import Link from '@mui/material/Link/Link'
import { NavLink } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add'
import { IconButton } from '@mui/material'

interface SidebarProps {
  openModal: () => void
}
const Sidebar: React.FC<SidebarProps> = ({ openModal }) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.top}>
        <Button
          onClick={openModal}
          startIcon={<CreateOutlinedIcon />}
          sx={{
            background: '#d3e3fd',
            padding: '18px 25px',
            color: '#344e66',
            borderRadius: '15px',
            textTransform: 'none',
            transition: 'box-shadow .08s linear,min-width .15s cubic-bezier(0.4,0,0.2,1);',
            ':hover': {
              background: '#d3e3fd',
              boxShadow: '0 3px 8px 0 rgba(0,0,0,0.2), 0 3px 5px 0 rgba(0,0,0,0.19)',
            },
          }}>
          <Typography variant="subtitle2" sx={{ color: '#344e66', fontWeight: '600' }}>
            Compose
          </Typography>
        </Button>
      </div>

      <div className={styles.middle}>
        <Link component={NavLink} to="/inbox" sx={{ textDecoration: 'none' }}>
          <SidebarOption Icon={InboxIcon} text={'Inbox'} number={1777} />
        </Link>
        <Link component={NavLink} to="/starred" sx={{ textDecoration: 'none' }}>
          <SidebarOption Icon={StarBorderIcon} text={'Starred'} number={1777} />
        </Link>
        <Link component={NavLink} to="/snoozed" sx={{ textDecoration: 'none' }}>
          <SidebarOption Icon={AccessTimeIcon} text={'Snoozed'} number={1777} />
        </Link>
        <Link component={NavLink} to="/sent" sx={{ textDecoration: 'none' }}>
          <SidebarOption Icon={ForwardToInboxIcon} text={'Sent'} number={1777} />
        </Link>
        <Link component={NavLink} to="/drafts" sx={{ textDecoration: 'none' }}>
          <SidebarOption Icon={DescriptionIcon} text={'Drafts'} number={1777} />
        </Link>
        <SidebarOption Icon={KeyboardArrowDownIcon} text={'More'} number={1777} />
      </div>

      <div className={styles.bottom}>
        <Typography variant="h6" sx={{ color: '#444746' }}>
          Lables
        </Typography>
        <IconButton>
          <AddIcon />
        </IconButton>
      </div>
    </div>
  )
}

export default Sidebar

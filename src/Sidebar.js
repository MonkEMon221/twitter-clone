import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import './Sidebar.css'
import SidebarOptions from './SidebarOptions';
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material'

function Sidebar() {
  return (
    <div className='sidebar'>
        <TwitterIcon className='twitter_icon'/>
        <SidebarOptions active Icon= {HomeIcon} text="Home"/>
        <SidebarOptions Icon= {TagIcon} text="Explore"/>
        <SidebarOptions Icon= {NotificationsNoneIcon} text="Notifications"/>
        <SidebarOptions Icon= {MailOutlineIcon} text="Messages"/>
        <SidebarOptions Icon= {BookmarkBorderIcon} text="Bookmarks"/>
        <SidebarOptions Icon= {ListAltIcon} text="Lists"/>
        <SidebarOptions Icon= {PermIdentityIcon} text="Profile"/>
        <SidebarOptions Icon= {MoreHorizIcon} text="More"/>
        <Button variant='outlined' className="sidebar_button" fullWidth>Tweet</Button>
    </div>
  )
}

export default Sidebar
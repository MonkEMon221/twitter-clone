import { Avatar } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified';
import React from 'react'
import './Post.css'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

function Post(
    {displayName,
    userName,
    verified,
    text,
    image,
    avatar}
) {
  return (
    <div className='post'>
        <div className='post__avatar'>
            <Avatar src={avatar}/>
        </div>
        <div className='post__body'>
            <div className='post__header'>
                <div className='post__headertext'>
                    <h3>
                        {displayName} {" "}
                        <span>
                            {verified && <VerifiedIcon className = 'post__badge'/>}
                        </span>
                        <span className='post__headertextusername'>@{userName}</span>
                    </h3>
                </div>
                <div className='post__description'>
                    <p>{text}</p>
                </div>
            </div>
            <img src={image} alt='img'/>
            <div className='post__footer'>
                <ChatBubbleOutlineIcon className='icon' fontSize='small'/>
                <RepeatIcon className='icon' fontSize='small'/>
                <FavoriteBorderIcon className='icon' fontSize='small'/>
                <PublishIcon className='icon' fontSize='small'/>
            </div>
        </div>
    </div>
  )
}

export default Post
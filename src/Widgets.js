import React from 'react'
import './Widgets.css'
import SearchIcon from '@mui/icons-material/Search';
import {TwitterTweetEmbed, TwitterTimelineEmbed} from 'react-twitter-embed'

function Widgets() {
  return (
    <div className='widgets'>   
        <div className='widgets__input'>
            <SearchIcon className='widgets__searchicon'/>
            <input placeholder='Search Twitter' type="text"></input>
        </div>

        <div className='widgets__container'>
            <h2>What's Happening</h2>
            <TwitterTweetEmbed tweetId ={'858551177860055040'}/>
            <TwitterTimelineEmbed
                sourceType='profile'
                screenName='funnyordie'
                options={{height: 400}}
            />
        </div>
    </div>
  )
}

export default Widgets
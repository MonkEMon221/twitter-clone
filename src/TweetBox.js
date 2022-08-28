import React, { useState } from 'react'
import './TweetBox.css'
import {Avatar, Button} from '@mui/material'
import db from './firebase'
import { collection, addDoc } from "firebase/firestore";

function TweetBox() {

  const [tweetMessage, setTweetMessage] = useState("")
  const [tweetImage, setTweetImage] = useState("")

  const sendTweet = async(e) =>{
    e.preventDefault();
    await addDoc(collection(db, "posts"),{
      displayName: "Vishesh Singh",
      userName: "vishesh221",
      avatar: "https://i.picsum.photos/id/1012/3973/2639.jpg?hmac=s2eybz51lnKy2ZHkE2wsgc6S81fVD1W2NKYOSh8bzDc",
      verified: true,
      text: tweetMessage,
      image: tweetImage
    })

    setTweetMessage("");
    setTweetImage("");
  }

  return (
    <div className='tweetBox'>
        <form>  
            <div className='tweetbox__input'>
                <Avatar src="https://i.picsum.photos/id/1012/3973/2639.jpg?hmac=s2eybz51lnKy2ZHkE2wsgc6S81fVD1W2NKYOSh8bzDc"/>
                <input 
                onChange = {e => {setTweetMessage(e.target.value)}} 
                value = {tweetMessage} 
                placeholder="What's Happening?" 
                type= 'text' 
                maxLength={280}/>
            </div>
                 <input
                  onChange = {e => {setTweetImage(e.target.value)}}
                  value = {tweetImage} 
                  className='tweetbox__image' 
                  placeholder="Enter Image URL" 
                  type= 'text'/>
            <Button 
              onClick = {sendTweet} 
              type='submit' 
              className ='tweetbox__tweetbutton'>
                Tweet
            </Button>
        </form>
    </div>
  )
}

export default TweetBox
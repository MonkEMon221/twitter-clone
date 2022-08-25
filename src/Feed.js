import React, { useState, useEffect } from 'react'
import './Feed.css'
import Post from './Post'
import TweetBox from './TweetBox'
import db from './firebase'
import { onSnapshot, collection } from 'firebase/firestore'

function Feed() {

  const [posts, setPosts] = useState([]);

  useEffect(() =>{
     onSnapshot(collection(db, "posts"), (snapshot) => {
          setPosts(snapshot.docs.map((doc) => doc.data()))
     })
  }, [])

  return (
    <div className='feed'>
        <div className='feedheader'>
            <h2>Home</h2>
        </div>
        <TweetBox/>

        {posts.map( post => (
          <Post 
          displayName = {post.displayName}
          userName = {post.userName}
          verified = {post.verified}
          text = {post.text}
          image = {post.image}
          avatar = {post.avatar}
        />
        ))}
    </div>
  )
}

export default Feed
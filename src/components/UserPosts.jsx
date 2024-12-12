import { useHttp } from 'hooks/UseHttp'
import React from 'react'
import {  useParams } from 'react-router-dom'
import { fetchPostById } from 'services/api'

const UserPosts = () => {
  
    const {userId}= useParams()
    const [posts, setPosts]=useHttp(fetchPostById, userId)
    if (!posts) {
        return <p>Loading user data...</p>; 
    }
  return (
    <div>
        <ul className='list-disc'>
            {posts?.map(post=> 
                <li key={post.id}>{post.title}</li>
            )}
        </ul>
    </div>
  )
}

export default UserPosts
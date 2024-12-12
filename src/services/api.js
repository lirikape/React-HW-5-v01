import axios from "axios";

axios.defaults.baseURL= 'https://dummyjson.com/'

export const fetchUsers= async params =>{
    const {data}= await axios.get('/users',{
        params:{
            ...params
        }
    })
    return data.users
}

export const fetchUsersById= async id =>{
    const {data}= await axios.get(`/users/${id}`)
    return data
   
}
export const fetchPostById = async id =>{
    const {data}= await axios.get(`https://dummyjson.com/posts/user/${id}`)
    return data.posts
}
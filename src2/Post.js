import React, { useEffect, useState } from "react";


const useJazzyNews = () => {

const [posts, setPosts] = useState([])
const addPost = post => setPosts(allPost => [...post, allPost])

useEffect(() => {
    welcomeChime.Play();
    return () => {
        goobyChime.Play();
  
    }
}, [])

useEffect(() => {

    newsFeed.subscribe(addPost)
    return  () => {
        newsFeed.unsubscribe(addPost)
    }
}, [])
}
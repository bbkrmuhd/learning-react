import React, { useEffect, useState, useMemo } from "react";


const useJazzyNews = () => {

    const [_posts, setPosts] = useState([])
    const addPost = post => setPosts(allPost => [...post, allPost])

    const welcomeChime = null
    const goodbyChime = null
    const newPostChime = null
    let newsFeed;
    
    
    const posts = useMemo(() => _posts, [_posts])

    useEffect(() => {
        newPostChime.play()
    }, [posts])

    useEffect(() => {
        welcomeChime.play();
        return () => {
            goodbyChime.play();
    
        }
    }, [])

    useEffect(() => {

        newsFeed.subscribe(addPost)
        return  () => {
            newsFeed.unsubscribe(addPost)
        }
    }, [])

    return posts

}

function NewsFeed({ url }) {
    const posts = useJazzyNews;

    return (
        <>
        <h1>{posts.length} articles</h1>
        {posts.map(post => <Post key={post.id} {...post} />)}
        </>
      
    )

}
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Posts } from './Posts'
import { ContextElement } from './useContext'

export const Pagination = () => {
    // const [posts, setPosts] = useState([])
    // const [loading, setLoading] = useState(false)
    // const [currentPage, setCurrentPage] = useState(1)
    // const [postsPerPage, setPostsPerPage] = useState(10)
    const { posts, loading, currentPage, postsPerPage, setLoading, setPosts } = ContextElement()
    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true)
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            setPosts(res.data)
            setLoading(false)
        }
        fetchPosts()
    }, [])

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage


    console.log(posts)
    return (
        <div className="container">
            <h1>My Blog</h1>
            <Posts posts={posts} loading={loading} />
        </div>
    )
}

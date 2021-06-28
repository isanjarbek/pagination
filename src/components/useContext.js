import React, { createContext, useContext, useState, useEffect } from 'react'
const Wrapper = createContext()
export const ContextElement = () => useContext(Wrapper)

const WrapperProvider = ({ children }) => {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(10)


    return (
        <Wrapper.Provider value={{ posts, loading, currentPage, postsPerPage, setLoading, setPosts }}>
            {children}
        </Wrapper.Provider>
    )
}
export default WrapperProvider
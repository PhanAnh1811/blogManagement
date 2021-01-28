import React,{useState} from 'react'


const DATA = [
    {
        id: 1,
        name: "item store 1"
    },
    {
        id: 2,
        name: "item store 2"
    },
    {
        id: 3,
        name: "item store 3"
    },
]


const BlogContext = React.createContext()


const generateId = () => {
    return Math.random() * 999 ;
}


export const BlogProvider = ({children}) => {
    const [blogPosts,setBlogPosts] = useState([]);



    const addBlogPost = () => {
        // Spread Operator -> ES6 
        setBlogPosts([...blogPosts,{id:generateId(),name:`Blog Post # ${blogPosts.length + 1}`}])
    }

    const removeBlogPost = (idNeedToRemove) => {
        const data = blogPosts.filter(item => item.id !== idNeedToRemove);
        setBlogPosts(data);
    }



    return(
        // Value truyền từ context xuống
        // 1 object data chứa array posts
        // 1 function : add new blog to context
        // So we wrap blogPosts (data array) 
        // And addBlogPosts function 
        // Into value

        <BlogContext.Provider
            value={{data:blogPosts,addBlogPost,removeBlogPost}}
        >
            {children}
        </BlogContext.Provider>
    )
}


export default BlogContext;
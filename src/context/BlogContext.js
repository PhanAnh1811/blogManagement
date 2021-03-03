import React,{useState} from 'react'


const DATA = [
    {
        id: 1,
        title:"hehe",
        content:"hehe"
    },
  
]


const BlogContext = React.createContext()


const generateId = () => {
    return Math.floor(Math.random() * 999 );
}


export const BlogProvider = ({children}) => {
    const [blogPosts,setBlogPosts] = useState([]);



    const addBlogPost = (title,content) => {
        // Spread Operator -> ES6
        console.log("Add Blog Post"); 
        setBlogPosts([...blogPosts,{id:generateId(),title:title,content:content}])
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
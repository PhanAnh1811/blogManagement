import React,{useState} from 'react'


const DATA = [
    {
        id: 1,
        title:"hehe",
        content:"hehe"
    },
]


// Refactor useReducer

/**
 * 1. Create a reducer
 * Reducer is just a pure function
 * Pure function : (state) => inside changes
 * 
 * // Not a pure function
 * var currency = 10;
 * const exchange = (value) => {
 *  return value * currency;
 * }
 *  
 * // Pure function
 * const calculate = (x) => {
 *  return x * 2;
 * }
 * 
 * => Reducer pure function
 * 
 * 2. useReducer
 * 
 */

const BlogContext = React.createContext()


const generateId = () => {
    return Math.floor(Math.random() * 999 );
}


export const BlogProvider = ({children}) => {
    const [blogPosts,setBlogPosts] = useState(DATA);



    const addBlogPost = (title,content) => {
        // Spread Operator -> ES6
        console.log("Add Blog Post"); 
        setBlogPosts([...blogPosts,{id:generateId(),title:title,content:content}])
    }

    const removeBlogPost = (idNeedToRemove) => {
        const data = blogPosts.filter(item => item.id !== idNeedToRemove);
        setBlogPosts(data);
    }

    const editBlogPost=(id,title,content)=>{
        const postNeedToUpdate = blogPosts.find((item) => item.id ===id);
        postNeedToUpdate.content = content;
        postNeedToUpdate.title = title;
        postNeedToUpdate.id=id;
        const mapped = blogPosts.filter((item) => item.id !== id )
        mapped.push(postNeedToUpdate)
        
        console.log(mapped);
        setBlogPosts(mapped)
    }

   

    return(
        // Value truyền từ context xuống
        // 1 object data chứa array posts
        // 1 function : add new blog to context
        // So we wrap blogPosts (data array) 
        // And addBlogPosts function 
        // Into value

        <BlogContext.Provider
            value={{data:blogPosts,addBlogPost,removeBlogPost,editBlogPost}}
        >
            {children}
        </BlogContext.Provider>
    )
}


export default BlogContext;
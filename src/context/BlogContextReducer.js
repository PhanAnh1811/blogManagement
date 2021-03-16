import CreateDataComponent from '../context/CreateDataContext';
import JsonServer from '../api/JsonServer';
/**
 * 1. Create a reducer
 */

const intialState =[];

const BlogReducer = (state,action) => {
    switch(action.type){
        case 'GET_DATA':
            return state;
        default:
            return state;
    }
}

const getList = (dispatch) => {
    return async () => {
        const res=await JsonServer.get('/posts');
        dispatch({
            type: 'data',
            payload:res.data
        })
    }
}

const addList=(dispatch) => {
    return async (title,callback) => {
       await JsonServer.post('/posts',{title})
       dispatch({
           type: 'add_item',
           payload:{title}
       })     
       if(callback){
           callback();
       }
    }
}

const removeList = (dispatch) => {
    return async (id) => {
        await JsonServer.delete('/posts/'+id)
        dispatch({
            type:'remove_item',
            payload:id
        })
    }
}

const editList = (dispatch) => {
    return async (id, title, callback) => {
        await JsonServer.put('/posts/'+id,{title})
        dispatch({
            type:'edit_item',
            payload:{id,title}
        })
        if(callback){
            callback();
        }
    }
}

export default {Context, Provider}=CreateDataContext(
    BlogReducer,
    {addList,removeList,editList,getList}
)

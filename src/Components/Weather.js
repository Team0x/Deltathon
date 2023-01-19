import React,{useReducer,useEffect} from 'react'
import axios from 'axios'

const initialState = {
    loading :true,
    error : '',
    post :{}
}
const reducer = (state,action) =>{
    switch(action.type){
        case 'FETCH_SUCESS':
            return {
                loading :false,
                post: action.payload,
                error: ''
                
            }
            case 'FETCH_ERROR':
                return {
                    loading :false,
                    error: 'Something went Wrong !',
                    post: {}
                }
            
            default:
                return state
    }
}
function Weather() {
    const [state,dispatch] = useReducer(reducer,initialState)
    useEffect(()=>{
        axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            dispatch({type:'FETCH_SUCESS', payload:response.data})
        })
        .catch(err=>{
            dispatch({type:'FETCH_ERROR'})
        })
    },[])


  return (
    <div>
    {state.loading?'Loading': state.post.map(data=>{
        
    })}
    {state.error?state.error:null}
    </div>
  )
}

export default Weather

import React,{useState} from "react";
import  {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice'

function AddTodo(){
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(addTodo(inputValue));
        setInputValue('');
    }
    return(
        <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="Enter something"
            value={inputValue}
            onChange={(e)=>setInputValue(e.target.value)}
            style={{
              padding: '8px',
              fontSize: '16px',
            }}
          />
          <button
            type="submit"
            style={{
              padding: '8px 16px',
              fontSize: '16px',
              cursor: 'pointer',
            }}
          >
            Submit
          </button>
        </div>
      </form>
    )
}

export default AddTodo
import { createSlice, nanoid,createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            id: 1,
            text: "Hello world"
        },
        {
            id: 2,
            text: "Lets add some work"
        }
    ]
};
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }
});

export const users = createAsyncThunk({
   
})

export const { addTodo, removeTodo } = todoSlice.actions
export default todoSlice.reducer
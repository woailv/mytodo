import React from 'react'
import {addTodo} from "../actions";

const AddTodo = ({dispatch}) => {
    let input
    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    console.log("没有内容add")
                    return
                }
                console.log("add is clicked")
                dispatch(addTodo(input.value))
                input.value = ""
            }}>
                <input ref={node => input = node}/>
                <button>Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo
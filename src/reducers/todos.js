const todos = (state = [], action) => {
    console.log("reducers todos")
    switch (action.type) {
        case "ADD_TODO":
            console.log("ADD_TODO")
            return [{id:action.id, text: action.text}, ...state]
        case "PING":
            console.log("pong")
            return state
        case "TOGGLE_TODO":
            console.log("TOGGLE_TODO", action.id)
            return state.map(todo => action.id === todo.id ? {...todo, completed: !todo.completed} : todo)
        default:
            console.log("不能识别的action.type")
            return state
    }
}

export default todos
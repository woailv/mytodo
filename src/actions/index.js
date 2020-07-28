let nextToDoId = 1
export const addTodo = (text) => ({
    type: "ADD_TODO",
    id: nextToDoId++,
    // text: text,
    text,
})

export const ping = () => ({
    type: "PING",
})

export const toggleTodo = (id) => ({
    type: "TOGGLE_TODO",
    id: id,
})

export const setVisibilityFilter = (filter) => ({
    type: "SET_VISIBILITY_FILTER",
    filter,
})
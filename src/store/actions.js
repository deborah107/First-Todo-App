let nextTodoId = 0
export const addTodo = action => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    title: action.title,
    description: action.description,
    status: action.status,
    createdAt: action.createdAt || new Date().toISOString()
})
export const changeStatusTodo = action => ({
    type: 'CHANGE_STATUS_TODO',
    id: action.id,
    status: action.status,
})
export const editTodo = action => ({
    type: 'EDIT_TODO',
    title: action.title,
    description: action.description,
    id: action.id,
})
export const deleteTodo = id => ({
    type: 'DELETE_TODO',
    id,
})
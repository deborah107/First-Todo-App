const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    description: action.description,
                    status: action.status,
                    createdAt: action.createdAt
                }
            ]
        case 'CHANGE_STATUS_TODO':
            return state.map(todo =>
                todo.id === action.id ? { ...todo, status: action.status } : todo
        )
        case 'EDIT_TODO':
            const item = state.find(todo => todo.id === action.id)
            item.title = action.title
            item.description = action.description
            return [
                ...state.filter(todo => todo.id !== action.id),
                item
            ]
        case 'DELETE_TODO':
            return state.filter(todo =>
                todo.id !== action.id
            ) 
        default:
            return state
    }
}
export default todos
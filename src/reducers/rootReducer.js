const initState = {
    posts : [
        {
            userId: 1, 
            id: 1, 
            title: "Title 1", 
            body: "hello this is the very first comment of mine."
        },
        {
            userId: 1, 
            id: 2, 
            title: "Title 2", 
            body: "hello i am learning redux here this is redux demo learning project.."
        },
        {
            userId: 1, 
            id: 3, 
            title: "ea molestias quasi exercitationem repellat qui ipsa sit aut", 
            body: "et iusto sed quo iure↵voluptatem occaecati omnis e…↵molestiae porro eius odio et labore et velit aut"
        }

    ]
}

const rootReducer = (state = initState , action) => {
    console.log(action)
    console.log("after mapDispatchToPorops")
    if(action.type === 'DELETE_POST'){
        let newPost = state.posts.filter((post) => {
            return action.id !== post.id
        })

        return {
            ...state,
            posts : newPost
        }
    }
    return state;
}

export default rootReducer;
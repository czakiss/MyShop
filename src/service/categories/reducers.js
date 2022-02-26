
const INITIAL_STATE = {
    categories: [
        {
            id:1,
            name:"Category #1"
        },
        {
            id:2,
            name:"Category #2"
        },
        {
            id:3,
            name:"Category #3"
        },

    ]
}

const categoriesReducer =(state = INITIAL_STATE, action) =>{
    switch (action.type){
        default:
            return state
    }
}

export default categoriesReducer


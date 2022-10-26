// eslint-disable-next-line
export default (state = [], action) => {

    let index;
    let manga;

    switch (action.type) {


        case "INDEX":
            return [...state, action.manga]

        case "ADD_MANGA":
            return state.concat(action.manga)
        //[...state, action.manga]



        case "REMOVE_MANGA":
            return [...state.filter(manga => { return manga.id !== action.id })]

        case "UPVOTE_MANGA":
            index = state.findIndex(manga => manga.id === action.id);
            manga = state[index];
            return [
                ...state.slice(0, index),
                Object.assign({}, manga, { ...manga.votes += 1 }),
                ...state.slice(index + 1),
            ];

        case "DOWNVOTE_MANGA":
            index = state.findIndex(manga => manga.id === action.id);
            manga = state[index];
            return [
                ...state.slice(0, index),
                Object.assign({}, manga, { ...manga.votes -= 1 }),
                ...state.slice(index + 1),
            ];

        default:
            return state;
    }
}
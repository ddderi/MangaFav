export const addManga = manga => {
    return {
        type: "ADD_MANGA",
        manga: {
            ...manga, votes: 0
        }
    }
}

export const removeManga = id => {
    return {
        type: "REMOVE_MANGA",
        id
    }
}



export const upvoteManga = id => {
    return {
        type: 'UPVOTE_MANGA',
        id
    }
}

export const downvoteManga = id => {
    return {
        type: 'DOWNVOTE_MANGA',
        id
    }
}

export const indexMangas = mangas => {
    return {
        type: "INDEX",
        mangas
    }
}
function commentToObject(comments){
    return comments.map(comment => {
        return {
            id: comment.id,
            date: comment.date,
            author: comment.user.name,
            message: comment.message,
            votes: comment.getVotes()
        }
    });
}

export {commentToObject};
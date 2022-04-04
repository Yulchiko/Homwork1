const Post  = (post) => {
const {userid, id, title, body} = post;
    return(
        <div>
            <div>userid: {userid} </div>
            <div>id: {id} </div>
            <div>title: {title}</div>
            <div>body: {body}</div>
        </div>
    );

};
export default Post;
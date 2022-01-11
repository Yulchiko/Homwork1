const Post  = (props) => {
    const {userid, id, title, body} = props;

    return(
        <div>
            {userid} {id} - {title} - {body}
        </div>
    );

};
export default Post;
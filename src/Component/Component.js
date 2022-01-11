const Component  = (props) => {
    const {postid, id, name, email, body} = props;

    return(
        <div>
            {postid} {id} - {name} - {email} - {body}
        </div>
    );

};
export default Component;
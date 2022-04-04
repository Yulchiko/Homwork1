const Component  = (component) => {
const {postid, id, name, email, body} = component;
    return(
        <div>
            <div>postid: {postid} </div>
            <div>id: {id} </div>
            <div>name: {name} </div>
            <div>email: {email} </div>
            <div>body: {body} </div>
        </div>
    );

};
export default Component;
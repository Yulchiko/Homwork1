const User  = (props) => {
    const {id, name, surname, email} = props;

    return(
        <div>
            <div> id: {id}</div>
            <div> name: {name}</div>
            <div> surname: {surname}</div>
            <div> email: {email}</div>
        </div>
        );

};
export default User;
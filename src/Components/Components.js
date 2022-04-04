import {useEffect, useState} from "react";
import React from "react";

import Component from "../Component/Component";

const Components = () => {
    const [components, setComponents] = useState([]);

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => setComponents(value))
    }, [])
    return(
        <div>

            {components.map(value => <Component key={value.id} postid={value.postid} id={value.id} name={value.name} email={value.email} body={value.body}/>)}
        </div>
    )
}

export default Components;
import React, {useEffect, useState} from 'react'
import {ListGroup} from "react-bootstrap";
import axios from 'axios';
function CharacterCard({url}) {

    const [character, setCharacter] = useState();

    async function fetchData() {
        const {data} = await axios.get(url);
        setCharacter(data.name);
    }

    useEffect(() => {
        fetchData();
    }, []);

   
    return (
        <ListGroup.Item>{character}</ListGroup.Item>
    );
}

export {CharacterCard}
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Col, Container, Row, Alert, Button} from "react-bootstrap";
import { EpisodeCard } from '../components';
import configData from "../config.json";

function Episodes() {

    const [episodes, setEpissodes] = useState([]);
    const [apiUrl, setApiUrl] = useState(configData.API_URL);
    const [next, setNext] = useState(null);
    const [prev, setPrev] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);



    async function fetchData() {
        const {data} = await axios.get(apiUrl);
        setEpissodes(data.results);
        setNext(data.info.next);
        setPrev(data.info.prev);
        setIsLoaded(true);   
    }

    useEffect(() => {
        fetchData();
    });

    function goToPrev() {
        if (prev != null) {
            setIsLoaded(false);
            setApiUrl(prev);
            fetchData();
        }
    }

     function goToNext() {
         
        if (next != null) {
            setIsLoaded(false);
            setApiUrl(next);
            fetchData();
        }
        
    }
    
    if(isLoaded) {
        return (
            <Container>
                <Row className="justify-content-md-center" style={{marginTop: '20px'}}>
                <Col xs lg="10">
                    <Alert variant='secondary'>Episodes</Alert>
                </Col>
                </Row>
                <Row className="justify-content-md-center" style={{marginTop: '20px'}}>
                    
                    {episodes.map((item, index) => { 
                        return <Col xs lg="5"><EpisodeCard data={item} /></Col> 
                    })}
                    
                </Row>
                <Row style={{marginBottom: '20px'}}>
                    <Col xs lg="2" md={{ offset: 1 }} >{prev ? (<Button  onClick={() => goToPrev()}>Prev</Button>) : ("")}</Col> 
                    <Col xs lg="2"  md={{ offset: 7 }} >{next ? (<Button onClick={() => goToNext()}>Next</Button>) : ("")}</Col> 
                </Row>
            </Container>
        );
    } else {
        return (
            <Container>
                <h1>Loading </h1>
            </Container>
        );
    }

    
}

export {Episodes}
import React, {useEffect, useState} from 'react'
import {Col, Container, Row, ListGroup , Card} from "react-bootstrap";
import configData from "../config.json";
import axios from 'axios';
import {CharacterCard} from '../components';
function Episode({match }) {
    let params = match.params;
    const apiUrl = configData.API_URL + '/' + params.id;

    const [episode, setEpisode] = useState();
    
    const [isLoaded, setIsLoaded] = useState(false);

    async function fetchData() {
        const {data} = await axios.get(apiUrl);
        setEpisode(data);
        setIsLoaded(true); 
    }

    useEffect(() => {
        fetchData();
    }, []);

    if(isLoaded) {
        return (
            <Container>
                <Row style={{margin: '20px'}}>
                    <Col xs={12} md={12} >
                        <Card>
                            <Card.Header>{episode.name}</Card.Header>
                            <Card.Body>
                                
                                <Card.Title style={{marginTop: '10px'}}>Episode: {episode.episode}</Card.Title>
                                <Card.Text style={{marginTop: '10px'}}>Air Date: {episode.air_date}</Card.Text>
                                <Row>
                                    <Card>
                                        <Card.Header>Characters</Card.Header>
                                        <ListGroup variant="flush">
                                            {episode.characters.map((item, index) => { 
                                                return <CharacterCard url={item} /> 
                                            })}
                                        </ListGroup>
                                    </Card>       
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
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

export {Episode}
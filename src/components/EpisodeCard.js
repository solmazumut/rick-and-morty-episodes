import React, {useEffect, useState} from 'react'
import { useHistory } from "react-router-dom";
import {Col, Container, Row, Button, Card} from "react-bootstrap";
function EpisodeCard({data}) {

    const history = useHistory();

    function goEpisode() {
        history.push(`/episode/${data.id}`);
    }

    return (
        <Container>
            <Row style={{margin: '20px'}}>
                <Col xs={12} md={12} >
                    <Card>
                        <Card.Body>
                            <Card.Title style={{marginTop: '20px'}}>{data.name}</Card.Title>
                            <Card.Text style={{marginTop: '10px'}}>Air Date: {data.air_date}</Card.Text>
                            <Card.Text style={{marginTop: '10px'}}>Episode: {data.episode}</Card.Text>
                            <Row>
                                <Button variant="secondary" style={{marginTop: '20px',marginRight: '20px'}} onClick={() => goEpisode()}>Details</Button>
                            </Row>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export {EpisodeCard}
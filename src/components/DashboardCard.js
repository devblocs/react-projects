import React from 'react';
import {Card, CardDeck} from 'react-bootstrap';
import Moment from 'react-moment';

function DashboardCard(props){
    const {allStats} = props;
    const date = new Date(allStats.updated);

    return (
        <CardDeck>
            <Card>
                <Card.Header className="bg-primary text-white text-center">
                    <h4>Cases</h4>
                </Card.Header>
                <Card.Body>
                    <Card.Text>{allStats.cases}</Card.Text>
                    <Card.Text><small className="text-muted">Last updated <Moment fromNow>{date}</Moment></small></Card.Text>
                </Card.Body>
                </Card>
            <Card>
                <Card.Header className="bg-primary text-white text-center">
                    <h4>Deaths</h4>
                </Card.Header>
                <Card.Body>
                    <Card.Text>{ allStats.deaths }</Card.Text>
                    <Card.Text><small className="text-muted">Last updated <Moment fromNow>{date}</Moment></small></Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Header className="bg-primary text-white text-center">
                    <h4>Recovered</h4>
                </Card.Header>
                <Card.Body>
                    <Card.Text>{ allStats.recovered }</Card.Text>
                    <Card.Text><small className="text-muted">Last updated <Moment fromNow>{date}</Moment></small></Card.Text>
                </Card.Body>
            </Card>
        </CardDeck>
    );
}

export default DashboardCard;
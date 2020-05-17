import React from 'react';
import {Card} from 'react-bootstrap';

function CountryCard(props){
    const {country} = props;

    return (
        <Card>
            <Card.Header className="text-center">
                <h4>{country.country}</h4>
            </Card.Header>
            <Card.Img variant="top" src={country.countryInfo.flag} />
            <Card.Body>
                <Card.Text><strong>Cases:</strong> {country.cases}</Card.Text>
                <Card.Text><strong>Deaths:</strong> {country.deaths}</Card.Text>
                <Card.Text><strong>Recovered:</strong> {country.recovered}</Card.Text>
                <Card.Text><strong>Active:</strong> {country.active}</Card.Text>
                <Card.Text><strong>Critical:</strong> {country.critical}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default CountryCard;
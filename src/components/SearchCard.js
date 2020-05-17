import React, {Component} from 'react';
import {Card, Col, Form} from 'react-bootstrap';

class SearchCard extends Component{

    handleSearch = (e) => {
        this.props.onSearchCountry(e.target.value);
    }

    render(){
        return (
            <Card>
                <Card.Body>
                <Form>
                    <Form.Row>
                        <Col md={12}>
                            <Form.Control type="text" onChange={this.handleSearch} value={this.props.countryName} placeholder="Search by country name..." />
                        </Col>
                    </Form.Row>
                </Form>
                </Card.Body>
            </Card>
        );
    }
}

export default SearchCard;
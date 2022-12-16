import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';

export class AppEdit extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch("https://localhost:7008/api/Appointment", {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "id": parseInt(event.target.Id.value),
                "date": event.target.Date.value,
                "time": event.target.Time.value,
                "customerId": parseInt(event.target.CustomerId.value)
            })
        })
            .then(res => res.json())
            
    }
    render() {
        return (
            <div className="EditPage">
                <p>Edit Appointment</p>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="Id">
                        <Form.Control type="text" name="Id" required placeholder="Id" />
                    </Form.Group>
                    <Form.Group controlId="Date">
                        <Form.Control type="text" name="Date" required placeholder="Date" />
                    </Form.Group>
                    <Form.Group controlId="Time">
                        <Form.Control type="text" name="Time" required placeholder="Time" />
                    </Form.Group>
                    <Form.Group controlId="CustomerId">
                        <Form.Control type="text" name="CustomerId" required placeholder="Customer" />
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit" className="buttons">
                            Submit
                        </Button>
                    </Form.Group>
                </Form>
            </div>
        )
    }

}
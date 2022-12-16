import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';


export class AppAdd extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        if (window.confirm('Are you sure?')) {
            fetch("https://localhost:7008/api/Appointment", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'content-type': 'application/ json',
                    'Access-Control-Allow-Origin': '*',
                },
                
                body: JSON.stringify({
                    "id": parseInt(event.target.Id.value),
                    "date": event.target.Date.value,
                    "time": event.target.Time.value,
                    "customerId": parseInt(event.target.CustomerId.value)
                }),
            })
                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                    console.log(error)
                })
            
        }
    }
    render() {
        return (
            <div className="AddPage">
                <p>Add Appointment</p>
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
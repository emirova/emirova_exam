import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';


export class CustomerAdd extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        if (window.confirm('Are you sure?')) {
            fetch("https://localhost:7008/api/Customer", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'content-type': 'application/ json',
                    'Access-Control-Allow-Origin': '*',
                },
                
                body: JSON.stringify({
                    "id": parseInt(event.target.Id.value),
                    "name": event.target.Name.value,
                    "master": event.target.Master.value,
                    "serviceType": event.target.ServiceType.value
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
                <p>Add Customer</p>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="Id">
                        <Form.Control type="text" name="Id" required placeholder="Id" />
                    </Form.Group>
                    <Form.Group controlId="Name">
                        <Form.Control type="text" name="Name" required placeholder="Your name" />
                    </Form.Group>
                    <Form.Group controlId="Master">
                        <Form.Control type="text" name="Master" required placeholder="Your master" />
                    </Form.Group>
                    <Form.Group controlId="ServiceType">
                        <Form.Control type="text" name="ServiceType" required placeholder="Service" />
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
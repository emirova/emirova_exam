import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';

export class CustomerEdit extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch("https://localhost:7008/api/Customer", {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Id: parseInt(event.target.Id.value),
                Name: event.target.Name.value,
                Master: event.target.Master.value,
                ServiceType: event.target.ServiceType.value
            })
        })
            .then(res => res.json())
            
    }
    render() {
        return (
            <div className="EditPage">
                <p>Edit Customer</p>
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
                            Update
                        </Button>
                    </Form.Group>
                </Form>
            </div>
        )
    }

}
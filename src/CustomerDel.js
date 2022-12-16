import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';


export class CustomerDel extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    deleteDep(id) {
        if (window.confirm('Are you sure?')) {
            fetch('https://localhost:7008/api/Customer/' + id, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }

    handleSubmit(event) {

        if (window.confirm('Are you sure?')) {
            fetch("https://localhost:7008/api/Customer/" + event.target.Id.value, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })

                .then(res => res.json())
                .then((result) => {
                    alert(result);
                },
                    (error) => {
                        alert('Failed');
                    })
        }
    }

    render() {
        return (
            <div className="DelPage">
                <p>Delete Edition</p>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="Id">
                        <Form.Control type="text" name="Id" required placeholder="ID" />
                    </Form.Group>

                    <Form.Group>
                        <Button className="buttons" variant="primary" type="submit">

                            Delete
                        </Button>
                    </Form.Group>
                </Form>

            </div>
        )
    }

}
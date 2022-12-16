import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { Form, Modal } from "react-bootstrap";
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-bootstrap4';
import 'C:/Users/Msi/emirova_react-app/node_modules/@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';
import './Customer.css';

import { CustomerAdd } from './CustomerAdd';
import { CustomerEdit } from './CustomerEdit';
import { CustomerDel } from './CustomerDel';

export class Customers extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ords: [], comment: ""}
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    refreshList() {
        fetch("https://localhost:7008/api/Customer").then(response => response.json())
            .then(data => this.setState({ ords: data }));
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }


    handleSubmit(event) {
        event.preventDefault();
        this.setState({ comment: event.target.search.value })
    }

    handleCustomers(event) {
        event.preventDefault();
        window.location = '/'
    }

    handleAppointments(event) {
        event.preventDefault();
        window.location = '/appointments'
    }

    render() {

        const columns = [
            { name: 'id', title: 'Id' },
            { name: 'name', title: 'Name' },
            { name: 'master', title: 'Master' },
            { name: 'serviceType', title: 'ServiceType' },
        ];


        const rows = this.state.ords;

        return (
            
            <div className="CustomerPage">
                <button className="btn" onClick={this.handleCustomers}>
                   Customers
                </button>
                <button className="btn" onClick={this.handleAppointments}>
                    Appointment
                </button>
                <div className="forms">
                    <div className="addform">
                        <CustomerAdd />
                    </div>
                    <div className="editform">
                        <CustomerEdit />
                    </div>
                    <div className="delform">
                        <CustomerDel />
                    </div>
                </div>

                <Grid
                    rows={rows}
                    columns={columns}
                >
                    <Table />
                    <TableHeaderRow />
                </Grid>
            </div>
        )
    }

}


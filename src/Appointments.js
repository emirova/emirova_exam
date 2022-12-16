import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { Form, Modal } from "react-bootstrap";
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-bootstrap4';
import 'C:/Users/Msi/emirova_react-app/node_modules/@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';
import './Appointment.css';

import { AppAdd } from './AppAdd';
import { AppEdit } from './AppEdit';
import { AppDel } from './AppDel';

export class Appointments extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ords: [], comment: ""}
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    refreshList() {
        fetch("https://localhost:7008/api/Appointment").then(response => response.json())
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
            { name: 'date', title: 'Date' },
            { name: 'time', title: 'Time' },
            { name: 'customerId', title: 'customerId' },
        ];


        const rows = this.state.ords;

        return (
            <div className="AppointmentPage">
                  <button className="btn" onClick={this.handleCustomers}>
                   Customers
                </button>
                <button className="btn" onClick={this.handleAppointments}>
                    Appointment
                </button>
                <div className="forms">
                    <div className="addform">
                        <AppAdd />
                    </div>
                    <div className="editform">
                        <AppEdit />
                    </div>
                    <div className="delform">
                        <AppDel />
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


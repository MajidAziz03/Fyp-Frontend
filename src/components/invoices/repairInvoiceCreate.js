import { Button } from '@mui/material'
import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { toast } from 'react-toastify'
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import Breadcrumb from "../common/breadcrumb";
import { Fragment } from "react";
import CustomBooking from './customBooking'
import CustomRepair from './customRepair'


const initialValues = {
    booking: '',
    bookingBy: '',
    statusOfBooking: '',
    approvedBy: '',
    ref: '',
    agentPol: '',
    contactPerson: '',
    quantity: '',
    containerSize: '',
    containerType: '',
    portOfLoading: '',
    portOfFinal: '',
    commodity: '',
    dg: '',
    dgClass: ''
}




const RepairNewInvoice = () => {
    return (
        <>
            <Fragment>
                <Container fluid={true}>
                    <Row>
                        <Col sm="12">
                            <Card>
                                <CardBody>
                                    <CustomRepair />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        </>
    )
}

export default RepairNewInvoice;

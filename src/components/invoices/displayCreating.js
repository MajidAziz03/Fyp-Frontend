import { Button } from '@mui/material';
import React, { useState, Fragment, } from 'react'
import { Link } from 'react-router-dom';
import Breadcrumb from "../common/breadcrumb";
import './invoice.css'
import InvoiceBooking from './invoiceBooking.js';
// import InvoiceRepair from './invoiceRepair.js';
import InvoiceShipper from './invoiceShipper.js'
import { Card, CardBody, Form, CardHeader, Container, ModalFooter, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, } from "reactstrap";
// import RepairInvoice from './repairInvoice';
import NewInvoice from './bookingInvoiceCreate';
import RepairNewInvoice from './repairInvoiceCreate';
import ShipperCreateInvoice from './shipperInvoiceCreate';


const DisplayInvoice = () => {

    const [activeBooking, setActiveBooking] = useState(true)
    const [activeRepair, setActiveRepair] = useState(false)
    const [activeShipper, setActiveShipper] = useState(false)
    const [reportType, setreportType] = useState('booking')


    const handleBooking = () => {
        setActiveBooking(true)
        setActiveRepair(false)
        setActiveShipper(false)
        setreportType('booking')
    }

    const handleRepair = () => {
        setActiveRepair(true)
        setActiveBooking(false)
        setActiveShipper(false)
        setreportType('repair')


    }

    const handleShipper = () => {
        setActiveShipper(true)
        setActiveBooking(false)
        setActiveRepair(false)
        setreportType('shipper')

    }

    return (
        <Fragment>
            <Breadcrumb title="Select Invoice Type" />
            <Container fluid={true}>
                <Card>
                    {
                        reportType === 'booking'
                            ?
                            <CardHeader>
                                <h5>Create New Booking</h5>
                            </CardHeader>
                            :
                            reportType === 'repair'
                                ?
                                <CardHeader>
                                    <h5>Create New Repair</h5>
                                </CardHeader>
                                :
                                reportType === 'shipper'
                                    ?
                                    <CardHeader>
                                        <h5>Create New Shipper</h5>
                                    </CardHeader>
                                    :
                                    null
                    }
                    <div className='switcher'>
                        {
                            activeBooking
                                ?
                                <Button variant='contained' size='small' sx={{ backgroundColor: "#7e7cf4", marginRight: "1px" }}> Booking </Button>
                                :
                                <Button size='small' onClick={handleBooking} > Booking </Button>
                        }
                        {
                            activeRepair
                                ?
                                <Button variant='contained' size='small' sx={{ backgroundColor: "#7e7cf4 ", marginRight: "1px" }}> Repair </Button>
                                :
                                <Button size='small' onClick={handleRepair} > Repair </Button>
                        }
                        {
                            activeShipper
                                ?
                                <Button variant='contained' size='small' sx={{ backgroundColor: "#7e7cf4 ", marginRight: "1px" }}> Sent to Shipper </Button>
                                :
                                <Button size='small' onClick={handleShipper} > Sent to Shipper </Button>
                        }
                    </div>
                    <div className="btn-popup pull-right" style={{ backgroundColor: "yellow", position: "relative" }}>
                        <Link to={'/invoice/new'}><Button variant='contained' sx={{
                            backgroundColor: "#7c7cf4",
                            textDecoration: "none",
                            position: "absolute",
                            right: "32px"
                        }} size='small' onClick={handleBooking} > Create New Invoice </Button></Link>
                    </div>

                    {
                        reportType === 'booking'
                            ?
                            <NewInvoice />
                            :
                            reportType === 'repair'
                                ?
                                <RepairNewInvoice />
                                :
                                reportType === 'shipper'
                                    ?
                                    <ShipperCreateInvoice />
                                    :
                                    null
                    }
                </Card>
            </Container>
        </Fragment>
    )
}

export default DisplayInvoice;
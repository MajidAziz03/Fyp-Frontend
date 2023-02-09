import { Button } from '@mui/material'
import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { toast } from 'react-toastify'
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import Breadcrumb from "../common/breadcrumb";
import { Fragment } from "react";
import CustomBooking from './customBooking'


const initialValues = {
    booking: '',
    // bookingDate: '',
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




const NewInvoice = () => {

    // const { values, handleChange, handleSubmit, handleBlur } = useFormik({
    //     initialValues: initialValues,
    //     onSubmit: async (values) => {
    //         try {
    //             const res = await axios.post('http://localhost:4000/invoices/booking', values)
    //             toast.success("Saved Successfully ")
    //             return {
    //                 status: true
    //             }
    //         }
    //         catch (error) {
    //             toast.error(error.response.data.message)
    //         }

    //     }
    // })

    return (
        <>
            <Fragment>
                <Container fluid={true}>
                    <Row>
                        <Col sm="12">
                            <Card>
                                <CardBody>
                                    <CustomBooking />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        </>
    )
}

export default NewInvoice









    // < div className = 'createInvoice' >
    //             <h2 className='head'> New Booking </h2>
    //             <Form style={{ display: "flex", flexDirection: "column", gap: "1rem" }} className="form-horizontal auth-form" onSubmit={handleSubmit}>
    //                 <Input sx={{ marginBottom: "12px" }} type="text" name='booking' placeholder="Enter booking details" onChange={handleChange} value={values.booking} />
    //                 <Input className="form-control" type="text" name='bookingBy' placeholder="Enter booking by" onChange={handleChange} value={values.bookingBy} />
    //                 <Input className="form-control" type="text" name='statusOfBooking' placeholder="Enter status of booking" onChange={handleChange} value={values.statusOfBooking} />
    //                 <Input className="form-control" type="text" name='approvedBy' placeholder="Enter approved by" onChange={handleChange} value={values.approvedBy} />
    //                 <Input className="form-control" type="text" name='ref' placeholder="Enter reference" onChange={handleChange} value={values.ref} />
    //                 <Input className="form-control" type="text" name='agentPol' placeholder="Enter agent/POL" onChange={handleChange} value={values.agentPol} />
    //                 <Input className="form-control" type="text" name='contactPerson' placeholder="Enter contact person" onChange={handleChange} value={values.contactPerson} />
    //                 <Input className="form-control" type="text" name='quantity' placeholder="Enter quantity" onChange={handleChange} value={values.quantity} />
    //                 <Input className="form-control" type="text" name='containerSize' placeholder="Enter container size" onChange={handleChange} value={values.containerSize} />
    //                 <Input className="form-control" type="text" name='containerType' placeholder="Enter container type" onChange={handleChange} value={values.containerType} />
    //                 <Input className="form-control" type="text" name='portOfLoading' placeholder="Enter port of loading" onChange={handleChange} value={values.portOfLoading} />
    //                 <Input className="form-control" type="text" name='portOfFinal' placeholder="Enter port of final destination" onChange={handleChange} value={values.portOfFinal} />
    //                 <Input className="form-control" type="text" name='commodity' placeholder="Enter commodity" onChange={handleChange} value={values.commodity} />
    //                 <Input className="form-control" type="text" name='dg' placeholder="Enter dg" onChange={handleChange} value={values.dg} />
    //                 <Input className="form-control" type="text" name='dgClass' placeholder="Enter dg class" onChange={handleChange} value={values.dgClass} />
    //                 <Button variant='contained' type='submit' sx={{ backgroundColor: "#8385f5" }}>Save</Button>
    //             </Form>
    //         </ >
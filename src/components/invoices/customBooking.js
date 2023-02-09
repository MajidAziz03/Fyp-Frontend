import { Fragment } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import { useFormik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";


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


const CustomBooking = () => {
    const { values, handleChange, handleSubmit, handleBlur } = useFormik({
        initialValues: initialValues,
        onSubmit: async (values) => {
            try {
                const res = await axios.post('http://localhost:4000/invoices/booking', values)
                toast.success("Saved Successfully ")
                return {
                    status: true
                }
            }
            catch (error) {
                toast.error(error.response.data.message)
            }

        }
    })

    return (
        <Fragment>
            <Tabs>
                <TabList className="nav nav-tabs tab-coupon">
                    <Tab className="nav-link">Booking</Tab>
                </TabList>
                <TabPanel>
                    <Form onSubmit={handleSubmit}>
                        <h3 style={{ marginBottom: "32px" }}>Booking Details</h3>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> Booking
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input sx={{ marginBottom: "12px" }} type="text" className="form-control" name='booking' onChange={handleChange} value={values.booking} />
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> bookingBy
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='bookingBy' onChange={handleChange} value={values.bookingBy} />
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> Status Of Booking
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='statusOfBooking' onChange={handleChange} value={values.statusOfBooking} />
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> Approved By
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='approvedBy' onChange={handleChange} value={values.approvedBy} />
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> Ref
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='ref' onChange={handleChange} value={values.ref} />
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> Agent Pol
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='agentPol' onChange={handleChange} value={values.agentPol} />
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> contact Person
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='contactPerson' onChange={handleChange} value={values.contactPerson} />
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> Quantity
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='quantity' onChange={handleChange} value={values.quantity} />
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> Container Size
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='containerSize' onChange={handleChange} value={values.containerSize} />
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> Container Type
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='containerType' onChange={handleChange} value={values.containerType} />
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> Port Of Loading
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='portOfLoading' onChange={handleChange} value={values.portOfLoading} />
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> Port Of Final
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='portOfFinal' onChange={handleChange} value={values.portOfFinal} />
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> Commodity
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='commodity' onChange={handleChange} value={values.commodity} />
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> DG
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='dg' onChange={handleChange} value={values.dg} />
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> DGClass
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='dgClass' onChange={handleChange} value={values.dgClass} />
                            </div>
                        </FormGroup>
                        <div className="pull-right">
                            <Button color="primary" type='submit'>
                                Save
                            </Button>
                        </div>
                    </Form>
                </TabPanel>
            </Tabs>
        </Fragment>
    );
};

export default CustomBooking;

import { Fragment } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import { useFormik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import './invoice.css'
import * as Yup from 'yup';


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

const validationBooking = Yup.object({
    booking: Yup.string().required('Booking is required'),
    bookingBy: Yup.string().required('Booking By is required'),
    statusOfBooking: Yup.string().required('Status of Booking is required'),
    approvedBy: Yup.string().required('Approved By is required'),
    ref: Yup.string().required('Reference is required'),
    agentPol: Yup.string().required('Agent POL is required'),
    contactPerson: Yup.string().required('Contact Person is required'),
    quantity: Yup.number().required('Quantity is required'),
    containerSize: Yup.string().required('Container Size is required'),
    containerType: Yup.string().required('Container Type is required'),
    portOfLoading: Yup.string().required('Port Of Loading is required'),
    portOfFinal: Yup.string().required('Port Of Final is required'),
    commodity: Yup.string().required('Commodity is required'),
    dg: Yup.string().required('Dangerous Goods is required'),
    dgClass: Yup.string().required('Dangerous Goods Class is required'),
});

const CustomBooking = () => {
    const { values, handleChange, handleSubmit, handleBlur, errors, touched } = useFormik({
        initialValues: initialValues,
        validationSchema: validationBooking,
        onSubmit: async (values) => {
            try {
                const res = await axios.post('https://fyp-container-server-h26k1dquz-sleepyqadir.vercel.app/invoices/booking', values)
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
                                {errors.booking && touched.booking && (
                                    <div className="error">{errors.booking}</div>
                                )}
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> bookingBy
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='bookingBy' onChange={handleChange} value={values.bookingBy} />
                                {errors.bookingBy && touched.bookingBy && (
                                    <div className="error">{errors.bookingBy}</div>
                                )}
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> Status Of Booking
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="select" name='statusOfBooking' onChange={handleChange} value={values.statusOfBooking} >
                                    <option value="SelectStatus">Select Status</option>
                                    <option value="approved">Approved</option>
                                    <option value="notApproved">Not Approved</option>
                                </Input>
                                {errors.statusOfBooking && touched.statusOfBooking && (
                                    <div className="error">{errors.statusOfBooking}</div>
                                )}
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> Approved By
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='approvedBy' onChange={handleChange} value={values.approvedBy} />
                                {errors.approvedBy && touched.approvedBy && (
                                    <div className="error">{errors.approvedBy}</div>
                                )}
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> Ref
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='ref' onChange={handleChange} value={values.ref} />
                                {errors.ref && touched.ref && (
                                    <div className="error">{errors.ref}</div>
                                )}
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> Agent Pol
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='agentPol' onChange={handleChange} value={values.agentPol} />
                                {errors.agentPol && touched.agentPol && (
                                    <div className="error">{errors.agentPol}</div>
                                )}
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> contact Person
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='contactPerson' onChange={handleChange} value={values.contactPerson} />
                                {errors.contactPerson && touched.contactPerson && (
                                    <div className="error">{errors.contactPerson}</div>
                                )}
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> Quantity
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="number" name='quantity' onChange={handleChange} value={values.quantity} min={0} />
                                {errors.quantity && touched.quantity && (
                                    <div className="error">{errors.quantity}</div>
                                )}
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> Container Size
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='containerSize' onChange={handleChange} value={values.containerSize} />
                                {errors.containerSize && touched.containerSize && (
                                    <div className="error">{errors.containerSize}</div>
                                )}
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> Container Type
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='containerType' onChange={handleChange} value={values.containerType} />
                                {errors.containerType && touched.containerType && (
                                    <div className="error">{errors.containerType}</div>
                                )}
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> Port Of Loading
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="select" name='portOfLoading' onChange={handleChange} value={values.portOfLoading} >
                                    <option value="">Select a port</option>
                                    <option value="Hong Kong">Hong Kong</option>
                                    <option value="Shanghai">Shanghai</option>
                                    <option value="Shenzhen">Shenzhen</option>
                                    <option value="Guangzhou">Guangzhou</option>
                                    <option value="Port Klang">Port Klang</option>
                                    <option value="Jebel Ali">Jebel Ali</option>
                                    <option value="Mina Rashid">Mina Rashid</option>
                                    <option value="Al Hamriya">Al Hamriya</option>
                                    <option value="Penang">Penang</option>
                                    <option value="Tanjong Pelapas">Tanjong Pelapas</option>
                                    <option value="Mumbai">Mumbai</option>
                                    <option value="Kandla">Kandla</option>
                                    <option value="Mangalore">Mangalore</option>
                                    <option value="Chabahar">Chabahar</option>
                                    <option value="Port of Shenghai">Port of Shenghai</option>
                                </Input>
                                {errors.portOfLoading && touched.portOfLoading && (
                                    <div className="error">{errors.portOfLoading}</div>
                                )}
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> Port Of Final
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="select" name='portOfFinal' onChange={handleChange} value={values.portOfFinal} >
                                    <option value="select a port ">Select a port</option>
                                    <option value="Hong Kong">Hong Kong</option>
                                    <option value="Shanghai">Shanghai</option>
                                    <option value="Shenzhen">Shenzhen</option>
                                    <option value="Guangzhou">Guangzhou</option>
                                    <option value="Port Klang">Port Klang</option>
                                    <option value="Jebel Ali">Jebel Ali</option>
                                    <option value="Mina Rashid">Mina Rashid</option>
                                    <option value="Al Hamriya">Al Hamriya</option>
                                    <option value="Penang">Penang</option>
                                    <option value="Tanjong Pelapas">Tanjong Pelapas</option>
                                    <option value="Mumbai">Mumbai</option>
                                    <option value="Kandla">Kandla</option>
                                    <option value="Mangalore">Mangalore</option>
                                    <option value="Chabahar">Chabahar</option>
                                    <option value="Port of Shenghai">Port of Shenghai</option>
                                </Input>
                                {errors.portOfFinal && touched.portOfFinal && (
                                    <div className="error">{errors.portOfFinal}</div>
                                )}
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> Commodity
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='commodity' onChange={handleChange} value={values.commodity} />
                                {errors.commodity && touched.commodity && (
                                    <div className="error">{errors.commodity}</div>
                                )}
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> DG
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="select" name='dg' onChange={handleChange} value={values.dg} >
                                    <option value="Select DG "> Select DG </option>
                                    <option value="DG "> DG</option>
                                    <option value=" Non-DG ">  Non-DG</option>
                                </Input>
                                {errors.dg && touched.dg && (
                                    <div className="error">{errors.dg}</div>
                                )}
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> DGClass
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="select" name='dgClass' onChange={handleChange} value={values.dgClass} >
                                    <option value="Select Class" className="sele">Select Class</option>
                                    <option value="1">1 </option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4 </option>
                                    <option value="5">5 </option>
                                    <option value="6">6 </option>
                                    <option value="7">7 </option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                </Input>
                                {errors.dgClass && touched.dgClass && (
                                    <div className="error">{errors.dgClass}</div>
                                )}
                            </div>
                        </FormGroup>
                        <div className="pull-right" style={{ marginRight: "82px" }}>
                            <Button color="primary" style={{ backgroundColor: "green" }} type='submit'>
                                Save
                            </Button>
                        </div>
                        <div className="pull-right" style={{ marginRight: "5px" }}>
                            <Link to='/invoice'>
                                <Button color="primary" style={{ padding: "8.5px 8px" }}>
                                    Show Bookings
                                </Button>
                            </Link>
                        </div>
                    </Form>
                </TabPanel>
            </Tabs>
        </Fragment>
    );
};

export default CustomBooking;

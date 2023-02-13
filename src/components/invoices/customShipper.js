import { Fragment } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import { useFormik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import './invoice.css'
import * as Yup from 'yup'

const initialValues = {
    booking: '',
    statusOfBooking: '',
    sentToShipperDoc: '',
    statusOfStsDoc: '',
    HaulierRefusal: '',
    agentPol: '',
    contactPerson: '',
    freeDays: '',
    portOfLoading: ''
}


const validationShipper = Yup.object({
    booking: Yup.string().required('Booking is required'),
    statusOfBooking: Yup.string().required('Status of Booking is required'),
    sentToShipperDoc: Yup.string().required('Sent to Shipper Document is required'),
    statusOfStsDoc: Yup.string().required('Status of Sent to Shipper Document is required'),
    HaulierRefusal: Yup.string().required('Haulier Refusal is required'),
    agentPol: Yup.string().required('Agent POL is required'),
    contactPerson: Yup.string().required('Contact Person is required'),
    freeDays: Yup.string().required('Free Days is required'),
    portOfLoading: Yup.string().required('Port of Loading is required')
});

const CustomShipper = () => {
    const { values, handleChange, handleSubmit, handleBlur, errors, touched } = useFormik({
        initialValues: initialValues,
        validationSchema: validationShipper,
        onSubmit: async (values) => {
            try {
                const res = await axios.post('https://fyp-container-server-h26k1dquz-sleepyqadir.vercel.app/invoices/shipper', values)
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
                    <Tab className="nav-link">Sent To Shipper</Tab>
                </TabList>
                <TabPanel>
                    <Form onSubmit={handleSubmit}>
                        <h3 style={{ marginBottom: "32px" }}>Shipper Details</h3>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> Booking
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input sx={{ marginBottom: "12px" }} type="text" className="form-control" name='booking' onChange={handleChange} value={values.booking} />
                                {errors.booking && touched.booking ? <div className="error">{errors.booking}</div> : null}
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> Status Of Booking
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="select" name='statusOfBooking' onChange={handleChange} value={values.statusOfBooking}>

                                    <option value="SelectStatus">Select Status</option>
                                    <option value="approved">Approved</option>
                                    <option value="notApproved">Not Approved</option>
                                </Input>
                                {errors.statusOfBooking && touched.statusOfBooking ? <div className="error">{errors.statusOfBooking}</div> : null}
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> Sent To Shipper Doc
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='sentToShipperDoc' onChange={handleChange} value={values.sentToShipperDoc} />
                                {errors.sentToShipperDoc && touched.sentToShipperDoc ? <div className="error">{errors.sentToShipperDoc}</div> : null}
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> Status Of Sts Doc
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="select" name='statusOfStsDoc' onChange={handleChange} value={values.statusOfStsDoc} >
                                    <option value="Open">Open</option>
                                    <option value="Saved">Saved</option>
                                    <option value="Approved">Approved</option>
                                </Input>
                                {errors.statusOfStsDoc && touched.statusOfStsDoc ? <div className="error">{errors.statusOfStsDoc}</div> : null}
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> Haulier Refusal
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="select" name='HaulierRefusal' onChange={handleChange} value={values.HaulierRefusal} >
                                    <option value="">Select</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </Input>
                                {errors.HaulierRefusal && touched.HaulierRefusal ? <div className="error">{errors.HaulierRefusal}</div> : null}
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> Agent Pol
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='agentPol' onChange={handleChange} value={values.agentPol} />
                                {errors.agentPol && touched.agentPol ? <div className="error">{errors.agentPol}</div> : null}

                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> Contact Person
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='contactPerson' onChange={handleChange} value={values.contactPerson} />
                                {errors.contactPerson && touched.contactPerson ? <div className="error">{errors.contactPerson}</div> : null}
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> Free Days
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='freeDays' onChange={handleChange} value={values.freeDays} />
                                {errors.freeDays && touched.freeDays ? <div className="error">{errors.freeDays}</div> : null}

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
                                {errors.portOfLoading && touched.portOfLoading ? <div className="error">{errors.portOfLoading}</div> : null}
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
        </Fragment >
    );
};

export default CustomShipper;

import { Fragment } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import { useFormik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";


const initialValues = {
    booking: '',
    statusOfBooking: '',
    sentToShipperDoc: '',
    statusOfStsDoc: '',
    HaulierRefusal: '',
    agentPol: '',
    contactPerson: '',
    freeDays: '',
    postOfLoading: ''
}

const CustomShipper = () => {
    const { values, handleChange, handleSubmit, handleBlur } = useFormik({
        initialValues: initialValues,
        onSubmit: async (values) => {
            try {
                const res = await axios.post('http://localhost:4000/invoices/shipper', values)
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
                                <span style={{ color: "red" }}>*</span> Sent To Shipper Doc
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='sentToShipperDoc' onChange={handleChange} value={values.sentToShipperDoc} />
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> Status Of Sts Doc
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='statusOfStsDoc' onChange={handleChange} value={values.statusOfStsDoc} />
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> Haulier Refusal
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='HaulierRefusal' onChange={handleChange} value={values.HaulierRefusal} />
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
                                <span style={{ color: "red" }}>*</span> Contact Person
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='contactPerson' onChange={handleChange} value={values.contactPerson} />
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> Free Days
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='freeDays' onChange={handleChange} value={values.freeDays} />
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> Post Of Loading
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='postOfLoading' onChange={handleChange} value={values.postOfLoading} />
                            </div>
                        </FormGroup>
                        <div className="pull-right">
                            <Button color="primary" type='submit'>
                                Save
                            </Button>
                        </div>
                        <div className="pull-right">
                            <Button color="primary"  >
                                Cancel
                            </Button>
                        </div>
                    </Form>
                </TabPanel>
            </Tabs>
        </Fragment>
    );
};

export default CustomShipper;

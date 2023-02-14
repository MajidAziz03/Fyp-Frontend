import { Fragment } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import { useFormik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import './invoice.css'
import * as yup from 'yup'


const initialValues = {
    repairType: "",
    billNo: '',
    containerNo: '',
    haulierRefusal: '',
    jobA: '',
    jobB: '',
    jobC: '',
    repairApprovalEsl: '',
    jobANetAmount: '',
    jobATaxAmount: '',
    jobAGrossAmount: '',
    jobBNetAmount: '',
    jobBTaxAmount: '',
    jobBGrossAmount: '',
    taxAmount: '',
    totalAmount: '',
    damagePicturesUpload: "",
    postRepairPicturesUpload: "",
};


const validationRepair = yup.object({
    repairType: yup.string().required('Repair type is required'),
    billNo: yup.string().required('Bill number is required'),
    containerNo: yup.string().required('Container number is required'),
    // haulierRefusal: yup.string().required('Haulier refusal is required'),
    jobA: yup.string().required('Job A is required'),
    jobB: yup.string().required('Job B is required'),
    jobC: yup.string().required('Job C is required'),
    repairApprovalEsl: yup.string().required('Repair Approval Esl is required'),
    jobANetAmount: yup.number().required('Job A Net Amount is required'),
    jobATaxAmount: yup.number().required('Job A Tax Amount is required'),
    jobAGrossAmount: yup.number().required('Job A Gross Amount is required'),
    jobBNetAmount: yup.number().required('Job B Net Amount is required'),
    jobBTaxAmount: yup.number().required('Job B Tax Amount is required'),
    jobBGrossAmount: yup.number().required('Job B Gross Amount is required'),
    taxAmount: yup.number().required('Tax amount is required'),
    totalAmount: yup.number().required('Total amount is required'),
    damagePicturesUpload: yup.mixed().required('Damage pictures are required'),
    postRepairPicturesUpload: yup.mixed().required('Post repair pictures are required'),
})


const CustomRepair = () => {
    const { values, handleChange, handleSubmit, handleBlur, errors, touched } = useFormik({
        initialValues: initialValues,
        validationSchema: validationRepair,
        onSubmit: async (values) => {
            try {
                const res = await axios.post('http://localhost:4000/invoices/repair', values)
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
                    <Tab className="nav-link">Repair</Tab>
                </TabList>
                <TabPanel>
                    <Form onSubmit={handleSubmit}>
                        <h3 style={{ marginBottom: "32px" }}>Repair Details</h3>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> Repair Type
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input sx={{ marginBottom: "12px" }} type="select" className="form-control" name='repairType' onChange={handleChange} value={values.repairType} >
                                    <option value="SelectType">Select Type </option>
                                    <option value="Normal">Normal </option>
                                    <option value="Haulier">Haulier</option>
                                </Input>
                                {errors.repairType && <div className="error">{errors.repairType}</div>}
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> Bill No
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='billNo' onChange={handleChange} value={values.billNo} />
                                {errors.billNo && <div className="error">{errors.billNo}</div>}
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> Container No
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='containerNo' onChange={handleChange} value={values.containerNo} />
                                {errors.containerNo && <div className="error">{errors.containerNo}</div>}
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> Haulier Refusal
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="select" name='haulierRefusal' onChange={handleChange} value={values.haulierRefusal} >
                                    <option value="">Select</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </Input>
                                {errors.haulierRefusal && <div className="error">{errors.haulierRefusal}</div>}
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> Job A
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input
                                    className="form-control"
                                    type="text"
                                    name='jobA'
                                    value={values.jobA}
                                    onChange={handleChange}
                                />
                                {errors.jobA && <div className="error">{errors.jobA}</div>}
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> Job B
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input
                                    className="form-control"
                                    type="text"
                                    name='jobB'
                                    value={values.jobB}
                                    onChange={handleChange}
                                />
                                {errors.jobB && <div className="error">{errors.jobB}</div>}

                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> Job C
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='jobC' onChange={handleChange} value={values.jobC} />
                                {errors.jobC && <div className="error">{errors.jobC}</div>}

                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> Repair Approval Esl
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='repairApprovalEsl' onChange={handleChange} value={values.repairApprovalEsl} />
                                {errors.repairApprovalEsl && <div className="error">{errors.repairApprovalEsl}</div>}

                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> JobA Net Amount
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='jobANetAmount' onChange={handleChange} value={values.jobANetAmount} />
                                {errors.jobANetAmount && <div className="error">{errors.jobANetAmount}</div>}

                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> JobA Tax Amount
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='jobATaxAmount' onChange={handleChange} value={values.jobATaxAmount} />
                                {errors.jobATaxAmount && <div className="error">{errors.jobATaxAmount}</div>}

                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> JobA Gross Amount
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='jobAGrossAmount' onChange={handleChange} value={values.jobAGrossAmount} />
                                {errors.jobAGrossAmount && <div className="error">{errors.jobAGrossAmount}</div>}

                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> JobB Net Amount
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='jobBNetAmount' onChange={handleChange} value={values.jobBNetAmount} />
                                {errors.jobBNetAmount && <div className="error">{errors.jobBNetAmount}</div>}

                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> JobB Tax Amount
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='jobBTaxAmount' onChange={handleChange} value={values.jobBTaxAmount} />
                                {errors.jobBTaxAmount && <div className="error">{errors.jobBTaxAmount}</div>}

                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> JobB Gross Amount
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='jobBGrossAmount' onChange={handleChange} value={values.jobBGrossAmount} />
                                {errors.jobBGrossAmount && <div className="error">{errors.jobBGrossAmount}</div>}

                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> Tax Amount
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='taxAmount' onChange={handleChange} value={values.taxAmount} />
                                {errors.taxAmount && <div className="error">{errors.taxAmount}</div>}

                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> Total Amount
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='totalAmount' onChange={handleChange} value={values.totalAmount} />
                                {errors.totalAmount && <div className="error">{errors.totalAmount}</div>}
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> Damage Pictures Upload
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='damagePicturesUpload' onChange={handleChange} value={values.damagePicturesUpload} />
                                {errors.DamagePicturesUpload && <div className="error">{errors.DamagePicturesUpload}</div>}
                                <small className="form-text text-muted">Please write  in string or link format only.</small>
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> Post Repair Pictures Upload
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='postRepairPicturesUpload' onChange={handleChange} value={values.postRepairPicturesUpload} />
                                {errors.postRepairPicturesUpload && <div className="error">{errors.postRepairPicturesUpload}</div>}

                                <small className="form-text text-muted">Please write in string or link format only.</small>
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

export default CustomRepair;

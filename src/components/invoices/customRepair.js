import { Fragment } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import { useFormik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";


const initialValues = {
    repairType: "",
    billNo: '',
    containerNo: '',
    haulierRefusal: '',
    repairEstimate: {
        jobA: '',
        jobB: '',
        jobC: '',
    },
    repairEstimateAttachment: {
        RepairApprovalEsl: '',
        jobANetAmount: '',
        jobATaxAmount: '',
        jobAGrossAmount: '',
        jobBNetAmount: '',
        jobBTaxAmount: '',
        jobBGrossAmount: '',
    },
    taxAmount: '',
    totalAmount: '',
    repairApprovalAttachment: {
        DamagePicturesUpload: "",
        postRepairPicturesUpload: "",
    },
};


const CustomRepair = () => {
    const { values, handleChange, handleSubmit, handleBlur } = useFormik({
        initialValues: initialValues,
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
                                <Input sx={{ marginBottom: "12px" }} type="text" className="form-control" name='repairType' onChange={handleChange} value={values.repairType} />
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> Bill No
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='billNo' onChange={handleChange} value={values.billNo} />
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> Container No
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='containerNo' onChange={handleChange} value={values.containerNo} />
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> haulierRefusal
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='haulierRefusal' onChange={handleChange} value={values.haulierRefusal} />
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> Job A
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='jobA' onChange={handleChange} value={values.repairEstimate.jobA} />
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> Job B
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='jobB' onChange={handleChange} value={values.repairEstimate.jobB} />
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> Job C
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='jobC' onChange={handleChange} value={values.repairEstimate.jobC} />
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> Repair Approval Esl
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='RepairApprovalEsl' onChange={handleChange} value={values.repairEstimateAttachment.RepairApprovalEsl} />
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> JobA Net Amount
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='jobANetAmount' onChange={handleChange} value={values.repairEstimateAttachment.jobANetAmount} />
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> JobA Tax Amount
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='jobATaxAmount' onChange={handleChange} value={values.repairEstimateAttachment.jobATaxAmount} />
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> JobA Gross Amount
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='jobAGrossAmount' onChange={handleChange} value={values.repairEstimateAttachment.jobAGrossAmount} />
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> JobB Net Amount
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='jobBNetAmount' onChange={handleChange} value={values.repairEstimateAttachment.jobBNetAmount} />
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> JobB Tax Amount
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='jobBTaxAmount' onChange={handleChange} value={values.repairEstimateAttachment.jobBTaxAmount} />
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> JobB Gross Amount
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='jobBGrossAmount' onChange={handleChange} value={values.repairEstimateAttachment.jobBGrossAmount} />
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> Tax Amount
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='taxAmount' onChange={handleChange} value={values.taxAmount} />
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> Total Amount
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='totalAmount' onChange={handleChange} value={values.totalAmount} />
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> Damage Pictures Upload
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='DamagePicturesUpload' onChange={handleChange} value={values.repairApprovalAttachment.DamagePicturesUpload} />
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-xl-3 col-md-4">
                                <span style={{ color: "red" }}>*</span> Post Repair Pictures Upload
                            </Label>
                            <div className="col-xl-8 col-md-7">
                                <Input className="form-control" type="text" name='postRepairPicturesUpload' onChange={handleChange} value={values.repairApprovalAttachment.postRepairPicturesUpload} />
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

export default CustomRepair;

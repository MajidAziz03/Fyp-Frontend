import React, { Fragment, useState } from "react";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { addClient, addContainer } from "../../utils";
import { toast } from "react-toastify";
import axios from "axios";
import { useEffect } from "react";
import { useFormik } from "formik";



const initialValues = {
	containerId: '',
	clientId: ''
}


const CustomContainer = () => {


	const { values, handleChange, handleSubmit } = useFormik({
		initialValues: initialValues,
		onSubmit: async (values) => {
			try {
				const res = await axios.post('https://fyp-container-server.vercel.app/containers', values)
				toast.success("Container Added Successfully")
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
					<Tab className="nav-link">Container</Tab>
				</TabList>
				<TabPanel>
					{/* <Form className="needs-validation user-add" noValidate=""> */}
					<Form onSubmit={handleSubmit}>
						<h4>Container Details</h4>
						<FormGroup className="row">
							<Label className="col-xl-3 col-md-4">
								<span>*</span> ContainerID
							</Label>
							<div className="col-xl-8 col-md-7">
								<Input
									className="form-control"
									id="validationCustom0"
									name="containerId"
									value={values.containerId}
									// onChange={(e) => setContainerId(e.target.value)}
									onChange={handleChange}
									type="text"
									required=""
								/>
							</div>
						</FormGroup>
						<FormGroup className="row">
							<Label className="col-xl-3 col-md-4">
								<span>*</span> Client ID
							</Label>
							<div className="col-xl-8 col-md-7">
								<Input
									className="form-control"
									id="validationCustom1"
									name="clientId"
									value={values.clientId}
									// onChange={(e) => setClientId(e.target.value)}
									onChange={handleChange}
									type="text"
									required=""
								/>
							</div>
						</FormGroup>
						<Button type="submit" color="primary" >
							Save
						</Button>
					</Form>
				</TabPanel>

			</Tabs>
			<div className="pull-right">
				{/* <Button type="button" color="primary" onClick={onAddClient}>
					Save
				</Button> */}
			</div>
		</Fragment>
	);
};

export default CustomContainer;

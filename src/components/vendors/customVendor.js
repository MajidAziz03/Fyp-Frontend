import React, { Fragment, useState } from "react";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { addClient, addContainer } from "../../utils";
import { toast } from "react-toastify";

const CustomContainer = () => {

	const [clientId, setClientId] = useState("")
	const [containerId, setContainerId] = useState("")

	const onAddClient = () => {
		try {
			const adde = addContainer({
				clientId: clientId,
				containerId: containerId,
			})
		} catch (error) {
			console.log(error)
		}

	}
	return (
		<Fragment>
			<Tabs>
				<TabList className="nav nav-tabs tab-coupon">
					<Tab className="nav-link">Container</Tab>
				</TabList>
				<TabPanel>
					<Form className="needs-validation user-add" noValidate="">
						<h4>Container Details</h4>
						<FormGroup className="row">
							<Label className="col-xl-3 col-md-4">
								<span>*</span> ContainerID
							</Label>
							<div className="col-xl-8 col-md-7">
								<Input
									className="form-control"
									id="validationCustom0"
									onChange={(e) => setContainerId(e.target.value)}
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
									onChange={(e) => setClientId(e.target.value)}
									type="text"
									required=""
								/>
							</div>
						</FormGroup>
						{/* <FormGroup className="row">
							<Label className="col-xl-3 col-md-4">
								<span>*</span> Client Email
							</Label>
							<div className="col-xl-8 col-md-7">
								<Input
									className="form-control"
									onChange={(e) => setEmail(e.target.value)}
									id="validationCustom3"
									type="number"
									required=""
								/>
							</div>
						</FormGroup> */}
					</Form>
				</TabPanel>

			</Tabs>
			<div className="pull-right">
				{/* <Button type="button" color="primary" onClick={() => { onAddClient() }}> */}
				<Button type="button" color="primary" onClick={onAddClient}>
					Save
				</Button>
			</div>
		</Fragment>
	);
};

export default CustomContainer;

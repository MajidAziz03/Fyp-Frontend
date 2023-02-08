import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../common/breadcrumb";
import Datatable from "../common/datatable";
import { Button, Card, CardBody, Form, CardHeader, Container, ModalFooter, FormGroup, Input, Label, Modal, ModalBody, ModalHeader } from "reactstrap";
import { getAllClients, updateClient } from "../../utils";
import { toast } from "react-toastify";
import SearchHeader from "../common/header_components/searchHeader";
import { TailSpin } from "react-loader-spinner";


const List_user = () => {
	const [isLoading, setIsLoading] = useState(false)

	const Updated = () => toast("Updated Successfully Please Refresh");

	const [data, setData] = useState([])
	const [searchValue, setSearchValue] = useState("")
	const [filteredData, setFilteredData] = useState([])
	const [updatedName, setUpdatedName] = useState("")
	const [updatedEmail, setUpdatedEmail] = useState("")
	const [currentClient, setCurrentClient] = useState({})
	const [open, setOpen] = useState(false)


	const onOpenModal = () => {
		setOpen(true);
	};

	const onCloseModal = () => {
		setOpen(false);
	};


	const update = async () => {
		await updateClient({
			id: currentClient.id,
			name: updatedName,
			email: updatedEmail,
		})
		onCloseModal("VaryingMdo")
		const data = await getAllClients()
		setData(data.reverse().map(clientInformation => {
			return {
				...clientInformation, Edit: <button
					className="btn btn-danger btn-sm btn-delete mb-0 b-r-4"
					onClick={(e) => {
						setUpdatedName("")
						setUpdatedEmail("")
						setCurrentClient(clientInformation)
						setOpen(true)
					}}
				>
					Edit
				</button>
			}
		}));
	}

	const handleSearch = (e) => {
		setSearchValue(e.target.value)
		const filteredData = data.filter(d => d.name.toLowerCase().includes(e.target.value.toLowerCase()))
		setFilteredData(filteredData)
	}

	useEffect(() => {
		(async () => {
			setIsLoading(true)
			const data = await getAllClients()
			setIsLoading(false)
			console.log(data)
			setData(data.reverse().map(clientInformation => {
				return {
					...clientInformation, Edit: <button
						className="btn btn-danger btn-sm btn-delete mb-0 b-r-4"
						onClick={(e) => {
							// setUpdateId("")
							setCurrentClient(clientInformation)
							setOpen(true)
						}}
					>
						Edit
					</button>
				}
			}));

		})()
	}, [])


	return (
		<Fragment>
			<Breadcrumb title="Clients List" parent="Clients" />
			<Container fluid={true}>
				<Card>
					<CardHeader>
						<h5>Client Details</h5>
						<div style={{ display: "flex", width: "50%" }}>
							<Input type="text" style={{ flex: "3", marginTop: "12px" }} placeholder="Search Client" />
							<Button onClick={handleSearch} style={{ flex: "1", padding: "1px", height: "48px", marginLeft: "3px", marginTop: "12px" }}> Search </Button>
						</div>
					</CardHeader>
					{
						isLoading
						&&
						<div style={
							{
								display: "flex", alignItems: "center", justifyContent: "center", position: "relative", top: "102px", bottom: " 0", margin: "auto", zIndex: "100"
							}
						}>
							<TailSpin color="green" height={"80px"} />
						</div>
					}
					<CardBody>
						<div className="btn-popup pull-right">
							<Link to="/clients/create-clients" className="btn btn-secondary">
								Add Client
							</Link>
						</div>
						<div className="clearfix"></div>
						<div
							id="batchDelete"
							className="category-table user-list order-table coupon-list-delete"
						>
							{data.length > 0 && <Datatable
								multiSelectOption={true}
								myData={data}
								pageSize={10}
								pagination={true}
								class="-striped -highlight"
							/>}
						</div>
					</CardBody>
				</Card>

				<div>
					<span>
						<i
							onClick={onOpenModal}
							className="fa fa-pencil"
							style={{
								width: 35,
								fontSize: 20,
								padding: 11,
								color: "rgb(40, 167, 69)",
							}}
						></i>
						<Modal
							isOpen={open}
							toggle={onCloseModal}
							style={{ overlay: { opacity: 0.1 } }}
						>
							<ModalHeader toggle={onCloseModal}>
								<h5 className="modal-title f-w-600" id="exampleModalLabel2">
									Edit Container Id
								</h5>
							</ModalHeader>
							<ModalBody>
								<Form>
									<FormGroup>
										<Label htmlFor="recipient-name" className="col-form-label">
											Client Id:
										</Label>
										<Input type="text" className="form-control" value={currentClient.id} />
									</FormGroup>
									<FormGroup>
										<Label htmlFor="message-text" className="col-form-label">
											Updated Name:
										</Label>
										<Input type="text" className="form-control" onChange={(e) => {
											setUpdatedName(e.target.value);
										}} />
									</FormGroup>
									<FormGroup>
										<Label htmlFor="message-text" className="col-form-label">
											Updated Email:
										</Label>
										<Input type="text" className="form-control" onChange={(e) => {
											setUpdatedEmail(e.target.value);
										}} />
									</FormGroup>
								</Form>
							</ModalBody>
							<ModalFooter>
								<Button
									type="button"
									color="primary"
									onClick={() => { update() }}
								>
									Update
								</Button>
								<Button
									type="button"
									color="secondary"
									onClick={() => onCloseModal("VaryingMdo")}
								>
									Close
								</Button>
							</ModalFooter>
						</Modal>
					</span>
				</div>
			</Container>
		</Fragment >
	);
};

export default List_user;






// import React, { Fragment, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Breadcrumb from "../common/breadcrumb";
// import Datatable from "../common/datatable";
// import { Button, Card, CardBody, Form, CardHeader, Container, ModalFooter, FormGroup, Input, Label, Modal, ModalBody, ModalHeader } from "reactstrap";
// import { getAllClients, updateClient } from "../../utils";
// import { toast } from "react-toastify";
// import SearchHeader from "../common/header_components/searchHeader";
// import { TailSpin } from "react-loader-spinner";




// const List_user = () => {
// 	const [isLoading, setIsLoading] = useState(false)

// 	const Updated = () => toast("Updated Successfully Please Refresh");

// 	const [data, setData] = useState([])
// 	// const [updatedId, setUpdateId] = useState("")
// 	const [updatedName, setUpdatedName] = useState("")
// 	const [updatedEmail, setUpdatedEmail] = useState("")
// 	const [currentClient, setCurrentClient] = useState({})
// 	const [open, setOpen] = useState(false)


// 	const onOpenModal = () => {
// 		setOpen(true);
// 	};

// 	const onCloseModal = () => {
// 		setOpen(false);
// 	};


// 	const update = async () => {
// 		await updateClient({
// 			id: currentClient.id,
// 			// updatedId: updatedId,
// 			name: updatedName,
// 			email: updatedEmail,
// 		})
// 		onCloseModal("VaryingMdo")
// 		const data = await getAllClients()
// 		setData(data.reverse().map(clientInformation => {
// 			return {
// 				...clientInformation, Edit: <button
// 					className="btn btn-danger btn-sm btn-delete mb-0 b-r-4"
// 					onClick={(e) => {
// 						// setUpdateId("")
// 						setUpdatedName("")
// 						setUpdatedEmail("")
// 						setCurrentClient(clientInformation)
// 						setOpen(true)
// 					}}
// 				>
// 					Edit
// 				</button>
// 			}
// 		}));
// 	}
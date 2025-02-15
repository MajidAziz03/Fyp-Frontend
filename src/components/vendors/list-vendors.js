// import React, { Fragment, useEffect, useState } from "react";
// import Breadcrumb from "../common/breadcrumb";
// import data from "../../assets/data/listVendor";
// import Datatable from "../common/datatable";
// import { Button, Card, CardBody, Form, CardHeader, Container, ModalFooter, FormGroup, Input, Label, Modal, ModalBody, ModalHeader } from "reactstrap";
// import { getAllClients, getAllContainers, updateContainer } from "../../utils";
// import { toast } from "react-toastify";
// import { TailSpin } from "react-loader-spinner";

// const List_vendors = () => {
// 	const [isLoading, setIsLoading] = useState(false)
// 	const [searchTerm, setSearchTerm] = useState("");
// 	const [filteredValue, setFilteredValue] = useState([]);

// 	const Updated = () => toast("Updated Successfully Please Refresh");

// 	const [data, setData] = useState([])
// 	const [open, setOpen] = useState(false)
// 	const [updatedId, setUpdateId] = useState("")
// 	const [currentContainer, setCurrentContainer] = useState({})


// 	const onOpenModal = () => {
// 		setOpen(true);
// 	};

// 	const onCloseModal = () => {
// 		setOpen(false);
// 	};

// 	const update = async () => {
// 		await updateContainer({
// 			id: currentContainer.Container,
// 			updatedId: updatedId
// 		})
// 		onCloseModal("VaryingMdo")
// 		Updated()
// 		const data = await getAllContainers()
// 		setData(data.reverse().map(clientInformation => {
// 			return {
// 				...clientInformation, Edit: <button
// 					className="btn btn-danger btn-sm btn-delete mb-0 b-r-4"
// 					onClick={(e) => {
// 						setUpdateId("")
// 						setCurrentContainer(clientInformation)
// 						setOpen(true)
// 					}}
// 				>
// 					Edit
// 				</button>
// 			}
// 		}));
// 	}



// 	useEffect(() => {
// 		(async () => {
// 			setIsLoading(true)
// 			const data = await getAllContainers()
// 			setIsLoading(false)
// 			setData(data.reverse().map(clientInformation => {
// 				return {
// 					...clientInformation, Edit: <button
// 						className="btn btn-danger btn-sm btn-delete mb-0 b-r-4"
// 						onClick={(e) => {
// 							setUpdateId("")
// 							setCurrentContainer(clientInformation)
// 							setOpen(true)
// 						}}
// 					>
// 						Edit
// 					</button>
// 				}
// 			}));
// 		})()
// 	}, [])


// 	const handleSearch = (e) => {
// 		setSearchTerm(e.target.value)
// 		if (searchTerm) {
// 			const res = data.filter(item => item.Container === searchTerm)
// 			if (res) {
// 				setFilteredValue(res)
// 				console.log(filteredValue)
// 			}
// 		}
// 	}



// 	return (
// 		<Fragment>
// 			<Breadcrumb title="Container List" parent="Containers" />
// 			<Container fluid={true}>
// 				<Card>
// 					<CardHeader>
// 						<h5>Containers Details</h5>
// 						<div style={{ display: "flex", width: "50%" }}>
// 							<Input
// 								type="text"
// 								style={{ flex: "3", marginTop: "12px", height: "40px" }}
// 								placeholder="Search Container"
// 								onChange={handleSearch}

// 							/>
// 							{/* <Button
// 								style={{ flex: "1", padding: "1px", height: "40px", marginLeft: "3px", marginTop: "12px" }}
// 								onClick={handleSearch}
// 							> Search </Button> */}
// 						</div>
// 					</CardHeader>
// 					{
// 						isLoading
// 						&&
// 						<div style={
// 							{
// 								display: "flex", alignItems: "center", justifyContent: "center", position: "relative", top: "102px", bottom: " 0", margin: "auto", zIndex: "100"
// 							}
// 						}>
// 							<TailSpin color="green" height={"80px"} />
// 						</div>
// 					}
// 					<CardBody>
// 						<div className="clearfix"></div>
// 						<div
// 							id="batchDelete"
// 							className="category-table user-list order-table coupon-list-delete"
// 						>
// 							{data.length > 0 && <Datatable
// 								multiSelectOption={true}
// 								myData={data}
// 								pageSize={10}
// 								pagination={true}
// 								class="-striped -highlight"
// 							/>}
// 						</div>
// 						<div>
// 							<span>
// 								<i
// 									onClick={onOpenModal}
// 									className="fa fa-pencil"
// 									style={{
// 										width: 35,
// 										fontSize: 20,
// 										padding: 11,
// 										color: "rgb(40, 167, 69)",
// 									}}
// 								></i>
// 								<Modal
// 									isOpen={open}
// 									toggle={onCloseModal}
// 									style={{ overlay: { opacity: 0.1 } }}
// 								>
// 									<ModalHeader toggle={onCloseModal}>
// 										<h5 className="modal-title f-w-600" id="exampleModalLabel2">
// 											Edit Container Id
// 										</h5>
// 									</ModalHeader>
// 									<ModalBody>
// 										<Form>
// 											<FormGroup>
// 												<Label htmlFor="recipient-name" className="col-form-label">
// 													Client Id:
// 												</Label>
// 												<Input type="text" className="form-control" value={currentContainer.Client} />
// 											</FormGroup>
// 											<FormGroup>
// 												<Label htmlFor="message-text" className="col-form-label">
// 													Container Id:
// 												</Label>
// 												<Input type="text" className="form-control" onChange={(e) => {
// 													setUpdateId(e.target.value);
// 												}} />
// 											</FormGroup>
// 										</Form>
// 									</ModalBody>
// 									<ModalFooter>
// 										<Button
// 											type="button"
// 											color="primary"
// 											onClick={() => { update() }}
// 										>
// 											Update
// 										</Button>
// 										<Button
// 											type="button"
// 											color="secondary"
// 											onClick={() => onCloseModal("VaryingMdo")}
// 										>
// 											Close
// 										</Button>
// 									</ModalFooter>
// 								</Modal>
// 							</span>
// 						</div>

// 					</CardBody>
// 				</Card>
// 			</Container>
// 		</Fragment >
// 	);
// };

// export default List_vendors;

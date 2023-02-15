import { Close } from '@mui/icons-material'
import { Button } from '@mui/material'
import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Card, CardBody, CardFooter, CardHeader, CardText, CardTitle, Container, Form, FormGroup, FormText, Input, Label } from 'reactstrap'
import './tabl.css'



const initialValues = {
    containerId: "",
    clientId: "",
}



const ContainerEdit = () => {
    const history = useNavigate()
    const location = useLocation()
    console.log("id:", location.state.here)


    const { values, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        onSubmit: async (values) => {
            try {
                const res = await axios.get(`https://fyp-container-server.vercel.app/containers/${location.state.here}`)
                const updtae = await axios.put(`https://fyp-container-server.vercel.app/containers/${res.data._id}`, values)
                if (updtae) {
                    history('/containers/list_containers')
                    toast.success("Updated Successfully")
                }
            }
            catch (error) {
                toast.error(error.response.data.message)
            }
        }
    })





    return (
        <>
            <Container style={{ width: "100%", height: "90vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Card className="my-2" style={{
                    width: "40%",
                    height: "54vh",
                    padding: "22px",
                    boxShadow: "-6px -2px 9px 1px rgba(194,194,194,0.89),- 6px -2px 9px 1px rgba(194,194,194,0.89)"
                }}>
                    <CardHeader>
                        <h3>
                            Edit Details
                        </h3>
                    </CardHeader>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="exampleEmail">
                                ContainerId
                            </Label>
                            <Input
                                id="exampleEmail"
                                name="containerId"
                                value={values.containerId}
                                onChange={handleChange}
                                type="text"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">
                                ClientId <span style={{ color: "red" }}>*</span>
                            </Label>
                            <Input
                                id="exampleEmail"
                                name="containerId"
                                type="text"
                                value={values.clientId}
                                onChange={handleChange}
                            />
                        </FormGroup>
                        <Button
                            type='submit'
                            variant='contained'
                        >
                            Update
                        </Button>
                        <Link className='deco' to='/clients/list-clients'>
                            <Button
                                startIcon={<Close fontSize='small' />}
                                variant='contained'
                                sx={{ backgroundColor: "#d62828", margin: "12px", textDecoration: "none", ":hover": { backgroundColor: "#d62828" } }}
                            >
                                Cancel
                            </Button>
                        </Link>
                    </Form>
                </Card>
            </Container>
        </>
    )
}

export default ContainerEdit;
import { Close } from '@mui/icons-material'
import { Button } from '@mui/material'
import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Card, CardBody, CardFooter, CardHeader, CardText, CardTitle, Container, Form, FormGroup, FormText, Input, Label } from 'reactstrap'
import './tabl.css'



const initialValues = {
    name: "",
    email: "",
}



const EditComp2 = ({ id }) => {
    console.log("id :", id)
    console.log("id :", id)
    console.log("id :", id)
    console.log("id :", id)
    const history = useNavigate()

    const { values, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        onSubmit: async (values) => {
            try {
                const res = await axios.get(`http://localhost:4000/clients/${id}`)
                const updtae = await axios.put(`http://localhost:4000/clients/${res.data._id}`, values)
                if (updtae) {
                    history('/clients/list-clients')
                    toast.success("Updated Successfully")
                }
            }
            catch (error) {
                toast.error(error.response.data.message)
            }
        }
    })


    // const handleUpdate = async () => {
    //     // try {
    //     const res = await axios.get(`http://localhost:4000/clients/${id}`)
    //     //     if (res) {
    //     //         toast.success("Updated Successfully")
    //     //     }
    //     // } catch (error) {
    //     //     toast.error(error.response.data.message)
    //     // }
    //     console.log(res)
    // }



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
                                Name
                            </Label>
                            <Input
                                id="exampleEmail"
                                name="name"
                                onChange={handleChange}
                                value={values.name}
                                type="text"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">
                                Email <span style={{ color: "red" }}>*</span>
                            </Label>
                            <Input
                                id="exampleEmail"
                                name="email"
                                type="email"
                                value={values.email}
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

export default EditComp2;
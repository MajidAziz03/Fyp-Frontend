import { Close } from '@mui/icons-material'
import { Button } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Card, CardBody, CardFooter, CardHeader, CardText, CardTitle, Container, Form, FormGroup, FormText, Input, Label } from 'reactstrap'
import './tabl.css'


const UpdateCard = () => {

    


    const handleUpdate = async (id) => {
        try {
            const res = await axios.get(`https://fyp-container-server.vercel.app/clients/${id}`)
            if (res) {
                const up = await axios.put(`https://fyp-container-server.vercel.app/clients/${res.data._id}`)
                toast.success("Updated Successfully")
            }
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
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
                    <Form>
                        {

                        }
                        <FormGroup>
                            <Label for="exampleEmail">
                                Client Id <span style={{ color: "red" }}>*</span>
                            </Label>
                            <Input
                                id="exampleEmail"
                                name="id"
                                type="text"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">
                                Name
                            </Label>
                            <Input
                                id="exampleEmail"
                                name="name"
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
                            />
                        </FormGroup>
                        <Button
                            type='submit'
                            variant='contained'
                            onClick={handleUpdate}
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

export default UpdateCard
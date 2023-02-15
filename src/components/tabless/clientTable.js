import { Button } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { Fragment } from 'react'
import { useState } from 'react'
import { Pagination, Table } from 'react-bootstrap'
import { TailSpin } from 'react-loader-spinner'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Card, CardBody, CardHeader, CardText, CardTitle, Container, Input, PaginationItem, PaginationLink } from 'reactstrap'
import Breadcrumb from '../common/breadcrumb'
import EditComp2 from './clientEdit'
import './tabl.css'



const ClientTable = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredValue, setFilteredValue] = useState([]);
    const [edit, setEdit] = useState(false);
    const [type, setType] = useState('btn');


    const getClients = async () => {
        try {
            const res = await axios.get('https://fyp-container-server.vercel.app/clients/findAll')
            setData(res.data)
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    useEffect(() => {
        getClients()
    }, [])


    const handleDelete = async (id) => {
        try {
            const response = await axios.get(`https://fyp-container-server.vercel.app/clients/${id}`)
            setIsLoading(true)
            const del = await axios.delete(`https://fyp-container-server.vercel.app/clients/${response.data._id}`)
            setIsLoading(false)
            window.location.reload()
            toast.success("Deleted Successfully")
        }
        catch (error) {
            toast.error(error.response.data.message)
        }
    }


    const handleSearch = (e) => {
        try {
            setSearchTerm(e.target.value)
            const result = data.filter(client => client.name.toLowerCase().includes(searchTerm.toLowerCase()));
            if (result) {
                setFilteredValue(result)
                console.log(filteredValue)
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    const handleEdit = () => {
        setEdit(true)
    }


    return (
        <Fragment>
            <Breadcrumb title="Clients List" parent="Clients" />
            <Container fluid={true}>
                <Card>
                    <CardHeader>
                        <h5>Client Details</h5>
                        <div style={{ display: "flex", width: "50%" }}>
                            <Input type="text" style={{ flex: "3", marginTop: "12px", height: "40px" }} placeholder="Search Client" value={searchTerm} onChange={handleSearch} />
                        </div>
                    </CardHeader>
                    <CardBody>
                        <div className="btn-popup pull-right">
                            <Link to="/clients/create-clients" className="btn btn-secondary">
                                Add Client
                            </Link>
                        </div>
                        <div className="clearfix"></div>
                        <div className="container">
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
                            <Table hover responsive
                                striped
                                bordered
                            >
                                <thead>
                                    <tr>
                                        <th>
                                            ClientId
                                        </th>
                                        <th>
                                            Name
                                        </th>
                                        <th>
                                            Email
                                        </th>
                                        <th>
                                            Containers
                                        </th>
                                        <th>
                                            Edit
                                        </th>
                                        <th>
                                            Delete
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        filteredValue.length
                                            ?
                                            (
                                                filteredValue.map((client) => (
                                                    <>
                                                        <tr key={client._id}>
                                                            <td>
                                                                {client._id}
                                                            </td>
                                                            <td>
                                                                {client.name}
                                                            </td>
                                                            <td>
                                                                {client.email}
                                                            </td>
                                                            <td>
                                                                {
                                                                    client.containers
                                                                        ?
                                                                        client.containers.length
                                                                        :
                                                                        0
                                                                }
                                                            </td>
                                                            <td>
                                                                {
                                                                    type === 'btn'
                                                                        ?
                                                                        (
                                                                            <Button
                                                                                variant='contained'
                                                                                size='small'
                                                                                onClick={handleEdit}
                                                                            >
                                                                                Edit
                                                                            </Button>
                                                                        )
                                                                        :
                                                                        type === 'comp'
                                                                            (
                                                                                <EditComp2 id={client._id} />
                                                                            )
                                                                }
                                                            </td>
                                                            <td>
                                                                <Button
                                                                    variant='contained'
                                                                    size='small'
                                                                    sx={{
                                                                        backgroundColor: "red", ":hover": {
                                                                            backgroundColor: "red"
                                                                        }
                                                                    }}
                                                                    onClick={() => handleDelete(client._id)}
                                                                >
                                                                    Delete
                                                                </Button>
                                                            </td>
                                                        </tr>
                                                    </>
                                                ))
                                            )
                                            :
                                            (
                                                data.map((client) => (
                                                    <>
                                                        <tr key={client._id}>
                                                            <td>
                                                                {client._id}
                                                            </td>
                                                            <td>
                                                                {client.name}
                                                            </td>
                                                            <td>
                                                                {client.email}
                                                            </td>
                                                            <td>
                                                                {
                                                                    client.containers
                                                                        ?
                                                                        client.containers.length
                                                                        :
                                                                        0
                                                                }
                                                            </td>
                                                            <td>
                                                                <Link to='/containers/edit-containers'>
                                                                    <Button
                                                                        variant='contained'
                                                                        size='small'
                                                                        onClick={() => setType('comp')}
                                                                    >
                                                                        Edit
                                                                    </Button>
                                                                </Link>
                                                            </td>
                                                            <td>
                                                                <Button
                                                                    variant='contained'
                                                                    size='small'
                                                                    sx={{
                                                                        backgroundColor: "red", ":hover": {
                                                                            backgroundColor: "red"
                                                                        }
                                                                    }}
                                                                    onClick={() => handleDelete(client._id)}
                                                                >
                                                                    Delete
                                                                </Button>
                                                            </td>
                                                        </tr>
                                                    </>
                                                ))
                                            )
                                    }
                                </tbody>
                            </Table>
                            <div className="containerPage">
                                {/* <Pagination>
                                    <PaginationItem>
                                        <PaginationLink
                                            first
                                            href="#"
                                        />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink
                                            href="#"
                                            previous
                                        />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">
                                            1
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">
                                            2
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">
                                            3
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">
                                            4
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">
                                            5
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink
                                            href="#"
                                            next
                                        />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink
                                            href="#"
                                            last
                                        />
                                    </PaginationItem>
                                </Pagination> */}
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Container>
        </Fragment>
    )
}

export default ClientTable;
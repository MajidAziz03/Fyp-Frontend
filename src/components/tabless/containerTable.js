import { Circle } from '@mui/icons-material'
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
import { Card, CardBody, CardHeader, Container, Input, PaginationItem, PaginationLink } from 'reactstrap'
import Breadcrumb from '../common/breadcrumb'
import './tabl.css'



const ContainerTable = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredValue, setFilteredValue] = useState([]);

    const getClients = async () => {
        try {
            const res = await axios.get('http://localhost:4000/containers/findAll')
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
            const response = await axios.get(`http://localhost:4000/containers/${id}`)
            setIsLoading(true)
            const del = await axios.delete(`http://localhost:4000/containers/${response.data._id}`)
            if (del) {
                setIsLoading(false)
                toast.success("Deleted Successfully")
                window.location.reload()
            }
        }
        catch (error) {
            toast.error(error.response.data.message)
        }
    }


    const handleSearch = (e) => {
        try {
            setSearchTerm(e.target.value)
            const result = data.filter(container => container.containerId === searchTerm);
            if (result) {
                setFilteredValue(result)
                console.log(filteredValue)
            }
        }
        catch (error) {
            console.log(error)
        }
    }



    return (
        <Fragment>
            <Breadcrumb title="Containers List" parent="Containers" />
            <Container fluid={true}>
                <Card>
                    <CardHeader>
                        <h5>Container Details</h5>
                        <div style={{ display: "flex", width: "50%" }}>
                            <Input type="text" style={{ flex: "3", marginTop: "12px", height: "40px" }} placeholder="Search Client" value={searchTerm} onChange={handleSearch} />
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
                        <div className="container">
                            <Table hover responsive
                                striped
                                bordered
                            >
                                <thead>
                                    <tr>
                                        <th>
                                            Container
                                        </th>
                                        <th>
                                            Date
                                        </th>
                                        <th>
                                            Revenue
                                        </th>
                                        <th>
                                            Status
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
                                                filteredValue.map((containers) => (
                                                    <>
                                                        <tr key={containers._id}>
                                                            <td>
                                                                {containers.containerId}
                                                            </td>
                                                            <td>
                                                                {containers.createdAt}
                                                            </td>
                                                            <td>
                                                                0$
                                                            </td>
                                                            <td>
                                                                <span style={{ color: "green", fontSize: "8px", display: "flex", justifyContent: "center", alignItems: "center" }}><Circle fontSize='small' /></span>
                                                            </td>
                                                            <td>
                                                                <Button
                                                                    variant='contained'
                                                                    size='small'
                                                                >
                                                                    Edit
                                                                </Button>
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
                                                                    onClick={() => handleDelete(containers._id)}
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
                                                data.map((containers) => (
                                                    <>
                                                        <tr key={containers._id}>
                                                            <td>
                                                                {containers.containerId}
                                                            </td>
                                                            <td>
                                                                {containers.createdAt}
                                                            </td>
                                                            <td>
                                                                0$
                                                            </td>
                                                            <td>
                                                                <span style={{ color: "green", fontSize: "8px", display: "flex", justifyContent: "center", alignItems: "center" }}><Circle fontSize='small' /></span>
                                                            </td>
                                                            <td>
                                                                <Button
                                                                    variant='contained'
                                                                    size='small'
                                                                >
                                                                    Edit
                                                                </Button>
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
                                                                    onClick={() => handleDelete(containers._id)}
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
                                <Pagination>
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
                                </Pagination>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Container>
        </Fragment>
    )
}

export default ContainerTable;
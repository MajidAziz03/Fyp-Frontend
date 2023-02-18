import { Button } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { Fragment } from 'react'
import { useState } from 'react'
import { Pagination, Table } from 'react-bootstrap'
import { TailSpin } from 'react-loader-spinner'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Card, CardBody, CardHeader, CardText, CardTitle, Container, Input, PaginationItem, PaginationLink } from 'reactstrap'
import Breadcrumb from '../common/breadcrumb'
import ContComp2 from './contComp2'
import './tabl.css'
import ReactPaginate from 'react-paginate';



const ClientTable = () => {


    const history = useNavigate()
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [editId, setEditId] = useState('')
    const [filteredValue, setFilteredValue] = useState([]);
    const [edit, setEdit] = useState(false);
    const [type, setType] = useState('btn');
    const [itemOffset, setItemOffset] = useState(0);
    const [currentItem, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 10;



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

    const handleEdit = (id) => {
        console.log({ state: { here: id, name: 'sabaoon' } })
        history('/clients/edit-clients', { state: { here: id, name: 'sabaoon' } });
    }


    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, data])

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

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
                                                                <Button
                                                                    variant='contained'
                                                                    size='small'
                                                                    onClick={() => { handleEdit(client._id) }}
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
                                                currentItem.map((client) => (
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
                                                                {/* <Link to='/clients/edit-clients'> */}
                                                                <Button
                                                                    variant='contained'
                                                                    size='small'
                                                                    onClick={() => { handleEdit(client._id) }}
                                                                >
                                                                    Edit
                                                                </Button>
                                                                {/* </Link> */}
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
                                <ReactPaginate
                                    breakLabel="..."
                                    nextLabel="next >"
                                    onPageChange={handlePageClick}
                                    pageRangeDisplayed={5}
                                    pageCount={pageCount}
                                    previousLabel="< previous"
                                    renderOnZeroPageCount={null}
                                    containerClassName='containerPagination'
                                    pageLinkClassName='page-num'
                                    previousLinkClassName='page-num'
                                    nextLinkClassName='page-num'
                                    activeLinkClassName='active'
                                />
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Container>
        </Fragment >
    )
}

export default ClientTable;
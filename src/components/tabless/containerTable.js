import { Circle } from '@mui/icons-material'
import { Button } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { Fragment } from 'react'
import { useState } from 'react'
import { Pagination, Table } from 'react-bootstrap'
import { TailSpin } from 'react-loader-spinner'
import ReactPaginate from 'react-paginate'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Card, CardBody, CardHeader, Container, Input, PaginationItem, PaginationLink } from 'reactstrap'
import Breadcrumb from '../common/breadcrumb'
import ContComp2 from './contComp2'
import './tabl.css'


// I used pagination react-paginate library 



const ContainerTable = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredValue, setFilteredValue] = useState([]);
    const [type, setType] = useState('btn');
    const [edit, setEdit] = useState(false);
    const history = useNavigate()
    const [itemOffset, setItemOffset] = useState(0);
    const [currentItem, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const itemsPerPage = 10;




    const getClients = async () => {
        try {
            const res = await axios.get('https://fyp-container-server.vercel.app/containers/findAll')
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
            const response = await axios.get(`https://fyp-container-server.vercel.app/containers/${id}`)
            setIsLoading(true)
            const del = await axios.delete(`https://fyp-container-server.vercel.app/containers/${response.data._id}`)
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

    const handleEdit = (id) => {
        console.log({ state: { here: id, name: 'sabaoon' } })
        history('/containers/edit-container', { state: { here: id, name: 'sabaoon' } });
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
                            <div style={{ display: "flex", justifyContent: "end", marginBottom: "12px" }}>Total Containers : {data.length}</div>
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
                                                                    onClick={() => { handleEdit(containers._id) }}
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
                                                currentItem.map((containers) => (
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
                                                                    onClick={() => { handleEdit(containers._id) }}
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
        </Fragment>
    )
}

export default ContainerTable;
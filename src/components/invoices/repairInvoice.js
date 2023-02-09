import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import axios from 'axios'
import { useFormik } from 'formik'
import { toast } from 'react-toastify'
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import Breadcrumb from "../common/breadcrumb";
import { Fragment } from "react";
import RepairCompNormal from './repairNormalComponent'
import RepairHeulierComp from './repairHeulierComp'




const RepairInvoice = () => {
    const [type, setType] = useState('normal')
    const [activeNormal, setActiveNormal] = useState(true)
    const [activeHeu, setActiveHeu] = useState(false)
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)


    const handleNormal = () => {
        setActiveNormal(true)
        setActiveHeu(false)
        setType('normal')

    }


    const handleHeu = () => {
        setActiveHeu(true)
        setActiveNormal(false)
        setType('heulier')

    }
    const getData = async () => {
        setIsLoading(true);
        try {
            const res = await axios.get("http://localhost:4000/invoices/repair/findAll");
            setData(res.data);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            toast.error(error.response.data.message);
        }
    };

    return (
        <>
            <Fragment>
                {/* <Breadcrumb title="Invoice List" /> */}
                <Container fluid={true}>
                    <Card>
                        {/* <CardHeader>
                            <h5> Repair Invoice Details</h5>
                        </CardHeader> */}
                        <div className='switcher'>
                            <div className='switcher-repair'>
                                {
                                    activeNormal
                                        ?
                                        <Button variant='contained' size='small' sx={{ backgroundColor: "#7e7cf4", marginRight: "1px" }}> Normal </Button>
                                        :
                                        <Button size='small' onClick={handleNormal} > Normal </Button>
                                }
                                {
                                    activeHeu
                                        ?
                                        <Button variant='contained' size='small' sx={{ backgroundColor: "#7e7cf4 ", marginRight: "1px" }}> Heulier </Button>
                                        :
                                        <Button size='small' onClick={handleHeu} > Heulier </Button>
                                }
                            </div>
                        </div>
                        {
                            type === 'normal'
                                ?
                                <RepairCompNormal />
                                :
                                type === 'heulier'
                                    ?
                                    <RepairHeulierComp />
                                    :
                                    null
                        }
                    </Card>
                </Container>
            </Fragment>
        </>
    )
}

export default RepairInvoice;

import { Button } from '@mui/material';
import React, { useState } from 'react'
import ClientReport from './clientReport';
import Reporting from './report';
import './report.css'
import Switcher from './reportSwitch'

const ReportTyp = () => {
    const [reportType, setReportType] = useState("")
    const [activeClient, setActiveClient] = useState(false)
    const [activeContainer, setActiveContainer] = useState(false)


    const handleClient = () => {
        setReportType("client")
        setActiveClient(true)
        setActiveContainer(false)

    }

    const handleContainer = () => {
        setReportType("container")
        setActiveContainer(true)
        setActiveClient(false)

    }

    return (
        <>
            <div className='container-switcher'>
                <div className='switcher'>
                    {
                        activeClient
                            ?
                            <Button variant='contained' size='small' sx={{ backgroundColor: "#7e7cf4 " }} onClick={handleClient}> Client </Button>
                            :
                            <Button  size='small' onClick={handleClient}> Client </Button>
                    }
                    {
                        activeContainer
                            ?
                            <Button variant='contained' sx={{ backgroundColor: "#7e7cf4 " }} size='small' onClick={handleContainer}> Container </Button>
                            :
                            <Button  onClick={handleContainer}> Container </Button>
                    }
                </div>
            </div>
            {
                reportType === 'container'
                    ?
                    <Reporting />
                    :
                    reportType === 'client'
                        ?
                        <ClientReport />
                        :
                        <h3 className='reportt'> Please Select Report Type </h3>
            }
        </>
    )
}

export default ReportTyp;
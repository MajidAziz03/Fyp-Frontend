import { Button } from '@mui/material';
import React, { useState } from 'react'
import './invoice.css'
import InvoiceBooking from './invoiceBooking.js';
import InvoiceRepair from './invoiceRepair.js';
import InvoiceShipper from './invoiceShipper.js'


const InvoicePage = () => {
    const [activeBooking, setActiveBooking] = useState(false)
    const [activeRepair, setActiveRepair] = useState(false)
    const [activeShipper, setActiveShipper] = useState(false)
    const [reportType, setreportType] = useState('')


    const handleBooking = () => {
        setActiveBooking(true)
        setActiveRepair(false)
        setActiveShipper(false)
        setreportType('booking')

    }

    const handleRepair = () => {
        setActiveRepair(true)
        setActiveBooking(false)
        setActiveShipper(false)
        setreportType('repair')


    }

    const handleShipper = () => {
        setActiveShipper(true)
        setActiveBooking(false)
        setActiveRepair(false)
        setreportType('shipper')

    }

    return (
        <>
            <div className='switcher'>
                {
                    activeBooking
                        ?
                        <Button variant='contained' size='small' sx={{ backgroundColor: "#7e7cf4", marginRight: "1px" }}> Booking </Button>
                        :
                        <Button size='small' onClick={handleBooking} > Booking </Button>
                }
                {
                    activeRepair
                        ?
                        <Button variant='contained' size='small' sx={{ backgroundColor: "#7e7cf4 ", marginRight: "1px" }}> Repair </Button>
                        :
                        <Button size='small' onClick={handleRepair} > Repair </Button>
                }
                {
                    activeShipper
                        ?
                        <Button variant='contained' size='small' sx={{ backgroundColor: "#7e7cf4 ", marginRight: "1px" }}> Sent to Shipper </Button>
                        :
                        <Button size='small' onClick={handleShipper} > Sent to Shipper </Button>
                }
            </div>
            {
                reportType === 'booking'
                    ?
                    <InvoiceBooking />
                    :
                    reportType === 'repair'
                        ?
                        <InvoiceRepair />
                        :
                        reportType === 'shipper'
                            ?
                            <InvoiceShipper />
                            :
                            <h3 className='reportt'> Please Select Invoice Type </h3>
            }
        </>
    )
}

export default InvoicePage;
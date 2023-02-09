import { Button } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { toast, Spinner } from "react-toastify";
import './invoice.css'

const RepairHeulierComp = () => {
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

    useEffect(() => {
        getData();
    }, []);


    return (
        <>
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
            <div class="invoice-container">
                <h3> Heulier Repair Invoice </h3>
                {data.map((invoice, index) => (
                    <div key={index} class="invoice-data">
                        <div className="invoice-data-row" style={{ backgroundColor: "#f3f3fb" }}>
                            <h3 style={{ marginTop: "22px", marginBottom: "12px" }}>
                                Invoice
                                <div className="invoice-data-value">{index += 1}</div>
                            </h3>
                        </div>
                        <div class="invoice-data-row">
                            <div class="invoice-data-label">ID:</div>
                            <div class="invoice-data-value">{invoice._id}</div>
                        </div>
                        <div class="invoice-data-row">
                            <div class="invoice-data-label">Repair Type:</div>
                            <div class="invoice-data-value">{invoice.repairType}</div>
                        </div>
                        <div class="invoice-data-row">
                            <div class="invoice-data-label">Bill No:</div>
                            <div class="invoice-data-value">{invoice.billNo}</div>
                        </div>
                        <div class="invoice-data-row">
                            <div class="invoice-data-label">Date Of Issue:</div>
                            <div class="invoice-data-value">{invoice.dateOfIssue}</div>
                        </div>
                        <div class="invoice-data-row">
                            <div class="invoice-data-label">Container No:</div>
                            <div class="invoice-data-value">{invoice.containerNo}</div>
                        </div>
                        <div class="invoice-data-row">
                            <div class="invoice-data-label">Haulier Refusal:</div>
                            <div class="invoice-data-value">{invoice.haulierRefusal}</div>
                        </div>
                        <div class="invoice-data-row">
                            <div class="invoice-data-label">Job A </div>
                            <div class="invoice-data-value">{invoice.repairEstimate.jobA}</div>
                        </div>
                        <div class="invoice-data-row">
                            <div class="invoice-data-label">Job B :</div>
                            <div class="invoice-data-value">{invoice.repairEstimate.jobB}</div>
                        </div>
                        <div class="invoice-data-row">
                            <div class="invoice-data-label">Job C:</div>
                            <div class="invoice-data-value">{invoice.repairEstimate.jobC}</div>
                        </div>
                        <div class="invoice-data-row">
                            <div class="invoice-data-label">Repair Approval ESL :</div>
                            <div class="invoice-data-value">{invoice.repairEstimateAttachment.RepairApprovalEsl}</div>
                        </div>
                        <div class="invoice-data-row">
                            <div class="invoice-data-label">jobANetAmount :</div>
                            <div class="invoice-data-value">{invoice.repairEstimateAttachment.jobANetAmount}</div>
                        </div>
                        <div class="invoice-data-row">
                            <div class="invoice-data-label">jobATaxAmount:</div>
                            <div class="invoice-data-value">{invoice.repairEstimateAttachment.jobATaxAmount}</div>
                        </div>
                        <div class="invoice-data-row">
                            <div class="invoice-data-label">jobAGrossAmount:</div>
                            <div class="invoice-data-value">{invoice.repairEstimateAttachment.jobAGrossAmount}</div>
                        </div>
                        <div class="invoice-data-row">
                            <div class="invoice-data-label">jobBNetAmount:</div>
                            <div class="invoice-data-value">{invoice.repairEstimateAttachment.jobBNetAmount}</div>
                        </div>
                        <div class="invoice-data-row">
                            <div class="invoice-data-label">jobBTaxAmount:</div>
                            <div class="invoice-data-value">{invoice.repairEstimateAttachment.jobBTaxAmount}</div>
                        </div>
                        <div class="invoice-data-row">
                            <div class="invoice-data-label">jobBGrossAmount:</div>
                            <div class="invoice-data-value">{invoice.repairEstimateAttachment.jobBGrossAmount}</div>
                        </div>
                        <div class="invoice-data-row">
                            <div class="invoice-data-label">Tax Amount:</div>
                            <div class="invoice-data-value">{invoice.taxAmount}</div>
                        </div>
                        <div class="invoice-data-row">
                            <div class="invoice-data-label">Total Amount:</div>
                            <div class="invoice-data-value">{invoice.totalAmount}</div>
                        </div>
                        <div class="invoice-data-row">
                            <div class="invoice-data-label">Damage Pictures:</div>
                            <div class="invoice-data-value">{invoice.repairApprovalAttachment.DamagePicturesUpload}</div>
                        </div>
                        <div class="invoice-data-row">
                            <div class="invoice-data-label">Post Reapir Pictures:</div>
                            <div class="invoice-data-value">{invoice.repairApprovalAttachment.postRepairPicturesUpload}</div>
                        </div>
                    </div>
                ))
                }
            </div>
        </>
    )
}

export default RepairHeulierComp;

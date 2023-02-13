import { Button } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { toast, Spinner } from "react-toastify";
import './invoice.css'
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { PDFDownloadLink } from '@react-pdf/renderer';


const RepairCompNormal = () => {
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
            const res = await axios.get("https://fyp-container-server-h26k1dquz-sleepyqadir.vercel.app/invoices/repair/findAll");
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


    const styles = StyleSheet.create({
        header: {
            fontSize: 30,
            fontWeight: "bold",
            textAlign: "center",
            marginVertical: 20
        },
        invoiceContainer: {
            borderWidth: 1,
            borderColor: "#ccc",
            marginVertical: 10,
            padding: 10
        },
        row: {
            flexDirection: "row",
            justifyContent: "space-between",
            borderBottomWidth: 1,
            borderColor: "#ccc",
            paddingVertical: 10,
            paddingHorizontal: 20
        },

        label: {
            fontSize: 16,
            fontWeight: "bold",
            color: "#555"
        },
    });


    const MyDocument = () => (
        <Document>
            {data.map((invoice, index) => (
                <Page size="A4" key={invoice._id}>
                    <View>
                        <Text style={styles.header}>Repair Invoice Information</Text>
                        <View style={styles.invoiceContainer}>
                            <View style={styles.row}>
                                <Text style={styles.label}>Invoice Number:</Text>
                                <Text style={{ fontSize: 20, fontWeight: "bold", color: "#ff0000" }}>{index + 1}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>ID:</Text>
                                <Text>{invoice._id}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>Repair Type:</Text>
                                <Text>{invoice.repairType}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>Bill No:</Text>
                                <Text>{invoice.billNo}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>Date Of Issue:</Text>
                                <Text>{invoice.dateOfIssue}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>Container No:</Text>
                                <Text>{invoice.containerNo}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>Haulier Refusal:</Text>
                                <Text>{invoice.haulierRefusal}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>Job A:</Text>
                                <Text>{invoice.repairEstimate.jobA}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>Job B:</Text>
                                <Text>{invoice.repairEstimate.jobB}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>Job C:</Text>
                                <Text>{invoice.repairEstimate.jobC}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>Repair Approval ESL:</Text>
                                <Text>{invoice.repairEstimateAttachment.RepairApprovalEsl}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>Job A Net Amount:</Text>
                                <Text>{invoice.repairEstimateAttachment.jobANetAmount}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>Job A Net Amount:</Text>
                                <Text style={{ fontSize: 16, fontWeight: "bold" }}>{invoice.repairEstimateAttachment.jobANetAmount}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>Job A Tax Amount:</Text>
                                <Text style={{ fontSize: 16, fontWeight: "bold" }}>{invoice.repairEstimateAttachment.jobATaxAmount}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>Job A Gross Amount:</Text>
                                <Text style={{ fontSize: 16, fontWeight: "bold" }}>{invoice.repairEstimateAttachment.jobAGrossAmount}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>Job B Net Amount:</Text>
                                <Text style={{ fontSize: 16, fontWeight: "bold" }}>{invoice.repairEstimateAttachment.jobBNetAmount}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>Job B Tax Amount:</Text>
                                <Text style={{ fontSize: 16, fontWeight: "bold" }}>{invoice.repairEstimateAttachment.jobBTaxAmount}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>Job B Gross Amount:</Text>
                                <Text style={{ fontSize: 16, fontWeight: "bold" }}>{invoice.repairEstimateAttachment.jobBGrossAmount}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>Tax Amount:</Text>
                                <Text style={{ fontSize: 16, fontWeight: "bold" }}>{invoice.taxAmount}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>Total Amount:</Text>
                                <Text style={{ fontSize: 16, fontWeight: "bold" }}>{invoice.totalAmount}</Text>
                            </View>
                        </View>
                    </View>
                </Page>
            ))
            }
        </Document >
    );


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
                {isLoading && <p>Loading...</p>}
                <PDFDownloadLink className="btnDownload" document={<MyDocument />} fileName="invoice_booking.pdf">
                    {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download PDF')}
                </PDFDownloadLink>
                <h3 style={{ marginTop: "22px" }}> Normal Repair Invoice </h3>
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

export default RepairCompNormal;

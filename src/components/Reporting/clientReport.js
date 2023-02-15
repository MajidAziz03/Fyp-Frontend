import axios from "axios";
import React, { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { Button } from "@mui/material";
import './report.css'
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { PDFDownloadLink } from '@react-pdf/renderer';

const ClientReport = ({ weeklyReport, monthlyReport, }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [active, setActive] = useState(false)
    const [dataWeekly, setDataWeekly] = useState([]);
    const [dataMonthly, setDataMonthly] = useState([]);
    const [clients, setClients] = useState([]);





    const weeklyData = async () => {
        setIsLoading(true)
        try {
            const res = await axios.get('https://fyp-container-server.vercel.app/reports/weekly/client')
            if (res) {
                setDataWeekly(res.data)
                setIsLoading(false)
                return {
                    weeklyStatus: true
                }
            }
        }
        catch (error) {
            alert(error.response.data.message)
        }
    }

    const monthlyData = async () => {
        setIsLoading(true)
        try {
            const res = await axios.get('https://fyp-container-server.vercel.app/reports/monthly/client')
            setDataMonthly(res.data)
            setIsLoading(false)
            return {
                monthlyStatus: true
            }
        }
        catch (error) {
            alert(error.response.data.message)
        }
    }




    const getAllClients = async () => {
        setIsLoading(true)
        try {
            const res = await axios.get('https://fyp-container-server.vercel.app/clients/findAll/')
            setClients(res.data.length)
            setIsLoading(false)
            return {
                status: true
            }
        }
        catch (error) {
            alert(error.response.data.message)
        }
    }

    useEffect(() => {
        weeklyData()
        monthlyData()
        getAllClients()
    }, [])



    const styles = StyleSheet.create({
        page: {
            backgroundColor: '#ffffff',
            padding: 20,
        },
        title: {
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 10,
        },
        tableContainer: {
            borderWidth: 1,
            borderColor: '#000000',
            marginTop: 10,
            marginBottom: 10,
        },
        tableRow: {
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderBottomColor: '#000000',
        },
        tableHeader: {
            flex: 1,
            textAlign: 'center',
            fontWeight: 'bold',
            padding: 5,
        },
        tableCell: {
            flex: 1,
            textAlign: 'center',
            padding: 5,
        },
        conclusionTitle: {
            fontSize: 18,
            fontWeight: 'bold',
            marginTop: 10,
            marginBottom: 5,
        },
        conclusionText: {
            fontSize: 14,
            lineHeight: 18,
            marginBottom: 10,
        },
        highlight: {
            fontWeight: 'bold',
        },
    });


    const MyDocument = () => (
        <Document>
            <Page size="A4" style={styles.page}>
                <Text style={styles.title}>Weekly Report</Text>
                <View style={styles.tableContainer}>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableHeader}>Date</Text>
                        <Text style={styles.tableHeader}>Clients Added</Text>
                    </View>
                    {dataWeekly.map((report, index) => (
                        <View key={index} style={styles.tableRow}>
                            <Text style={styles.tableCell}>{report._id}</Text>
                            <Text style={styles.tableCell}>{report.ClientsRegistered}</Text>
                        </View>
                    ))}
                </View>
                {
                    dataWeekly.map((repo, index) => (
                        <View key={index}>
                            <Text style={styles.conclusionTitle}>Conclusion</Text>
                            <Text style={styles.conclusionText}>
                                From {repo._id}{" "}
                                <Text style={styles.highlight}>
                                    {repo.ClientsRegistered} Clients
                                </Text>{" "}
                                are Added
                            </Text>
                        </View>
                    ))
                }
                <Text style={styles.title}>Monthly Report</Text>
                <View style={styles.tableContainer}>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableHeader}>Date</Text>
                        <Text style={styles.tableHeader}>Clients Added</Text>
                    </View>
                    {dataMonthly.map((report, index) => (
                        <View key={index} style={styles.tableRow}>
                            <Text style={styles.tableCell}>{report._id}</Text>
                            <Text style={styles.tableCell}>{report.ClientsRegistered}</Text>
                        </View>
                    ))}
                </View>
                {
                    dataWeekly.map((repo, index) => (
                        <View key={index}>
                            <Text style={styles.conclusionTitle}>Conclusion</Text>
                            <Text style={styles.conclusionText}>
                                From {repo._id}{" "}
                                <Text style={styles.highlight}>
                                    {repo.ClientsRegistered} Clients
                                </Text>{" "}
                                are Added
                            </Text>
                        </View>
                    ))
                }
                <Text style={styles.title}>Total Clients</Text>
                <View style={styles.tableContainer}>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableHeader}>Date</Text>
                        <Text style={styles.tableHeader}>Clients Registered</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableCell}>{new Date().toLocaleDateString()}</Text>
                        <Text style={styles.tableCell}>{clients}</Text>
                    </View>
                </View>
            </Page>
        </Document >
    )

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
            <div className="report-container" >
                <h2 style={{ fontSize: "20px", marginLeft: "15px", marginTop: "22px", }} >Weekly Report</h2>
                <table className="report-table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Clients Added</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataWeekly.map((report, index) => (
                            <tr key={index}>
                                <td>{report._id}</td>
                                <td>{report.ClientsRegistered}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {
                    dataWeekly.map((repo, index) => (
                        <>
                            <h3 key={index} className="conc" style={{ marginLeft: "15px" }}> Conclusion </h3>
                            <p className="bot" style={{ marginLeft: "15px" }}> From {repo._id}  <span style={{ color: "green", fontWeight: "600" }}>{repo.ClientsRegistered} Clients</span>  are Added  </p>
                        </>
                    ))
                }
                <h2 className="hello" style={{ fontSize: "20px", marginLeft: "15px" }} >Monthly Report</h2>
                <table className="report-table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Clients Added</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataMonthly.map((report, index) => (
                            <tr key={index}>
                                <td>{report._id}</td>
                                <td>{report.ClientsRegistered}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {
                    dataWeekly.map((repo, index) => (
                        <>
                            <h3 key={index} className="conc" style={{ marginLeft: "15px" }}> Conclusion </h3>
                            <p className="bot" style={{ marginLeft: "15px", marginBottom: "62px" }}> From {repo._id} <span style={{ color: "green", fontWeight: "600" }}>{repo.ClientsRegistered} Clients </span>  are Added  </p>
                        </>
                    ))
                }
                <h2 className="hello" style={{ fontSize: "20px", marginTop: "12px", marginLeft: "15px" }} >Total Clients Report</h2>
                <table className="report-table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th> Total Registered Clients</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            <tr>
                                <td>{new Date().toLocaleDateString()}</td>
                                <td>{clients}</td>
                            </tr>
                        }
                    </tbody>
                </table>
                {
                    dataWeekly.map((repo, index) => (
                        <>
                            <h3 key={index} className="conc" style={{ marginLeft: "15px" }}> Conclusion </h3>
                            <p className="bot" style={{ marginLeft: "15px" }}> Total <span style={{ color: "green", fontWeight: "600" }}>{clients} Clients </span>  are added till now  </p>
                        </>
                    ))
                }

            </div >
        </>
    );
};

export default ClientReport;



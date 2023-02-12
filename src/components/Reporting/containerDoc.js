import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';


const ContDocument = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [active, setActive] = useState(false)
    const [dataWeekly, setDataWeekly] = useState([]);
    const [dataMonthly, setDataMonthly] = useState([]);
    const [clients, setClients] = useState([]);


    const weeklyData = async () => {
        setIsLoading(true)
        try {
            const res = await axios.get('http://localhost:4000/reports/weekly/container')
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
            const res = await axios.get('http://localhost:4000/reports/monthly/container')
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
            const res = await axios.get('http://localhost:4000/containers/findAll/')
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
    })

    return (
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
                            <Text style={styles.tableCell}>{report.ContainersAdded}</Text>
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
                                    {repo.ContainersAdded} Clients
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
                            <Text style={styles.tableCell}>{report.ContainersAdded}</Text>
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
                                    {repo.ContainersAdded} Clients
                                </Text>{" "}
                                are Added
                            </Text>
                        </View>
                    ))
                }
            </Page>
        </Document >
    )
}

export default ContDocument;
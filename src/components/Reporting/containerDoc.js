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
    const [containers, setContainers] = useState([]);


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




    const getAllContainers = async () => {
        setIsLoading(true)
        try {
            const res = await axios.get('http://localhost:4000/containers/findAll/')
            setContainers(res.data.length)
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
        getAllContainers()
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


    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <Text style={styles.title}>Weekly Report</Text>
                <View style={styles.tableContainer}>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableHeader}>Date</Text>
                        <Text style={styles.tableHeader}>Containers Added</Text>
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
                                    {repo.ContainersAdded} Container
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
                        <Text style={styles.tableHeader}>Containers Added</Text>
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
                                    {repo.ContainersAdded} Containers
                                </Text>{" "}
                                are Added
                            </Text>
                        </View>
                    ))
                }
                <Text style={styles.title}>Total Containers</Text>
                <View style={styles.tableContainer}>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableHeader}>Date</Text>
                        <Text style={styles.tableHeader}>Containers Created</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableCell}>{new Date().toLocaleDateString()}</Text>
                        <Text style={styles.tableCell}>{containers}</Text>
                    </View>
                </View>
            </Page>
        </Document>
    )
}

export default ContDocument;
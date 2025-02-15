import axios from "axios";
import React, { useEffect, useState } from "react";
import './report.css'
import { TailSpin } from "react-loader-spinner";
import jsPDF from 'jspdf'


const Reporting = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [dataWeekly, setDataWeekly] = useState([]);
    const [dataMonthly, setDataMonthly] = useState([]);
    const [containers, setContainers] = useState([]);


    const weeklyData = async () => {
        setIsLoading(true)
        try {
            const res = await axios.get('https://fyp-container-server.vercel.app/reports/weekly/container')
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
            const res = await axios.get('https://fyp-container-server.vercel.app/reports/monthly/container')
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
            const res = await axios.get('https://fyp-container-server.vercel.app/containers/findAll')
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
            <div className="report-container">
                {/* <h2 className="heading" style={{ marginTop: "12px", marginBottom: "22px", display: "flex", justifyContent: "center", alignItems: "center" }}> Container Report </h2> */}
                <h2 style={{ fontSize: "20px", marginLeft: "15px" }}>Weekly Report</h2>
                <table className="report-table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Containers Added</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataWeekly.map((report, index) => (
                            <tr key={index}>
                                <td>{report._id}</td>
                                <td>{report.ContainersAdded}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {
                    dataWeekly.map((repo, index) => (
                        <>
                            <h3 key={index} className="conc" style={{ marginLeft: "15px" }}> Conclusion </h3>
                            <p className="bot" style={{ marginLeft: "15px" }}> From {repo._id} <span style={{ color: "green", fontWeight: "600" }}> {repo.ContainersAdded} Containers </span>  are Added  </p>
                        </>
                    ))
                }
                <h2 classNameName="hello" style={{ fontSize: "20px", marginLeft: "15px" }}>Monthly Report</h2>
                <table className="report-table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Containers Added</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataMonthly.map((report, index) => (
                            <tr key={index}>
                                <td>{report._id}</td>
                                <td>{report.ContainersAdded}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {
                    dataMonthly.map((repo, index) => (
                        <>
                            <h3 key={index} className="conc" style={{ marginLeft: "15px" }}> Conclusion </h3>
                            <p className="bot" style={{ marginLeft: "15px" }}> From {repo._id} <span style={{ color: "green", fontWeight: "600" }}>{repo.ContainersAdded} Containers</span> are Added  </p>
                        </>
                    ))
                }
                <h2 classNameName="hello" style={{ fontSize: "20px", marginLeft: "15px" }}>Total Containers</h2>
                <table className="report-table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Total Containers</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            <tr>
                                <td>{new Date().toLocaleDateString()}</td>
                                <td>{containers}</td>
                            </tr>
                        }
                    </tbody>
                </table>
                {

                    <>
                        <h3 className="conc" style={{ marginLeft: "15px" }}> Conclusion </h3>
                        <p className="bot" style={{ marginLeft: "15px" }}> Total  <span style={{ color: "green", fontWeight: "600" }}>{containers} Containers</span> are added till now  </p>
                    </>

                }
            </div>
        </>
    );
};

export default Reporting;




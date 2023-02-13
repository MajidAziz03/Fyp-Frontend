import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { toast, Spinner } from "react-toastify";
import './invoice.css'
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Button } from "reactstrap";


const InvoiceShipper = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get("https://fyp-container-server-h26k1dquz-sleepyqadir.vercel.app//invoices/shipper/findAll");
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
    }
  });



  const MyDocument = () => (
    <Document>
      {data.map((invoice, index) => (
        <Page size="A4" key={invoice._id}>
          <View style={styles.invoiceContainer}>
            <Text style={styles.header}>Repair Invoice Information</Text>
            <View >
              <View style={styles.row}>
                <Text style={styles.label}>Invoice:</Text>
                <Text>{index + 1}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>ID:</Text>
                <Text>{invoice._id}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Booking:</Text>
                <Text>{invoice.booking}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Booking Date:</Text>
                <Text>{invoice.bookingDate}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Status Of Booking:</Text>
                <Text>{invoice.statusOfBooking}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Sent To Shipper Doc:</Text>
                <Text>{invoice.sentToShipperDoc}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Sent To Shipper Date:</Text>
                <Text>{invoice.sentToShipperDate}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Status Of STS Doc:</Text>
                <Text>{invoice.statusOfSTSDoc}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Haulier Refusal:</Text>
                <Text>{invoice.haulierRefusal}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Agent Pol:</Text>
                <Text>{invoice.agentPol}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Contact Person:</Text>
                <Text>{invoice.contactPerson}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Free Days:</Text>
                <Text>{invoice.freeDays}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label} >Free Days:</Text>
                <Text >{invoice.freeDays}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label} >Port Of Loading:</Text>
                <Text>{invoice.portOfLoading}</Text>
              </View>
            </View>
          </View>
        </Page>
      ))}
    </Document>
  );


  return (
    <div class="invoice-container">
      {isLoading && <p>Loading...</p>}
      <PDFDownloadLink className="btnDownload" document={<MyDocument />} fileName="repairinvoice.pdf">
        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download PDF')}
      </PDFDownloadLink>
      <h3 style={{ marginTop: "22px" }} > Sent To Shipper Invoice </h3>
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
            <div class="invoice-data-label">Booking:</div>
            <div class="invoice-data-value">{invoice.booking}</div>
          </div>
          <div class="invoice-data-row">
            <div class="invoice-data-label">Booking Date:</div>
            <div class="invoice-data-value">{invoice.bookingDate}</div>
          </div>
          <div class="invoice-data-row">
            <div class="invoice-data-label">Satus Of Booking:</div>
            <div class="invoice-data-value">{invoice.statusOfBooking}</div>
          </div>
          <div class="invoice-data-row">
            <div class="invoice-data-label">Sent To Shipper Doc:</div>
            <div class="invoice-data-value">{invoice.sentToShipperDoc}</div>
          </div>
          <div class="invoice-data-row">
            <div class="invoice-data-label">Sent To Shipper Date:</div>
            <div class="invoice-data-value">{invoice.sentToShipperDate}</div>
          </div>
          <div class="invoice-data-row">
            <div class="invoice-data-label">Status Of STS Doc:</div>
            <div class="invoice-data-value">{invoice.statusOfStsDoc}</div>
          </div>
          <div class="invoice-data-row">
            <div class="invoice-data-label">Haulier Refusal:</div>
            <div class="invoice-data-value">{invoice.HaulierRefusal}</div>
          </div>
          <div class="invoice-data-row">
            <div class="invoice-data-label">Agent Pol:</div>
            <div class="invoice-data-value">{invoice.agentPol}</div>
          </div>
          <div class="invoice-data-row">
            <div class="invoice-data-label">Contact Person:</div>
            <div class="invoice-data-value">{invoice.contactPerson}</div>
          </div>
          <div class="invoice-data-row">
            <div class="invoice-data-label">Free Days:</div>
            <div class="invoice-data-value">{invoice.freeDays}</div>
          </div>
          <div class="invoice-data-row">
            <div class="invoice-data-label">Port Of Loading:</div>
            <div class="invoice-data-value">{invoice.portOfLoading}</div>
          </div>
        </div>
      ))
      }
    </div>
  )
}

export default InvoiceShipper;


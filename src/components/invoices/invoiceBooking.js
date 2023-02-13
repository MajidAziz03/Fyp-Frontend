import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { toast, Spinner } from "react-toastify";
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Button } from "reactstrap";

const InvoiceBooking = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get('https://fyp-container-server-h26k1dquz-sleepyqadir.vercel.app/invoices/booking/findAll');
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
          <View>
            <Text style={styles.header}>Booking Invoice Information</Text>
            <View style={styles.invoiceContainer}>
              <View style={styles.row}>
                <Text style={styles.label}>Invoice:</Text>
                <Text style={{ fontSize: 20, fontWeight: "bold", color: "#ff0000" }}>{index + 1}</Text>
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
                <Text style={styles.label}>Date:</Text>
                <Text>{invoice.bookingDate}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>BookingBy:</Text>
                <Text>{invoice.bookingBy}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Status:</Text>
                <Text>{invoice.statusOfBooking}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Aprroved By:</Text>
                <Text>{invoice.approvedBy}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Ref:</Text>
                <Text>{invoice.ref}</Text>
              </View>
              <View style={[styles.row,]}>
                <Text style={styles.label}>Agent Pol:</Text>
                <Text>{invoice.agentPol}</Text>
              </View>
            </View>
          </View>
        </Page>
      ))}
    </Document>
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
      <div className="invoice-container">
        {isLoading && <p>Loading...</p>}
        <PDFDownloadLink className="btnDownload" document={<MyDocument />} fileName="invoice_booking.pdf">
          {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download PDF')}
        </PDFDownloadLink>
        <h3 style={{ marginTop: "22px" }}> Booking Invoice </h3>
        {data.map((invoice, index) => (
          <div key={index} className="invoice-data" >
            <div className="invoice-data-row" style={{ backgroundColor: "#f3f3fb" }}>
              <h3 style={{ marginTop: "22px", marginBottom: "12px" }}>
                Invoice
                <div className="invoice-data-value">{index += 1}</div>
              </h3>
            </div>
            <div className="invoice-data-row">
              <div className="invoice-data-label">ID:</div>
              <div className="invoice-data-value">{invoice._id}</div>
            </div>
            <div className="invoice-data-row">
              <div className="invoice-data-label">Booking:</div>
              <div className="invoice-data-value">{invoice.booking}</div>
            </div>
            <div className="invoice-data-row">
              <div className="invoice-data-label">Date:</div>
              <div className="invoice-data-value">{invoice.bookingDate}</div>
            </div>
            <div className="invoice-data-row">
              <div className="invoice-data-label">BookingBy:</div>
              <div className="invoice-data-value">{invoice.bookingBy}</div>
            </div>
            <div className="invoice-data-row">
              <div className="invoice-data-label">Status:</div>
              <div className="invoice-data-value">{invoice.statusOfBooking}</div>
            </div>
            <div className="invoice-data-row">
              <div className="invoice-data-label">AprrovedBy:</div>
              <div className="invoice-data-value">{invoice.approvedBy}</div>
            </div>
            <div className="invoice-data-row">
              <div className="invoice-data-label">Ref:</div>
              <div className="invoice-data-value">{invoice.ref}</div>
            </div>
            <div className="invoice-data-row">
              <div className="invoice-data-label">AgentPol:</div>
              <div className="invoice-data-value">{invoice.agentPol}</div>
            </div>
            <div className="invoice-data-row">
              <div className="invoice-data-label">Contact:</div>
              <div className="invoice-data-value">{invoice.contactPerson}</div>
            </div>
            <div className="invoice-data-row">
              <div className="invoice-data-label">Qunatity:</div>
              <div className="invoice-data-value">{invoice.quantity}</div>
            </div>
            <div className="invoice-data-row">
              <div className="invoice-data-label">ContainerSize:</div>
              <div className="invoice-data-value">{invoice.containerSize}</div>
            </div>
            <div className="invoice-data-row">
              <div className="invoice-data-label">Container Type:</div>
              <div className="invoice-data-value">{invoice.containerType}</div>
            </div>
            <div className="invoice-data-row">
              <div className="invoice-data-label">Port Of Loading:</div>
              <div className="invoice-data-value">{invoice.portOfLoading}</div>
            </div>
            <div className="invoice-data-row">
              <div className="invoice-data-label">Port Of Final:</div>
              <div className="invoice-data-value">{invoice.portOfFinal}</div>
            </div>
            <div className="invoice-data-row">
              <div className="invoice-data-label">Commodity:</div>
              <div className="invoice-data-value">{invoice.commodity}</div>
            </div>
            <div className="invoice-data-row">
              <div className="invoice-data-label">DG:</div>
              <div className="invoice-data-value">{invoice.dg}</div>
            </div>
            <div className="invoice-data-row">
              <div className="invoice-data-label">DG class:</div>
              <div className="invoice-data-value">{invoice.dgClass}</div>
            </div>
          </div>

        ))

        }

      </div>
    </>
  )
}

export default InvoiceBooking;


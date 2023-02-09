import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { toast, Spinner } from "react-toastify";
import './invoice.css'

const InvoiceShipper = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:4000/invoices/shipper/findAll");
      setData(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div class="invoice-container">
      <h3> Sent To Shipper Invoice </h3>
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
            <div class="invoice-data-label">Post Of Loading:</div>
            <div class="invoice-data-value">{invoice.postOfLoading}</div>
          </div>
        </div>
      ))
      }
    </div>
  )
}

export default InvoiceShipper;


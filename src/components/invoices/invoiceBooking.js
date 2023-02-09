import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { toast, Spinner } from "react-toastify";

const InvoiceBooking = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get('http://localhost:4000/invoices/booking/findAll');
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
      <div className="invoice-container">
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
              <div className="invoice-data-label">Port Of isLoading:</div>
              <div className="invoice-data-value">{invoice.portOfisLoading}</div>
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
              <div className="invoice-data-label">DG className:</div>
              <div className="invoice-data-value">{invoice.dgclassName}</div>
            </div>
          </div>
        ))
        }
      </div>
    </>
  )
}

export default InvoiceBooking;


// {
//   isLoading && (
//     <div classNameName="isLoading">
//       <TailSpin />
//     </div>
//   )
// }
// {
//   !isLoading && data.length > 0 && (
//     <>
//       <h3>Booking Invoices</h3>
//       <table classNameName="invoice-table">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Booking</th>
//             <th>Date</th>
//             <th>BookingBy</th>
//             <th>Status</th>
//             <th>AprrovedBy</th>
//             <th>ref</th>
//             <th>AgentPol</th>
//             <th>Contact</th>
//             <th>Qunatity</th>
//             <th>ContainerSize</th>
//             <th>ContainerType</th>
//             <th>PortOfisLoading</th>
//             <th>PortOfFinal</th>
//             <th>Commodity</th>
//             <th>DG</th>
//             <th>DG className</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((invoice) => (
//             <tr key={invoice._id}>
//               <td>{invoice._id}</td>
//               <td>{invoice.booking.booking}</td>
//               <td>{invoice.booking.bookingDate}</td>
//               <td>{invoice.booking.customer}</td>
//               <td>{invoice.booking.amount}</td>
//               <td>{invoice.booking.amount}</td>
//               <td>{invoice.booking.amount}</td>
//               <td>{invoice.booking.amount}</td>
//               <td>{invoice.booking.amount}</td>
//               <td>{invoice.booking.amount}</td>
//               <td>{invoice.booking.amount}</td>
//               <td>{invoice.booking.amount}</td>
//               <td>{invoice.booking.amount}</td>
//               <td>{invoice.booking.amount}</td>
//               <td>{invoice.booking.amount}</td>
//               <td>{invoice.booking.amount}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </>
//   )
// }
// {
//   !isLoading && data.length === 0 && (
//     <div classNameName="empty-state">
//       <p>No invoices found</p>
//     </div>
//   )
// }
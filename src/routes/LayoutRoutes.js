import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../components/app'
import Datatable from '../components/common/datatable'
import Createcoupons from '../components/coupons/create-coupons'
import ListCoupons from '../components/coupons/list-coupons'
import Dashboard from '../components/dashboard'
import Invoice from '../components/invoice'
import InvoicePage from '../components/invoices/invoicePage'
import NewInvoice from '../components/invoices/bookingInvoiceCreate'
import Rates from '../components/localization/rates'
import Taxes from '../components/localization/taxes'
import Media from '../components/media/media'
import Reporting from '../components/Reporting/report'
import ReportTyp from '../components/Reporting/reportTyp'
import Reports from '../components/reports/report'
import Transactionsales from '../components/sales/transactions-sales'
import Profile from '../components/settings/profile'
import Createuser from '../components/users/create-user'
import Listuser from '../components/users/list-user'
import Createvendors from '../components/vendors/create.vendors'
import Listvendors from '../components/vendors/list-vendors'
import RepairNewInvoice from '../components/invoices/repairInvoiceCreate'
import ShipperCreateInvoice from '../components/invoices/shipperInvoiceCreate'
import DisplayInvoice from '../components/invoices/displayCreating'
import ClientPower from '../components/powerbi/powerbiClient'
import ContainerPower from '../components/powerbi/containerPower'
import ClientTable from '../components/tabless/clientTable'
import ContainerTable from '../components/tabless/containerTable'
import UpdateCard from '../components/tabless/updateCard'
import EditComp2 from '../components/tabless/clientEdit'
import Forcast from '../components/Forcast'

// import InvoicePage from '../components/invoices/invoicePage.js'

const LayoutRoutes = () => {
	return (
		<Fragment>
			<Routes>
				<Route element={<App />}>
					<Route
						path={`${process.env.PUBLIC_URL}/dashboard`}
						element={<Dashboard />}
					/>
					<Route
						path={`${process.env.PUBLIC_URL}/sales/transactions`}
						element={<Transactionsales />}
					/>

					<Route
						path={`${process.env.PUBLIC_URL}/coupons/list-coupons`}
						element={<ListCoupons />}
					/>
					<Route
						path={`${process.env.PUBLIC_URL}/coupons/create-coupons`}
						element={<Createcoupons />}
					/>
					<Route
						path={`${process.env.PUBLIC_URL}/invoice/new`}
						element={<DisplayInvoice />}
					/>
					<Route path={`${process.env.PUBLIC_URL}/media`} element={<Media />} />
					<Route
						path={`${process.env.PUBLIC_URL}/clients/list-clients`}
						// element={<Listuser />}
						element={<ClientTable />}
					/>
					<Route
						path={`${process.env.PUBLIC_URL}/forecast`}
						// element={<Listuser />}
						element={<Forcast />}
					/>
					<Route
						path={`${process.env.PUBLIC_URL}/power/clientsbi`}
						element={< ClientPower />}
					/>
					<Route
						path={`${process.env.PUBLIC_URL}/clients/create-clients`}
						element={<Createuser />}
					/>
					<Route
						path={`${process.env.PUBLIC_URL}/power/containersbi`}
						element={<ContainerPower />}
					/>
					<Route
						path={`${process.env.PUBLIC_URL}/containers/list_containers`}
						// element={<Listvendors />}
						element={<ContainerTable />}
					/>
					<Route
						path={`${process.env.PUBLIC_URL}/containers/create-containers`}
						element={<Createvendors />}
					/>
					<Route
						path={`${process.env.PUBLIC_URL}/containers/edit-containers`}
						element={<EditComp2 />}
					/>
					<Route
						path={`${process.env.PUBLIC_URL}/esl/invoices`}
						element={<InvoicePage />}
					/>
					<Route
						path={`${process.env.PUBLIC_URL}/localization/currency-rates`}
						element={<Rates />}
					/>
					<Route
						path={`${process.env.PUBLIC_URL}/localization/taxes`}
						element={<Taxes />}
					/>

					<Route
						path={`${process.env.PUBLIC_URL}/reports/report`}
						element={<ReportTyp />}


					/>

					<Route
						path={`${process.env.PUBLIC_URL}/settings/profile`}
						element={<Profile />}
					/>

					<Route
						path={`${process.env.PUBLIC_URL}/invoice`}
						// element={<Invoice />}
						element={<InvoicePage />}
					/>
					<Route
						path={`${process.env.PUBLIC_URL}/data-table`}
						element={<Datatable />}
					/>
				</Route>
			</Routes>
		</Fragment>
	)
}

export default LayoutRoutes
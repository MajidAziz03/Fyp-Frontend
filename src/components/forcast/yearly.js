import React, { PureComponent } from 'react';
import {
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    ZAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import './forcast.css'

// z: 13800
// z: 28400
// z: 15900

const data01 = [
    { x: 1000, y: 13800 },
    { x: 2000, y: 28400 },
    { x: 3000, y: 15900 },
    { x: 4000, y: "", },
];



function YearlyForcast() {
    return (
        <div className="forcastContainer">
            <h3> Profit Scattered chart </h3>
            <p className='para'> KNN algorithm  by the ESL Shipping Limited to analyze customer data and identify patterns in their buying behavior.
                By applying KNN to customer data, the company can segment its customer base and tailor its marketing efforts to specific customer groups, ultimately leading to higher profits.
                KNN can also be used to analyze supply chain data, which can help the company optimize its operations and reduce costs, further contributing to increased profitability.
                The use of KNN algorithm allows ESL to make data-driven decisions based on accurate insights, leading to better business outcomes and improved financial performance.</p>
            <ResponsiveContainer width="100%" height={400}>
                <ScatterChart
                    margin={{
                        top: 30,
                        right: 20,
                        bottom: 20,
                        left: 20,
                    }}
                >
                    <CartesianGrid />
                    <XAxis type="number" dataKey="x" name="Yearly" />
                    <YAxis type="number" dataKey="y" name="Profit" unit={'$'} />
                    {/* <ZAxis type="number" dataKey="z" range={[60, 400]} name="profit" unit="$" /> */}
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Legend />
                    <Scatter name="Yearly" data={data01} fill="#8884d8" shape="star" />
                    {/* <Scatter name="Profit" data={data02} fill="#82ca9d" shape="triangle" /> */}
                </ScatterChart>
            </ResponsiveContainer>
        </div >
    );
}

export default YearlyForcast;


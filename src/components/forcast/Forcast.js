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



const data01 = [
    { x: 1000, y: 3000, z: 3000 },
    { x: 1200, y: 2500, z: 2500 },
    { x: 1700, y: 4000, z: 4000 },
    { x: 1400, y: 4300, z: 4300 },
    { x: 1500, y: 5500, z: 5500 },
    { x: 1100, y: 7800, z: 7000 }
];
const data02 = [
    { x: 2000, y: 3000, z: 2000 },
    { x: 3200, y: 2500, z: 2600 },
    { x: 4700, y: 4000, z: 4005 },
    { x: 5400, y: 4300, z: 2806 },
    { x: 5900, y: 5500, z: 5009 },
    { x: 5600, y: 7800, z: 4000 }
];


function Forcast() {
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
                    <XAxis type="number" dataKey="x" name="Quaterly" />
                    <YAxis type="number" dataKey="y" name="Month" />
                    <ZAxis type="number" dataKey="z" range={[60, 400]} name="profit" unit="$" />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Legend />
                    <Scatter name="Quaterly" data={data01} fill="#8884d8" shape="star" />
                    <Scatter name="Profit" data={data02} fill="#82ca9d" shape="triangle" />
                </ScatterChart>
            </ResponsiveContainer>
        </div >
    );
}

export default Forcast;


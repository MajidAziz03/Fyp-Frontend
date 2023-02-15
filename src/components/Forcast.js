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

const data01 = [
    { x: 1000, y: 3000, z: 200 },
    { x: 1200, y: 2500, z: 260 },
    { x: 1700, y: 4000, z: 400 },
    { x: 1400, y: 4300, z: 280 },
    { x: 1500, y: 5500, z: 500 },
    { x: 1100, y: 7800, z: 200 }
];
const data02 = [
    { x: 2000, y: 3000, z: 200 },
    { x: 3200, y: 2500, z: 260 },
    { x: 4700, y: 4000, z: 400 },
    { x: 5400, y: 4300, z: 280 },
    { x: 5900, y: 5500, z: 500 },
    { x: 5600, y: 7800, z: 200 }
];


function Forcast() {
    // const demoUrl = 'https://codesandbox.io/s/scatter-chart-of-three-dimensions-w2cwd';
    return (
        <div className="App">
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
                    <YAxis type="number" dataKey="y" name="Profit" />
                    <ZAxis type="number" dataKey="z" range={[60, 400]} name="profit" unit="$" />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Legend />
                    <Scatter name="Quaterly" data={data01} fill="#8884d8" shape="star" />
                    <Scatter name="Profit" data={data02} fill="#82ca9d" shape="triangle" />
                </ScatterChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Forcast;


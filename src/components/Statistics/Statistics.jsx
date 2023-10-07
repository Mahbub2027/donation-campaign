// import React, { PureComponent } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';


const Statistics = () => {
    const categories = useLoaderData();
    const MyDonation = JSON.parse(localStorage.getItem("donation-amount")) || [];
    const totalDonation = categories.length - MyDonation.length;
    const data = [
        { name: 'All donation', value: totalDonation },
        { name: 'My Donation', value: MyDonation.length },

    ];

    const COLORS = ['#F87272', '#1DCDBC',  ]; 

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };


    return (
        <section className='flex flex-col items-center'>
            
            <div style={{width: "100%", height: "400px"}}>
                
                <ResponsiveContainer >
                    <PieChart width={400} height={400}>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={200}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div>
                <p className='mt-10'>
                    <span className='mr-3'>Your Donation</span>
                    <progress className="progress progress-accent w-16" value="100" max="100"></progress>
                    <span className='ml-10 mr-3'>Total Donation</span>
                    <progress className="progress progress-error w-16" value="100" max="100"></progress>
                     
                </p>
            </div>
        </section>
    )

};

export default Statistics;




import { PieChart, Pie } from 'recharts';
// import { getStoredDonationFund } from '../utility/localstorage';
const Statistics = () => {

    // const App = () => {
 
        // Sample data
        const data = [
            { name: 'Geeksforgeeks', students: 300 },
            { name: 'Technical scripter', students: 400 },
            
        ];

            //  const COLORS = ['#0088FE', '#00C49F'];

            // const RADIAN = Math.PI / 180;
            // const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
            // const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
            // const x = cx + radius * Math.cos(-midAngle * RADIAN);
            // const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <PieChart width={700} height={600}>
            <Pie data={data} dataKey="students" outerRadius={250} fill="blue" />
             
        </PieChart>
    );
};

export default Statistics;



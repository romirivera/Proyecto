import Card from '../components/Card';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import './Dashboard.css';

const data = [
  { name: 'Ene', ventas: 4000 },
  { name: 'Feb', ventas: 3000 },
  { name: 'Mar', ventas: 2000 },
  { name: 'Abr', ventas: 2780 },
  { name: 'May', ventas: 1890 },
];

function Dashboard() {
  return (
    <div className='dashboard'>
      <h1>Mi Dashboard</h1>
      <div className='metrics'>
        <Card title='Ventas Totales' value='$15,000' icon='💰' />
        <Card title='Usuarios Activos' value='1,200' icon='👥' />
        <Card title='Órdenes Nuevas' value='45' icon='📦' />
      </div>
      <div className='dashboard_chart'>
        <h2>Ventas Mensuales</h2>
        <BarChart className='barchart' data={data}>
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey='ventas' fill='#8884d8' />
        </BarChart>
      </div>
    </div>
  );
}

export default Dashboard;

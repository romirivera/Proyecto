import Card from './Card';
import './Dashboard.css';
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import useUsers from '../Hooks/useUsers';
import useReservations from '../Hooks/useReservations';
import usePayments from '../Hooks/usePayments';

function Dashboard() {
  const { users } = useUsers();
  const { reservations } = useReservations();
  const { payments } = usePayments();

  // Calcular el total de pagos en CLP por mes y la cantidad de pagos
  const monthlyStats = payments.reduce((acc, payment) => {
    const month = new Date(payment.paymentDate).toLocaleString('default', {
      month: 'short',
    });
    if (!acc[month]) {
      acc[month] = { pagos: 0, dinero: 0 };
    }
    acc[month].pagos += 1; // Contar pagos
    if (payment.currency === 'CLP') {
      acc[month].dinero += payment.amount; // Sumar montos en CLP
    }
    return acc;
  }, {});

  // Convertir los datos a un formato que recharts pueda usar
  const data = Object.keys(monthlyStats).map((month) => ({
    name: month,
    pv: monthlyStats[month].pagos, // Cantidad de pagos
    uv: monthlyStats[month].dinero, // Dinero obtenido en CLP
  }));

  return (
    <div className='contenedor container-fluid table-responsive mt-1'>
      <div className='dashboard'>
        <h1>Mi Dashboard</h1>
        <div className='metrics'>
          <Card
            title='Pagos Totales'
            value={`$${(Array.isArray(payments)
              ? payments.reduce((total, p) => total + p.amount, 0)
              : 0
            ).toFixed(2)}`}
            icon='💰'
          />
          <Card title='Usuarios Activos' value={users.length} icon='👥' />
          <Card title='Total reservas' value={reservations.length} icon='📦' />
        </div>
        <div className='chart'>
          <h2>Pagos Mensuales</h2>
          <ResponsiveContainer width='100%' height={300}>
            <ComposedChart data={data}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' />
              <YAxis yAxisId='left' orientation='left' />
              <YAxis yAxisId='right' orientation='right' />
              <Tooltip />
              <Legend />
              <Bar yAxisId='left' dataKey='pv' fill='#8884d8' name='Cantidad de Pagos' />
              <Line
                yAxisId='right'
                type='monotone'
                dataKey='uv'
                stroke='#ff7300'
                name='Dinero Obtenido (CLP)'
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

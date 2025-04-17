import '../assets/styles.css';
import FormularioSincronizado from '../components/FormularioSincronizado'; // Importa el formulario
import Dashboard from '../components/Dashboard';
import ReservationsTable from '../components/ReservationsTable';
import StockTable from '../components/StockTable';
import useCabins from '../Hooks/useCabins';
import usehistoricalReservations from '../Hooks/useHistoricalReservations';
import usehistoricalPayments from '../Hooks/useHistoricalPayments';
import useReservations from '../Hooks/useReservations';
import usePayments from '../Hooks/usePayments';
import PaymentTable from '../components/PaymentTable';
import HistoricalreservationsTable from '../components/HistoricalReservationsTable';
import HistoricalpaymentsTable from '../components/HistoricalPaymentsTable';
import Footer from '../components/Footer';

const Inicio = () => {
  const { cabins } = useCabins();
  const { reservations } = useReservations();
  const { payments } = usePayments();
  const { historicalReservations } = usehistoricalReservations();
  const { historicalPayments } = usehistoricalPayments();

  // Función para descargar el informe en formato CSV
  const downloadReport = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (!section) {
      console.error(`No se encontró la sección con ID: ${sectionId}`);
      return;
    }

    let data = '';
    const rows = section.querySelectorAll('table tbody tr');

    if (rows.length === 0) {
      alert('No hay datos disponibles para descargar.');
      return;
    }

    // Generar el contenido del CSV
    rows.forEach((row) => {
      const cells = row.querySelectorAll('td');
      const rowData = Array.from(cells)
        .map((cell) => cell.innerText)
        .join(',');
      data += rowData + '\n';
    });

    // Crear y descargar el archivo CSV
    const blob = new Blob([data], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${sectionId}_informe.csv`;
    link.click();
  };

  return (
    <div>
      <div className='container-fluid'>
        <Dashboard />
        <StockTable cabinsData={cabins} downloadReport={downloadReport} />
        <ReservationsTable
          reservations={reservations}
          onDownload={() => downloadReport('reservas')}
        />
        <PaymentTable payments={payments} onDownload={() => downloadReport('pagos')} />
        <HistoricalreservationsTable
          historicalReservations={historicalReservations}
          onDownload={() => downloadReport('reservas-historicas')}
        />{' '}
        <HistoricalpaymentsTable
          historicalPayments={historicalPayments}
          onDownload={() => downloadReport('pagos-historicos')}
        />
        <div className='contenedor container-fluid mt-1'>
          <FormularioSincronizado />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Inicio;

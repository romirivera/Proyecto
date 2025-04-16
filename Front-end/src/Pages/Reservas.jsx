// src/pages/Reservas.jsxcd B
import Footer from '../components/Footer';
import ReservationsTable from '../components/ReservationsTable';
import useReservations from '../Hooks/useReservations';

const ReservationList = () => {
  const { reservations, isLoading, error } = useReservations();

  if (isLoading) return <p>Cargando cabañas...</p>;
  if (error) return <p>Error: {error}</p>;
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
      // Crear y descargar el archivo CSV
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
        <ReservationsTable //renderizar las reservas obtenidas hacia el componente ReservationsTable
          reservations={reservations}
          onDownload={() => downloadReport('reservas')}
        />
      </div>

      <Footer />
    </div>
  );
};

export default ReservationList;

import Footer from '../components/Footer';
import PaymentTable from '../components/PaymentTable';
import usePayments from '../Hooks/usePayments';

const PaymentsList = () => {
  const { payments, pagination, isLoading, error, fetchPayments } = usePayments();
  if (isLoading) return <p>Cargando pagos...</p>;
  if (error) return <p>Error: {error}</p>;
  const handlePageChange = (page) => {
    fetchPayments(page);
  };

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
        <PaymentTable
          payments={payments}
          pagination={pagination}
          onPageChange={handlePageChange}
          onDownload={() => downloadReport('pagos')}
        />
      </div>
      <Footer />
    </div>
  );
};

export default PaymentsList;

import { useState } from 'react';
import Footer from '../components/Footer';

const Pagos = () => {
  const [paymentsData] = useState([
    { id: 1, date: '2025-01-20', client: 'Juan Pérez', amount: 150.0, method: 'Tarjeta' },
    { id: 2, date: '2025-01-19', client: 'Ana López', amount: 200.0, method: 'PayPal' },
  ]);

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

    rows.forEach((row) => {
      const cells = row.querySelectorAll('td');
      const rowData = Array.from(cells)
        .map((cell) => cell.innerText)
        .join(',');
      data += rowData + '\\n';
    });

    const blob = new Blob([data], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${sectionId}_informe.csv`;
    link.click();
  };
  return (
    <div>
      <div className='container-fluid'>
        {/* Sección de Pagos */}
        <div className='contenedor container-fluid table-responsive mt-1' id='pagos'>
          <h2>Historial de Pagos</h2>
          <p>A continuación se detallan los pagos realizados por los clientes.</p>
          <table>
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Cliente</th>
                <th>Monto</th>
                <th>Método</th>
              </tr>
            </thead>
            <tbody>
              {paymentsData.map((payment) => (
                <tr key={payment.id}>
                  <td>{payment.date}</td>
                  <td>{payment.client}</td>
                  <td>${payment.amount.toFixed(2)}</td>
                  <td>{payment.method}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button id='bi' onClick={() => downloadReport('pagos')}>
            Descargar Informe
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pagos;

import FormularioSincronizado from '../components/FormularioSincronizado';
import Card from '../components/Card';
import { FaHome } from 'react-icons/fa';

const Inicio = () => {
  const downloadReport = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (!section) {
      console.error(`No se encontró la sección con ID: ${sectionId}`);
      return;
    }
    let data = '';
    const rows = section.querySelectorAll('table tbody tr');

    if (rows.length === 0) {
      alert('No hay datos disponiblespara descargar.');
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
    <>
      <Card title='Casa' value='100' icon={<FaHome />} />
      {/* Sección de Reservas */}
      <div>
        <h2>Reservas</h2>
        <p>Resumen de las reservas realizadas recientemente.</p>
        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Cliente</th>
              <th>Habitación</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2025-01-20</td>
              <td>Juan Pérez</td>
              <td>Suite Deluxe</td>
              <td>Confirmada</td>
            </tr>
            <tr>
              <td>2025-01-19</td>
              <td>Ana López</td>
              <td>Habitación Doble</td>
              <td>Cancelada</td>
            </tr>
          </tbody>
        </table>
        <button id='bi' onClick={() => downloadReport('reservas')}>
          Descargar Informe
        </button>
      </div>
      {/* Sección de Pagos */}
      <div className='contenedor container-fluid table-responsive mt-1' id='pagos'>
        <h2>Pagos</h2>
        <p>Información detallada sobre las transacciones de pagos.</p>
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
            <tr>
              <td>2025-01-20</td>
              <td>Juan Pérez</td>
              <td>$150.00</td>
              <td>Tarjeta</td>
            </tr>
            <tr>
              <td>2025-01-19</td>
              <td>Ana López</td>
              <td>$200.00</td>
              <td>PayPal</td>
            </tr>
          </tbody>
        </table>
        <button id='bi' onClick={() => downloadReport('pagos')}>
          Descargar Informe
        </button>
      </div>
      {/* Nueva sección para el formulario de sincronización */}
      <div className='contenedor container-fluid mt-1'>
        <h2>Formulario de Contacto</h2>
        <FormularioSincronizado />
      </div>
    </>
  );
};

export default Inicio;

import { useState } from 'react';
import '../components/style.css';
import Footer from '../components/Footer';

const Informe = () => {
  const [informeData] = useState([
    {
      id: 1,
      fecha: '2025-01-20',
      actividad: 'Sincronización de Stock',
      estado: 'Exitoso',
      comentarios: 'Actualización realizada correctamente',
    },
    {
      id: 2,
      fecha: '2025-01-19',
      actividad: 'Sincronización de Stock',
      estado: 'Parcial',
      comentarios: 'Algunas reservas no fueron confirmadas',
    },
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
      <nav id='informe' className='informe-container'>
        <h2>Informe de actividades</h2>
        <p>
          A continuación se muestran los informes detallados de las actividades
          realizadas.
        </p>
        <table className='tabla'>
          <thead>
            <tr className='header-tabla'>
              <th>Fecha</th>
              <th>Actividad </th>
              <th>Estado</th>
              <th>Comentarios</th>
            </tr>
          </thead>
          <tbody>
            {informeData.map((item) => (
              <tr key={item.id}>
                <td>{item.fecha}</td>
                <td>{item.actividad}</td>
                <td>{item.estado}</td>
                <td>{item.comentarios}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button id='bi' onClick={() => downloadReport('informe')}>
          Descargar informe
        </button>
      </nav>
      <Footer />
    </>
  );
};
export default Informe;

// Descarga reserva
const reservasButton = document.getElementById('boton-reservas');

if (reservasButton) {
  reservasButton.addEventListener('click', () => {
    downloadReport('reservas');
  });
}
//Descarga informe
const informeButton = document.getElementById('boton-informe');
if (informeButton) {
  informeButton.addEventListener('click', () => {
    downloadReport('informe');
  });
}
// Descarga stock
const stockButton = document.getElementById('boton-stock');

if (stockButton) {
  stockButton.addEventListener('click', () => {
    downloadReport('stock');
  });
}

//Descarga Pagos
const pagosButton = document.getElementById('boton-pagos');
if (pagosButton) {
  pagosButton.addEventListener('click', () => {
    downloadReport('pagos');
  });
}

// Configurar botones de descarga
function downloadReport(sectionId) {
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

  for (let row of rows) {
    const cells = row.querySelectorAll('td');
    const rowData = Array.from(cells)
      .map((cell) => cell.innerText)
      .join(',');
    data += rowData + '\n';
  }

  const blob = new Blob([data], { type: 'text/csv' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `${sectionId}_informe.csv`;
  link.click();
}

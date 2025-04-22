import Pagination from './Pagination';

function ReservationsTable({ reservations, pagination, onPageChange, onDownload }) {
  return (
    <div className='contenedor container-fluid table-responsive mt-1' id='reservas'>
      <h2>Resumen de Reservas</h2>
      <p>A continuación se detallan las reservas recientes realizadas en el hotel.</p>

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
          {reservations.map((reservation) => (
            <tr key={reservation._id}>
              <td>{new Date(reservation.checkinDate).toLocaleDateString()}</td>
              <td>{reservation.client?.name || 'N/A'}</td>
              <td>{reservation.cabin?.number || 'N/A'}</td>
              <td>{reservation.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        currentPage={pagination.currentPage}
        totalPages={pagination.totalPages}
        onPageChange={onPageChange}
      />

      {onDownload && (
        <button id='bi' onClick={onDownload}>
          Descargar Informe
        </button>
      )}
    </div>
  );
}

export default ReservationsTable;

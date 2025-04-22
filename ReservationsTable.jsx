import Pagination from './Pagination';

function ReservationsTable({ reservations, pagination, onPageChange, onDownload }) {
  return (
    <div className='contenedor container-fluid table-responsive mt-1' id='reservas'>
      <h2>Resumen de Reservas</h2>
      <p>A continuación se detallan las reservas recientes realizadas en el hotel.</p>

      <table>{/* ... tabla existente ... */}</table>

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

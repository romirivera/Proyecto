import Pagination from './Pagination';
function parseFecha(fechaStr) {
  try {
    const fecha = new Date(fechaStr);
    if (isNaN(fecha)) return 'Fecha inválida';
    return fecha.toISOString().split('T')[0];
  } catch (error) {
    return 'Fecha inválida';
  }
}
function PaymentTable({
  payments = [],
  pagination = {},
  onPageChange,
  onDownload,
  isLoading,
  error,
}) {
  const { currentPage = 1, totalPages = 1 } = pagination;

  // Validar que payments sea un array
  if (!Array.isArray(payments)) {
    console.error('PaymentTable: payments debe ser un array');
    return <div>Error en los datos</div>;
  }
  if (isLoading) return <div className='alert alert-info'>Cargando pagos...</div>;
  if (error) return <div className='alert alert-danger'>Error: {error}</div>;
  if (!payments || payments.length === 0)
    return <div className='alert alert-warning'>No hay pagos disponibles</div>;
  if (typeof onPageChange !== 'function') {
    console.error('PaymentTable: onPageChange debe ser una función');
    return <div className='alert alert-danger'>Error de configuración</div>;
  }

  return (
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
          {payments.map((payment) => (
            <tr key={payment._id}>
              <td>{parseFecha(payment.paymentDate)}</td>
              <td>{payment.reservation?.client?.name || 'Cliente no disponible'}</td>
              <td>${payment.amount?.toFixed(2) || '0.00'}</td>
              <td>{payment.paymentMethod || 'No especificado'}</td>
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

export default PaymentTable;

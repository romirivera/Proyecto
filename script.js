// Navbar
// prueba de commit
document.addEventListener('DOMContentLoaded', function () {
  const navItems = document.querySelectorAll('.nav-item');

  navItems.forEach((item) => {
    item.addEventListener('click', function () {
      navItems.forEach((el) => el.classList.remove('active'));
      this.classList.add('active');
    });
  });
});

function toggleDropdown() {
  var dropdownContent = document.querySelector('.dropdown-content');

  // Alternar visibilidad
  if (dropdownContent.style.display === 'none' || dropdownContent.style.display === '') {
    dropdownContent.style.display = 'block';
  } else {
    dropdownContent.style.display = 'none';
  }
  const paymentsList = document.getElementById('paymentsList');
  paymentsData.forEach((payment) => {
    const li = document.createElement('li');
    li.textContent = `Pago ${payment.id} - Reserva ${payment.reserveId} - $${payment.amount} - Estado: ${payment.status}`;
    paymentsList.appendChild(li);
  });

  function downloadReport(section) {
    // Lógica simulada para descargar un informe
    alert(`Descargando informe para la sección: ${section}`);
    // Ejemplo real (si usas un servidor backend con URL dinámica):
    // window.location.href = `/descargar-informe?seccion=${section}`;
  }
}

import { useState, useEffect } from 'react';
import API from '../Services/Api';
const usePayments = () => {
  const [payments, setPayments] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    itemsPerPage: 10,
    totalItems: 0,
    totalPages: 0,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPayments = async (page = 1) => {
    try {
      setIsLoading(true);
      const res = await API.get(`/payments?page=${page}&limit=10`);
      setPayments(res.data.payments);
      setPagination(res.data.pagination);
    } catch (error) {
      console.error('Error al obtener los pagos: ', error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchPayments();
  }, []);
  return { payments, pagination, isLoading, error, fetchPayments };
};
export default usePayments;

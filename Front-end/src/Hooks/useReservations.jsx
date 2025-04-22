import { useState, useEffect } from 'react';
import API from '../Services/Api';

const useReservations = () => {
  const [reservations, setReservations] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    itemsPerPage: 10,
    totalItems: 0,
    totalPages: 0,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchReservations = async (page = 1) => {
    try {
      setIsLoading(true);
      const res = await API.get(`/reservations?page=${page}&limit=10`);
      setReservations(res.data.reservations);
      setPagination(res.data.pagination);
    } catch (error) {
      console.error('Error al obtener las reservas: ', error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  return {
    reservations,
    pagination,
    isLoading,
    error,
    fetchReservations,
  };
};

export default useReservations;

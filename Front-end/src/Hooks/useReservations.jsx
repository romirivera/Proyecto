import { useState, useEffect } from 'react';
import API from '../Services/Api';
const useReservations = () => {
  const [reservations, setReservations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const res = await API.get('/reservations');
        setReservations(res.data);
        console.log(res.data);
      } catch (error) {
        console.error('Error al obtener las reservas: ', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchReservations();
  }, []);
  return { reservations, isLoading };
};
export default useReservations;

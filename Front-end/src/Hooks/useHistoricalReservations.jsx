import { useState, useEffect } from 'react';
import API from '../Services/Api';
const useHistoricalReservations = () => {
  const [historicalReservations, setHistoricalReservations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHistoricalReservations = async () => {
      try {
        const res = await API.get('/historical/historicalreservations');
        setHistoricalReservations(res.data);
      } catch (error) {
        console.error('Error al obtenes las reservas históricas: ', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchHistoricalReservations();
  }, []);
  return { historicalReservations, isLoading };
};
export default useHistoricalReservations;

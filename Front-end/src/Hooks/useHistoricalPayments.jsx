import { useState, useEffect } from 'react';
import API from '../Services/Api';
const useHistoricalPayments = () => {
  const [historicalPayments, setHistoricalPayments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHistoricalPayments = async () => {
      try {
        const res = await API.get('/historicalPayments');
        setHistoricalPayments(res.data);
        console.log(res.data);
      } catch (error) {
        console.error('Error al obtenes los pagos históricos: ', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchHistoricalPayments();
  }, []);
  return { historicalPayments, isLoading };
};
export default useHistoricalPayments;

import { useState, useEffect } from 'react';
import API from '../Services/Api';
const usePayments = () => {
  const [payments, setPayments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const res = await API.get('/cabins');
        setPayments(res.data);
      } catch (error) {
        console.error('Error al obtener los pagos: ', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPayments();
  }, []);
  return { payments, isLoading };
};
export default usePayments;

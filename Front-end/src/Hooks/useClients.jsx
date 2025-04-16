import { useState, useEffect } from 'react';
import API from '../Services/Api';
const useClients = () => {
  const [clients, setClients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const res = await API.get('/clients');
        setClients(res.data);
      } catch (error) {
        console.error('Error al obtener los clientes: ', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchClients();
  }, []);
  return { clients, isLoading };
};
export default useClients;

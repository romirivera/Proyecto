import { useState, useEffect } from 'react';
import API from '../Services/Api';
const useCabins = () => {
  const [cabins, setCabins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCabins = async () => {
      try {
        const res = await API.get('/cabins');
        setCabins(res.data);
        console.log(res.data);
      } catch (error) {
        console.error('Error al obtener las cabañas: ', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCabins();
  }, []);
  return { cabins, isLoading };
};
export default useCabins;

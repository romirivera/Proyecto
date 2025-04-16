import { useState, useEffect } from 'react';
import API from '../Services/Api';
const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await API.get('/users');
        setUsers(res.data);
        console.log(res.data);
      } catch (error) {
        console.error('Error al obtener los usuarios: ', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, []);
  return { users, isLoading };
};
export default useUsers;

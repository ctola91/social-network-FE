import React, { useState, useEffect } from 'react';

import UserService from '../../services/UserService';
// import useFetch from '../../shared/hooks/useFetch';

import UserItem from './UserItem';

const User = () => {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);

  //   const [userList, loading] = useFetch('User', 'GET');

  useEffect(() => {
    const fetchData = async () => {
      const response = await UserService.getUsers();
      setUserList(response.data);
      setLoading(false);
    };
    fetchData();
  }, [loading]);

  return (
    <div>
      <h1>List of Users</h1>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div className="container row">
          {userList.map((item) => (
            <UserItem key={item.id} user={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default User;

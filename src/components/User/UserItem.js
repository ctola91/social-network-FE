/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { object } from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardImg, CardTitle, CardSubtitle } from 'reactstrap';

import UserService from '../../services/UserService';

const UserItem = ({ user }) => {
    const [urlImage, setUrlImage] = useState(null);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const url = await UserService.getURLImage(user.name);
            setUrlImage(url);
            setloading(false);
        };
        fetchData();
    }, [loading, user])

  return (
    <div className="UserItem col-lg-4 col-md-6 col-xs-12">
      <Card>
        <CardImg top width="100%" src={ urlImage ? urlImage : "https://picsum.photos/200/150" } alt="Card User" />
        <CardBody>
          <CardTitle>{user.name}</CardTitle>
          <CardSubtitle>{user.email}</CardSubtitle>
          <Link className="btn btn-primary" to={`/users/${user.id}`}>
            Go to User
          </Link>
        </CardBody>
      </Card>
    </div>
  );
};

UserItem.propTypes = {
  user: object,
};

export default UserItem;

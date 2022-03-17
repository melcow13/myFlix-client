import React from 'react';
import UpdateUser from './update-user';
import {FavoriteMovies} from './favorite-movies';
import { connect } from 'react-redux';
import {Card} from 'react-bootstrap';
import UserInfo from './user-info';

const ProfileView = (user ) => {
    const userData = user
    return (
        <div key={Math.random().toString()}>
            <UserInfo  />
            <UpdateUser user={userData} />         
           
        </div >
    )

}
const mapStateToProps = state => {
    const { user } = state
    return { user };
  };

  export default connect(mapStateToProps)(ProfileView);
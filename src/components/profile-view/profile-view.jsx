import React from 'react';
import UpdateUser from './update-user';
import {FavoriteMovies} from './favorite-movies';
import {Card} from 'react-bootstrap';
import UserInfo from './user-info';

const ProfileView = (props) => {
   const user = props

    return (
        <div key={Math.random().toString()}>
            <UserInfo  user={user}/>
            <UpdateUser user={user} />
            <FavoriteMovies />
            
            
           
        </div >
    )

}

export default ProfileView;
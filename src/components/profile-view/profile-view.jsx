import React from 'react';
import UpdateUser from './update-user';
import FavoriteMovies from './favorite-movies';

const ProfileView = (props) => {
   const user = props;

    return (
        <div key={Math.random().toString()}>
            <UpdateUser user={user} />
            
           
        </div >
    )

}

export default ProfileView;
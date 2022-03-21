import React from 'react';
import UpdateUser from './update-user';
import { FavoriteMovies } from './favorite-movies';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux'
import { Card } from 'react-bootstrap';
import UserInfo from './user-info';

const ProfileView = (props) => {
    //state = {}
    const userData = props.user
   // const movies = useSelector((state) => state.movies)
    // if (!userData.userData) return <div>Loading...</div>

    return (
        <div>
            {userData.userData && <UpdateUser user={userData} />}
            {userData.userData && <FavoriteMovies favoriteMovieList={userData.userData.FavoriteMovies} />}
        </div >
    )

}

export default ProfileView;
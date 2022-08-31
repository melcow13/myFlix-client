import React from 'react';
import UpdateUser from './update-user';
import { FavoriteMovies } from './favorite-movies';



const ProfileView = (props) => {
    //state = {}
    const userData = props.user
    // const movies = useSelector((state) => state.movies)
    // if (!userData.userData) return <div>Loading...</div>

    return (
        <div>
            {userData.userData && <UpdateUser user={userData} />}
            <br/>
            {userData.userData && <FavoriteMovies favoriteMovieList={userData.userData.FavoriteMovies} />}
        </div >
    )

}

export default ProfileView;
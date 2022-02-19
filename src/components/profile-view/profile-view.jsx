import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UpdateUser from './update-user';
import FavoriteMovies from './favorite-movies';

const ProfileView = (props) => {
    const [user, setUser]=useState({
        Name: "",
        Username: "",
        Password: "",
        Email: "",
        Birthday: "",
        FavoriteMovies: [],
    })

    useEffect(()=>{
        const accessToken = localStorage.getItem('token');
        if(accessToken){
            getUser(accessToken);
        }
    },[])

    const getUser = (token) => {
        const Username = localStorage.getItem('user');
        axios
            .get(`https://myflixerupper.herokuapp.com/users/${Username}`, {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((response) => {
                console.log(response.data)
                setUser(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };


    return (
        <div key={Math.random().toString()}>
            <UpdateUser user={user} />
           
        </div >
    )

}

export default ProfileView;
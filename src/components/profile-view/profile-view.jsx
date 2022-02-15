import React from 'react';
import {Form, Card, Container, Col, Row, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';
import UserInfo from '../profile-view/user-info'
import { FavoriteMovies } from './favorite-movies';
import { UpdateUser } from './update-user';

export function ProfileView ({ movies, onUpdatedUserInfo}) {
    const [user, setUser] = useState({

    })

    const favoriteMovieList = movies.filter((movies)=>{

    })
    
    const getUser = () => {

    }

    const removeFav= (id) => {

    }
    
    const handleUpdate = (e) => {
        
    };
    
    useEffect(()=>{

    },[])

    return (
          <div>
              <UserInfo name={user.Username} email={user.Email}/>
              <FavoriteMovies favoriteMovieList = {favoriteMovieList} />
              <UpdateUser handleUpdate={handleUpdate} handleSubmit={handleSubmit} />
                
        </div>

    )
 }

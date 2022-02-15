import React from 'react';
import {Form, Card, Container, Col, Row, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';
import UserInfo from '../profile-view/user-info'
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
            <div>
                <h2>Favorite Movies</h2>
                {favoriteMovieList.map((movies)=> {
                return (
                    <div key={movies._id}>
                        <img src={movies.ImagePath} />
                        <Link to={`/movies/${movies._id}`}>
                            <h4>Movie Title</h4>
                        </Link>
                        <Button variant="secondary" onClick={()=> removeFav(movie._id)}>Remove From List</Button>
                    </div>
                )
            })
        
        }
            </div>      
        </div>

    )
 }

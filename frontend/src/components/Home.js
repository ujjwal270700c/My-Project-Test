import React, { Fragment, useContext } from 'react'
import AuthContext from '../auth/AuthContext'
const Home = () => {
    const authContext=useContext(AuthContext)
    const {user}=authContext
    console.log(user);
    return user&& user.name ? (
        <Fragment>
<h2>Name:  {user.name}</h2>
<h3>UserName:  {user.username}</h3>
<h3>Email:  {user.email}</h3>
      </Fragment>
      ) : (
      
        <Fragment>
<h1>Register First</h1>
      </Fragment>
      
    )
}

export default Home

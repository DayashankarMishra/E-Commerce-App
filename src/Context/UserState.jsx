import React, { Children, useState } from 'react'
import UserContext from './UserContext'

const UserState = (props) => {
  let details = JSON.parse(localStorage.getItem('userLogin'))
    let [userData,setUserData] = useState({
      login:details ? details.login : false,
      email:details ? details.email : ''
    })
    // console.log(userData)

    let [searchItems,setSearchItems] = useState('')
// console.log(searchItems)
  return (
    <UserContext.Provider value={{userData,setUserData,searchItems,setSearchItems}}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserState

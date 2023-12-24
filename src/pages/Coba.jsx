import React, { useEffect, useState } from 'react'
import { getFreeClass } from "../services/freeClass";
import { useLocation } from 'react-router-dom';
// import { CookieKeys, CookieStorage } from '../utils/cookies';

export const Coba = () => {
  // const authToken = CookieStorage.get(CookieKeys.AuthToken);
  const location = useLocation()
  const [free, setFree] = useState([])
  const id = location.state?.id
  // freeClass.jsx
const freeClass = async () => {
  try {
    const data = await getFreeClass(id);
    console.log(id);
    setFree(data.classes);
  } catch (error) {
    console.error("Error:", error.response);
  }
};



useEffect(() => {
  freeClass();
}, [id]);
  return (
    <div>Coba</div>
  )
}

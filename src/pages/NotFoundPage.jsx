import React from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className='container page'>
        <h1>Ups 404 Not found</h1>
        <p>This page was not found</p>
        <Link to='/'>Try go to Home page</Link>
    </div>
  )
}

export default NotFoundPage
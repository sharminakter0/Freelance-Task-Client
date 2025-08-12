import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='text-center my-40'>
        <h1 className="text-6xl font-bold text-red-500 mb-4 text-center">404</h1>
      <p className="text-xl text-gray-700 mb-6">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn btn-primary">Back to Home</Link>    
        </div>
    );
};

export default ErrorPage;
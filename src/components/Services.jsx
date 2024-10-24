// Services.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Services = () => {
  const services = [
    { id: 1, name: 'Web Development' },
    { id: 2, name: 'App Development' },
    { id: 3, name: 'SEO Optimization' },
    { id: 4, name: 'Digital Marketing' }
  ];

  return (
    <div className="container mt-5">
      <h1>Our Services</h1>
      <ul>
        {services.map(service => (
          <li key={service.id}>
            <Link to={`/services/${service.id}`}>{service.name}</Link>
          </li>
        ))}
      </ul>

      {/* Nested Route Outlet */}
      <Outlet />
    </div>
  );
};

export default Services;

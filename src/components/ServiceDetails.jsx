// ServiceDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const serviceDetails = {
  1: 'We provide full stack web development using modern frameworks like React, Node.js, and more,.',
  2: 'We offer cross-platform mobile app development services using React Native and Flutter.',
  3: 'Our SEO services ensure your website ranks higher on search engines and reaches the right audience.',
  4: 'Our digital marketing services include social media campaigns, Google ads, and email marketing.'
};

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const serviceInfo = serviceDetails[serviceId];

  return (
    <div className="mt-5">
      <h2>Service Details</h2>
      <p>{serviceInfo}</p>
    </div>
  );
};

export default ServiceDetails;

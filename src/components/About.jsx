import React from 'react';
import './about.css'; // Assuming you have a CSS file for styling

const About = ({ users }) => {
  return (
    <div className="about-container">
      <h2>About Us</h2>
      <p>We are a team of dedicated professionals committed to providing exceptional services.</p>
      <h3>Meet Our Team:</h3>
      <div className="team">
        {users.map(user => (
          <div key={user.id} className="team-member">
            <h4>{user.name}</h4>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Company:</strong> {user.company.name}</p>
            <p><strong>Catchphrase:</strong> "{user.company.catchPhrase}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;

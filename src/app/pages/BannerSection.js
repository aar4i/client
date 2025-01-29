import React, { useState } from 'react';
import '../styles/BannerSection.css';
import Parallaximage from '../Parallaximage';

export default function BannerSection() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', description: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your submission!');
    setFormData({ name: '', email: '', phone: '', description: '' });
  };

  return (
    <section className="banner">
      <div>
        <Parallaximage src="/portraits/portrait4.JPG" alt="" />
      </div>
      <div className="banner-copy">
        <p>Be the</p>
        <h1>First to know</h1>
        <p>Make an order first time and get a discount for 20%</p>
        <form className="banner-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            placeholder="Describe what you'd like to do"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

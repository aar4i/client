import React, { useState } from 'react';
import '../styles/BannerSection.css';
import Parallaximage from '../components/Parallaximage';

export default function BannerSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: '',
  });

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
    <section className='banner'>
      
      <div className='banner-copy'>
        
        <h1>Make your order now</h1>
        <form className='banner-form' onSubmit={handleSubmit}>
          <input
            type='text'
            name='name'
            placeholder='Your Name'
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type='email'
            name='email'
            placeholder='Your Email'
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type='tel'
            name='phone'
            placeholder='Your Phone Number'
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <textarea
            name='description'
            placeholder="Describe what you'd like to do"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </section>
  );
}

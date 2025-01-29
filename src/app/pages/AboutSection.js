import React from 'react';
import '../styles/AboutSection.css';
import Parallaximage from '../Parallaximage';

export default function AboutSection() {
  return (
    <section className="about">
      <div className="col intro">
        <p>Introduction</p>
        <p>Founded in 2021 by Nikolay Kukarin in Berlin, our agency began with a passion for quality clothing production. Built to support brands and businesses, we specialize in manufacturing, printing, and embroidery, offering tailored solutions from concept to completion.</p>
      </div>
      <div className="col portrait">
        <div className="img">
          <Parallaximage src="/portraits/IMG_0057.JPG" alt="" />
        </div>
      </div>
    </section>
  );
}

"use client"
import Image from 'next/image';
import $ from "jquery";
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useEffect } from 'react';

const images = [
    './images/1.png',
    './images/2.png',
    './images/3.png',
    './images/4.png',
    './images/5.png',
    './images/6.png'
  ];

  export default function Feedback() {
    const [imageUrl, setImageUrl] = useState(null);
    useEffect(() => {
      const randomIndex = Math.floor(Math.random() * 101);
      setImageUrl(images[(randomIndex/20 + 1)]);
    }, []);
  
    return (
      <div>
        <img src={imageUrl} alt="Random Image" />
        <h1>Customer Satisfaction is {randomIndex}%</h1>
      </div>
    );
  }
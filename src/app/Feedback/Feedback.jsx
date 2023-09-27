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
    const [customerSatisfaction, setCustomerSatisfaction] = useState(null);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * 101);
        setCustomerSatisfaction(randomIndex);
    }, []);
  
    return (
      <div className="feedbackMessage">
        <img src={images[Math.floor(customerSatisfaction / 20) + 1]} alt="Random Image" />
        <h1>Customer Satisfaction is {customerSatisfaction}%</h1>
      </div>
    );
  }
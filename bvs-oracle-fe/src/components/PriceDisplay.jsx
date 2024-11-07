import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PriceDisplay.css';

const PriceDisplay = () => {
    const [price, setPrice] = useState(null);
    const [loading, setLoading] = useState(true);
    const { taskId = '37' } = useParams();

    useEffect(() => {
        const fetchPrice = async () => {
            try {
                const response = await fetch(`http://localhost:3001/api/task/${taskId}/result`);
                const data = await response.json();
                setPrice(data.price || data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching price:', error);
                setLoading(false);
            }
        };

        fetchPrice();
        const interval = setInterval(fetchPrice, 30000);
        return () => clearInterval(interval);
    }, [taskId]);

    const formatPrice = (price) => {
        const priceStr = price.toString();
        const wholeNumber = priceStr.slice(0, -2);
        const decimals = priceStr.slice(-2);
        
        const formattedWhole = new Intl.NumberFormat('en-US').format(parseInt(wholeNumber));
        
        return `${formattedWhole}.${decimals}`;
    };

    return (
        <div className="price-container">
            <div className="animated-background">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="background-square"></div>
                ))}
            </div>
            <div className="price-content">
                {loading ? (
                    <div className="loading">Loading...</div>
                ) : (
                    <>
                        <div className="symbol">$BTC</div>
                        <div className="price">${price ? formatPrice(price) : '---'}</div>
                    </>
                )}
            </div>
        </div>
    );
};

export default PriceDisplay; 
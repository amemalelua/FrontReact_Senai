import React, { useState, useEffect} from "react";

const ClienttRegistration = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        age: ''
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');

    const API_URL = 'http://localhost:3306/client';

    const apiRequest = async (url, options = {}) => {
        const defaultOptions = {
            headers: {
                'Content-Type': 'application/json',
                ...options
            }
        };

        const response = await fetch(url, {...defaultOptions, ...options});

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        return response.json();
    };

    const clearMessage = () => {
        setTimeout(() => {
            setMessage('');
            setMessageType('');
        }, 3000);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    //tem continuar aqui
    const handleSubmit = async (e) => {
        e.preventDefault();
    };
}
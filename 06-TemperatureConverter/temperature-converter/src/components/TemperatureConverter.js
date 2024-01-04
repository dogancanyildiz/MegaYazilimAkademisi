import React, { useState } from 'react';

function TempCalculator() {
    const [fahrenheit, setFahrenheit] = useState('');
    const [celsius, setCelsius] = useState('');
    const [kelvin, setKelvin] = useState('');

    const handleFahrenheitChange = (value) => {
        setFahrenheit(value);
        setCelsius((parseFloat(value) - 32) * 5 / 9);
        setKelvin((parseFloat(value) - 32) * 5 / 9 + 273.15);
    };

    const handleCelsiusChange = (value) => {
        setCelsius(value);
        setFahrenheit((parseFloat(value) * 9 / 5) + 32);
        setKelvin(parseFloat(value) + 273.15);
    };

    const handleKelvinChange = (value) => {
        setKelvin(value);
        setCelsius(parseFloat(value) - 273.15);
        setFahrenheit((parseFloat(value) - 273.15) * 9 / 5 + 32);
    };

    /** CSS */
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        margin: 0,
        background: 'linear-gradient(to right, #042940, #005C53)',
        fontFamily: 'Poppins'
    };

    const calculatorStyle = {
        width: '30%',
        padding: '50px',
        background: '#8FC1B5',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
        color: '#fff',
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        marginBottom: '15px',
        borderRadius: '10px',
        border: 'none',
        background: '#555',
        color: '#fff',
        outline: 'none',
    };

    const headerStyle = {
        marginTop: '0',
        marginBottom: '10px',
    };

    const buttonStyle = {
        width: '50%',
        padding: '10px',
        marginBottom: '15px',
        borderRadius: '10px',
        border: 'none',
        background: '#DBF227',
        color: '#005C53',
        cursor: 'not-allowed',
    };

    const footerStyle = {
        width: '35%',
        left: '35%', 
        padding: '10px',
        borderRadius: '10px',
        background: '#005C53',
        color: '#fff',
        textAlign: 'center',
        marginTop: '20px',
    };
    /** CSS */

    return (
        <div style={containerStyle}>
            <div style={calculatorStyle}>
                <h2 style={headerStyle}>Celcius:</h2>
                <input
                    style={inputStyle}
                    type="number"
                    value={celsius}
                    placeholder='Sıcaklığı Celcius cinsinden giriniz.'
                    name="celcius"
                    onChange={(e) => handleCelsiusChange(e.target.value)} />

                <h2 style={headerStyle}>Fahrenheit:</h2>
                <input
                    style={inputStyle}
                    type="number"
                    value={Math.round(fahrenheit)}
                    placeholder='Sıcaklığı Fahrenheit cinsinden giriniz.'
                    name="fahrenheit"
                    onChange={(e) => handleFahrenheitChange(e.target.value)} />

                <h2 style={headerStyle}>Kelvin:</h2>
                <input
                    style={inputStyle}
                    type="number"
                    value={Math.round(kelvin)}
                    placeholder='Sıcaklığı Kelvin cinsinden giriniz.'
                    name="kelvin"
                    onChange={(e) => handleKelvinChange(e.target.value)} />

                <button style={buttonStyle} disabled>
                    Mega Yazılım Akademisi Sıcaklık Hesaplama Ödevi
                </button>
            </div>
            <footer style={footerStyle}>
                <p>Designed by <a href="https://www.linkedin.com/in/dogancanyildiz/" style={{ color: '#DBF227', textDecoration: 'none' }}>Doğan Can YILDIZ</a></p>
            </footer>
        </div>
    );
}

export default TempCalculator;

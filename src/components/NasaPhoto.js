import React, { useState, useEffect } from 'react';
import '../.env';
import apiData from '../config.json';
import Navbar from './Navbar';

const apiKey = apiData.REACT_APP_NASA_KEY;
console.log(apiData);

export default function NasaPhoto() {

    const [photoData, setphotoData] = useState(null);

    useEffect(() => {
        fetchPhoto();

        async function fetchPhoto() {
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
            );

            const data = await res.json();
            setphotoData(data);
            console.log(data);
        }
    }, []);

    if (!photoData) return <div />;

    return (
        <>
            <Navbar />
            <div className="nasa-photo">
                {photoData.media_type === 'image' ? (
                    <img
                        className="photo"
                        src={photoData.url}
                        alt={photoData.title}
                        className="photo"
                    />
                ) : (
                        <iframe
                            title="space-video"
                            src={photoData.url}
                            frameBorder="0"
                            gesture="media"
                            allow="encrypted-media"
                            allowFullScreen
                            className="photo"
                        />
                    )}
                <div>
                    <h1>{photoData.title}</h1>
                    <p className="date">{photoData.date}</p>
                    <p className="explanation">{photoData.explanation}</p>
                </div>
            </div>
        </>
    );
}
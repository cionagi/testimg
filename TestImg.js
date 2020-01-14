import React from 'react';
import './App.css';

function TestImg({url, alt,  round, width, height, responsive}) {

  const roundVariable = round ? 'img-round' : '';
    const responsiveVariable = round ? 'img-responsive' : '';
  return (
        <img src={url}
             className={`App-logo 
             ${roundVariable}
             `}
             alt={alt}
        style={{width, height}}
        />
  );
}

export default TestImg;

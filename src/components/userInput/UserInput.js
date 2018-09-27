import React from 'react';
import './userInput.css';

export default function ( {handleImageInput, handleNameInput, createPokemon} ) {
    // console.log('hello', props)
    return (
        <div className="user-input--component">
            <input type="text" onChange={handleNameInput} placeholder="name"></input>
            <input type="text" onChange={handleImageInput} placeholder="image_url"></input>
            <button onClick={createPokemon}>Submit</button>
        </div>
    )
}
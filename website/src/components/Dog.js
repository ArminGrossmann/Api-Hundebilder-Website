import React from 'react'
import axios from 'axios'
import {useState } from 'react'

function Dog() {
    function loadDog() {
        axios.get('https://dog.ceo/api/breeds/image/random')
            .then(function (response) {
                console.log(response);
                setDogbild(response.data.message)
               
            }

            )

    }
    const [dogbild, setDogbild] = useState("");

    return (
        <div>
            <img src={dogbild}/>
            <button onClick={loadDog}>
                Lade Bild
            </button>
        </div>
    )
}

export default Dog
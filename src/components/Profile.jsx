import React from 'react'

export default function Profile(props) {
    return (
        <div style={{backgroundColor: 'lightblue', padding: 10, margin: 20}}>
            {props.children}
            <p> {props.name} </p>
            <p> {props.city} </p>
            <p> {props.age} </p>
            {/* <p> {props.MorAboutMe} </p> */}<br />
            <i class="fas fa-address-card"><button onClick={() => props.displayMessage(props.MorAboutMe)}>mor about me </button></i> 
        </div>
    )
}
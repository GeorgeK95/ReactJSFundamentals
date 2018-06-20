import React from 'react'
import './app.css'
import generateContact from '../contact/contact'
import contacts from '../data/contacts.json'

function createApp(clickHandler, id) {
    const user = contacts[id]

    return (
        <div className="container">
            <header>&#9993; Contact Book</header>
            <div id="book">
                <div id="list">
                    <h1>Contacts</h1>
                    <div className="content">
                        {contacts.map((c, i) => generateContact(c, i, clickHandler))}
                    </div>
                </div>
                <div id="details">
                    <h1>Details</h1>
                    <div className="content">
                        <div className="info">
                            <div className="col">
                                <span className="avatar">&#9787;</span>
                            </div>
                            <div className="col">
                                <span className="name">{user.firstName}</span>
                                <span className="name">{user.lastName}</span>
                            </div>
                        </div>
                        <div className="info">
                            <span className="info-line">&phone; {user.phone}</span>
                            <span className="info-line">&#9993; {user.email}</span>
                        </div>
                    </div>
                </div>
            </div>
            <footer>Contact Book SPA &copy; 2017</footer>
        </div>
    )
}

export default createApp

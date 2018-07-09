import React, {Component} from 'react'
import {Redirect} from 'react-router'

import dataProvider from '../../utils/dataProvider'
import reqHandler from '../../utils/reqHandler'

const USERNAME = 'username';

class Submit extends Component {
    constructor() {
        super()

        this.dataProvider = (e) => {
            this.setState(dataProvider(e))
        }

        this.addPost = (e) => {
            e.preventDefault()

            reqHandler.addPost(this.state).then(data => {

            })
        }
    }

    componentDidMount() {
        this.setState({
            author: localStorage.getItem(USERNAME)
        })
    }

    render() {
        return (
            <div className="submitArea formContainer">

                <form id="submitForm" className="submitForm" onSubmit={(e) => {
                    this.addPost(e)
                }}>
                    <label>Link URL:</label>
                    <input
                        onChange={(e) => {
                            this.dataProvider(e)
                        }}
                        name="url"
                        type="text"/>
                    <label>Link Title:</label>
                    <input onChange={(e) => {
                        this.dataProvider(e)
                    }}
                           name="title" type="text"/>
                    <label>Link Thumbnail Image (optional):</label>
                    <input onChange={(e) => {
                        this.dataProvider(e)
                    }}
                           name="imageUrl" type="text"/>
                    <label>Comment (optional):</label>
                    <textarea onChange={(e) => {
                        this.dataProvider(e)
                    }} name="description"></textarea>
                    <input id="btnSubmitPost" value="Submit" type="submit"/>
                </form>

            </div>
        )
    }
}


export default Submit
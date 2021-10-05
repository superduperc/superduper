import * as React from 'react';
import { Link } from "gatsby"

import addToMailchimp from 'gatsby-plugin-mailchimp'
// import User from "../images/svg/user.png"
import { StaticImage } from 'gatsby-plugin-image';
import Mail from "../images/svg/mail.svg"
// make a newsletter form with icon from local image


export default class classNewsLetter extends React.Component {
    constructor() {
        super()
        this.state = { email: "", result: null }
    }
    _handleSubmit = async e => {
        e.preventDefault()
        const result = await addToMailchimp(this.state.email)
        this.setState({ result: result })
        alert("thank you")
    }
    handleChange = event => {
        this.setState({ email: event.target.value })
    }
    render() {
        return (
            <div className="newsletter">
                {/* newsletter */}
                <div className="newsletter__container">
                    <div className="newsletter__container__title">
                        <h2>Buy Happy. Be Happy.</h2>
                        <p>We are here to answer any questions you may have. Simply pop us a message on our instant chat, and let us assist you in your wonderous vape journey.Chat now.</p>
                        <Link to="" className="button" > Chat Now </Link>

                    </div>
                    <div className="newsletter__container__form">
                        <form onSubmit={this._handleSubmit}>
                            <div style={{ display: "flex" }}>
                                <div style={{ position: "relative", width: "50%"}}>
                                    <StaticImage src={`../images/svg/user.png`} className="icon" />
                                    <input onChange={this.handleChange} type="text" name="firstname" placeholder="First Name" />
                                </div>
                                <div style={{ position: "relative", width: "50%" }}>
                                    <StaticImage src={`../images/svg/user.png`} className="icon user" />
                                    <input onChange={this.handleChange} type="text" name="lastname" placeholder="Last Name" />
                                </div>
                            </div>
                            <StaticImage src={`../images/svg/telephone.png`} className="icon phone" />
                            <input onChange={this.handleChange} type="phone" name="phone" placeholder="Phone" />
                            <Mail className="icon mail" />
                            <input onChange={this.handleChange} type="email" name="email" placeholder="Your Email" />
                            <textarea onChange={this.handleChange} name="message" placeholder="Message" />
                            <button type="submit" className="button" >Send</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

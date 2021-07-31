import React from 'react'
import "./Projects.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {Button, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

class NewProject extends React.Component {
    render() {
        let button = <Button variant="success" size="lg" href={this.props.linkToSignUp}>Join Now!</Button>
        // Dynamic button automatically disables, but will have to deploy website to enable it.
        // let button
        // const today = new Date()
        // const deadline = new Date(this.props.deadlineDate + " " + this.props.deadlineTime)

        // if (today >= deadline) {
        //     button = <Button variant="secondary" disabled>The deadline to sign up has passed. Sorry!</Button>
        // }
        // else {
            // button = <Button variant="success" href={this.props.linkToSignUp}>Click here to Sign Up!</Button>
        // }

        return (
            <div>
                <br></br>
                <Container fluid>
                <b>{this.props.opener} </b> <b>{this.props.description}</b><br></br><br></br>

                {button}<br></br><br></br>

                <h2>❖ <span className="highlight-text">What you will learn:</span></h2><br></br>
                <b><ul>
                    {this.props.technologies.map((value, index) => {
                        return <li>{value}</li>
                    })}
                </ul></b>
                </Container>
                <img src={require('' + this.props.poster)} className="img-fluid project-poster" alt="project poster"></img>

                <br></br><br></br>

                <h2>❖ <span className="highlight-text">Project Leaders:</span></h2>
                <div className="carousel">
                <Carousel infiniteLoop>
                    {this.props.projectLeadersImages.map((value, index) => {
                        return <div>
                            <img className='carousel-leader-image' src={require('' + value)} alt="leader" />
                            <p className="legend">{this.props.projectLeaders[index]}</p>
                        </div>
                    })}
                </Carousel>
                </div>
            </div>
        )
    }
}

export default NewProject;

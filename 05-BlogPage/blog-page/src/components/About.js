import React, { Component } from 'react'
import '../assets/css/About.css'

class About extends Component {
    render() {
        return (
            <div className='about'>
                <h1>About Me</h1>
                <p>
                    "I was born on April 11, 1999, in Turkey.
                    I spent my elementary, middle school, and high school years in Konya.
                    In 2017, I started at the Military Academy of the Turkish Armed Forces, choosing the Electronic and Communication Engineering department in my second year.
                    In 2021, I decided to leave the academy and began to steer my life towards becoming a Web Developer.
                    Alongside this decision, I also chose to return to education.
                    Currently, I am pursuing degrees in Computer Programming at Konya Technical University and Web Design and Coding at Anadolu University.
                    I am also working as a Web Developer in a corporate company.
                    Additionally, I am serving as an Organizer in the Google Developer Groups (GDG) voluntarily."
                </p>

            </div>
        )
    }
}
export default About;
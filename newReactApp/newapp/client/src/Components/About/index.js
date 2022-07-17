import React from 'react';
import coverImage from "../../assets/IMG_0019.jpg";

function About () {

    return (
    <section className="my-5">
        <h1 id="about">Weekly Dinner Generator</h1>
        <img src={coverImage} className="my-2" style={{width: "100%"}} alt="cover" />
    </section>
    )

}

export default About;



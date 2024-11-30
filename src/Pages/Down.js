import React from "react";
import VideoSlider from "../components/VideoSlider";
import TestimonialsSlider from "../components/TestimonialsSlider";
import Intro from "../components/Intro";
import ServicesMain from "../components/ServicesMain";
import Welcome from "./Welcome";



function Down (){
return(

    <>
    <Intro />
    <ServicesMain />
    <VideoSlider />
    <Welcome />
    <TestimonialsSlider />
    </>
)
}
export default Down;
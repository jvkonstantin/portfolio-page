import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Carousel } from "react-bootstrap"

const images = [
  { url: "/pfp.jpg", id: "IRL" },
  {
    url:
      "https://upload.wikimedia.org/wikipedia/commons/8/87/Vincent_van_Gogh_-_Head_of_a_skeleton_with_a_burning_cigarette_-_Google_Art_Project.jpg",
    id: "SKELETON",
  },
]

const profileImageSlider = () => {
  return (
    <Carousel fade controls={false} indicators={false}>
      {images.map(image => (
        <Carousel.Item interval={10000}>
          {console.log(image["id"])}
          <img
            src={image["url"]}
            id={image["id"]}
            className="d-block w-100 h-600"
          ></img>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default profileImageSlider

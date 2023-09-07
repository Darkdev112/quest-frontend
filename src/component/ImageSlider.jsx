import React from 'react'
import './Slideshow.scss'
import SplitSlideshow from '../pages/Slideshow'
import img1 from '../Assets/images/onur-binay-9oQYwZXZ-8c-unsplash.jpg'
import img2 from '../Assets/images/bad-habit-concept-with-alcohol-bottles.jpg'
import img3 from '../Assets/images/man-drinks-whiskey-businessman-reads-documents-director-shirt-suspenders.jpg'
import img4 from '../Assets/images/dmitry-dreyer-H0RSi3zCCVY-unsplash.jpg'


const ImageSlider=()=>{
const images=[
    img1,img2,img3,img4
]
const text=[
    'hello'
]
return(
    <div>
    <SplitSlideshow images={images}/>
    </div>
)
}
export default ImageSlider;
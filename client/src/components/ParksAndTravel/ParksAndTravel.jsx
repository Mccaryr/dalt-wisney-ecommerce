import {useState, useEffect}from 'react'
import { CarouselData } from '../CarouselData/CarouselData'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import './ParksAndTravel.scss'

const ParksAndTravel = () => {
    const [currentSliderImage, setCurrentSliderImage] = useState(0)
    const length = CarouselData.length 

    const nextSlide = () => {
      setCurrentSliderImage(currentSliderImage === length - 1 ? 0 : currentSliderImage + 1)
    }

    const prevSlide = () => {
      setCurrentSliderImage(currentSliderImage === 0 ? length - 1: currentSliderImage - 1)
    }

    useEffect(() => {
        setCurrentSliderImage(0)
    }, [])
    
    
    useEffect(() => {
      const interval = setInterval(() => {
         nextSlide(); 
      }, 5000);
          return () => clearInterval(interval)
    }, [currentSliderImage])

    

  return (
      <div>
          <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/>
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>
      
    <div className="carousel">
        {CarouselData.map((slide, index) => {
            return(
                <div key={index}>
                    {index === currentSliderImage && (

                        <img src={slide.image} alt="disney travel slides" />
                    )}
                </div>
            )
        })}
    </div>
    </div>
  )
}

export default ParksAndTravel
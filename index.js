const { useState, useEffect, useContext, useRef } = React;

function App() {

const slides = [
  'https://www.w3schools.com/howto/img_nature_wide.jpg',
  'https://www.w3schools.com/howto/img_snow_wide.jpg',
  'https://www.w3schools.com/howto/img_lights_wide.jpg'

]

const [currentIndex, setCurrentIndex] = useState(0)

// SLIDER STYLE: create 3 divs, don't ask why, it's the logic that works - 1. Overflow (with red border) 2. Container (with brown border) 3. Slider

const overflowContainer = {
  display: 'block',
  margin: '0 auto',
  overflow: 'hidden',
  border: '3px solid red',
  width: '500px',
  fontSize: '25px'
}

const containerStyle = {
  border: '10px solid brown',
  width: '1500px',
  height: '200px',
  transition: 'transform 0.3s',
  transform: `translateX(${-(currentIndex * 500)}px)`
}

const sliderStyle = {
  display: 'flex', 
  width: '1500px',
  height: '200px'
}

const sliderFunction = (slideIndex)  => (
  {...sliderStyle, backgroundImage: `url(${slides[slideIndex]})`}

)

// AUTO SLIDING LOGIC: use setTimeout function, store it in a constant, then clearTimeout with return

useEffect (() => {
    const autoSlideTimeout = setTimeout(() => {
      nextBtn()
    }, 3000)
    // Every useEffect may return a function that cleans up after it. Cleanup is run before the effect is reached.
    return () => {clearTimeout(autoSlideTimeout)}
  }, )


function prevBtn() {
  currentIndex === 0 ? setCurrentIndex(slides.length - 1) : setCurrentIndex(x => x - 1) 
}

function nextBtn() {
  currentIndex === slides.length - 1 ? setCurrentIndex(0) : setCurrentIndex(x => x + 1) 
}

function handleDotClick(slideIndex) {
  setCurrentIndex(slideIndex)
}

console.log(currentIndex)

return <div style={overflowContainer}>

    <div style={containerStyle}>
    
    <div style={sliderStyle}>
    {slides.map((_, slideIndex) => ( //here _, represents that we don't need the value//
      <div key={slideIndex} style = {sliderFunction(slideIndex)}>
    </div>))}
    </div>
    
    </div>

  <button onClick={prevBtn}>PREV</button>
  <button onClick={nextBtn}>NEXT</button>
  {slides.map((x, slideIndex) => (
    <div key={slideIndex} onClick={() => handleDotClick(slideIndex)}>DOT {slideIndex}</div>
  ))}
</div>

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)

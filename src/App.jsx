import { useState } from 'react'
import './App.css'
import SnapCard from './Component/Cards/SnapCard'
import SlideCard from './Component/Cards/SlideCard'
import SlideLogos from './Component/Cards/SlideLogos'
import CountCard from './Component/Cards/CountCard'
import ReviewCard from './Component/Review/ReviewCard'
import TestimonialReview from './Component/Review/TestimonialReview'
import TimeLine from './Component/TimeLine/TimeLine'
import ToolsCard from './Component/Cards/ToolsCard'
import ProcessCard from './Component/Cards/ProcessCard'
import Faq1 from './Component/FAQ/Faq1'
import Faq2 from './Component/FAQ/Faq2'
import PointCard from './Component/Cards/PointCard'
import AnimePuzzel from './Component/Cards/AnimePuzzel'

function App() {
  return (
    <>
      <SnapCard />
      <SlideCard />
      <PointCard/>
      <SlideLogos />
      <AnimePuzzel/>
      <CountCard/>
      <ReviewCard/>
      <TestimonialReview/>
      <TimeLine/>
      <ToolsCard/>
      <ProcessCard/>
      <Faq1/>
      <Faq2/>

    </>
  )
}

export default App

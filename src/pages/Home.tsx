import MenuList from "../components/MenuList";
import Header from "../layouts/Header";
import HeroSection from "../layouts/HeroSection";
import Slider from "../layouts/Slider";
import './Home.scss'
import rightLogo from '@/assets/img/right-logo.png';
import { slider1, slider2, slider3, slider4 } from "./imgList";
import Meta from "../components/Meta";




function Home() {
  return (
    <>
        <div className="relative">
            <HeroSection></HeroSection>
            <div className="container">
                <div className="container-header">
                    <Header></Header>
                    <MenuList></MenuList>
                    <Meta></Meta>
                </div>
                <div className="container-header-right">
                    <img src={rightLogo} alt="logo-right" />
                </div>
            </div>
            <div className="slider-container">
                <Slider imageList={slider1} title="Retro TV"></Slider>
                <Slider imageList={slider2} title="Trending Now"></Slider>
                <Slider imageList={slider3} title="New Release"></Slider>
                <Slider imageList={slider4} title="Popular on Netflix"></Slider>



            </div>
        </div>
      
    </>
  )
}


export default Home;

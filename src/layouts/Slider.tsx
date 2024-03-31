import SingleCard from "../components/SingleCard";



function Slider({imageList, title}: any) {
    return (
        <div className="wrapper-slider">
            <div className="slider-title"> {title} </div>
            <div className="slider-manager">
                {imageList.map((list, index): any => <SingleCard image={list} key={index}></SingleCard>)}
               
            </div>
        </div>
        
    )
  }
  
  
  export default  Slider;
  
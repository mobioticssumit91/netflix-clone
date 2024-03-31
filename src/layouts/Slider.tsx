import SingleCard from "../components/SingleCard";



function Slider({imageList, title}) {
    return (
        <div className="wrapper-slider">
            <div className="slider-title"> {title} </div>
            <div className="slider-manager">
                {imageList.map((list: object, index: number) => <SingleCard image={list} key={index}></SingleCard>)}
               
            </div>
        </div>
        
    )
  }
  
  
  export default  Slider;
  
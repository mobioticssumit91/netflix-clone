import SingleCard from "../components/SingleCard";



// @ts-expect-error

function Slider({imageList, title}) {
    return (
        <div className="wrapper-slider">
            <div className="slider-title"> {title} </div>
            <div className="slider-manager">
                {imageList.map((list: string, index: number) => <SingleCard image={list} key={index}></SingleCard>)}
               
            </div>
        </div>
        
    )
  }
  
  
  export default  Slider;
  
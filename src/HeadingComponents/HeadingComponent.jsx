import CityHeader from "./CityHeader";
import OffCanvasBar from "./OffCanvasBar";


//this component is a container the two components at the top of the page, the offcanvas(really just the button), 
//and the cityheader, which is just the current queried city
function HeadingComponent({setCity, setCityChanged}) {
    return (
        <div style={{display: 'flex',  alignItems: 'center'}}>
      <OffCanvasBar changeCity={setCity} updateWeatherData={setCityChanged} />
      <CityHeader/>
      </div>
    );
}

export default HeadingComponent;
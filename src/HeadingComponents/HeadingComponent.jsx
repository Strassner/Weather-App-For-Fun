import CityHeader from "./CityHeader";
import OffCanvasBar from "./OffCanvasBar";



function HeadingComponent({setCity, setCityChanged}) {


    return (
        <div style={{display: 'flex',  alignItems: 'center'}}>
      <OffCanvasBar changeCity={setCity} updateWeatherData={setCityChanged} />
      <CityHeader/>
      </div>
    );
}

export default HeadingComponent;
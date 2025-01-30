import SearchBar from "./SearchBar";
import { useState } from "react";
import OffCanvas from "react-bootstrap/Offcanvas";
import { ReactSVG } from "react-svg";
import globalSearchIcon from "../assets/GlobalSearchIcon.svg";


//this component holds the offcanvas bar, and more importantly the search bar

//props: changeCity is 'setCity', which sets the city context in the parent of this component
//updateWeatherData is a bool that tells when other components should update
function OffCanvasBar({changeCity, updateWeatherData}) {
    //show is whether the offcanvas bar will slide over the page/be visible
    const [show, setShow] = useState(true);

    return (
        <>
        {/*this button is the globe that opens up the offcanvas bar */}
            <button style={{background:'none', position:'absolute'}} onClick={() => setShow(true)}><ReactSVG src={globalSearchIcon}/></button>
            <OffCanvas style={{background: '#8D9EB1'}} show={show} onHide={() => setShow(false)}>
                <OffCanvas.Header closeButton>
                    <OffCanvas.Title style={{color:'white'}}>Find Weather In Your Area</OffCanvas.Title>
                </OffCanvas.Header>
                <OffCanvas.Body>
                    <SearchBar changeCity={changeCity} updateWeatherData={updateWeatherData} setOffCanvasShow={setShow}/>
                </OffCanvas.Body>
            </OffCanvas>
        </>
    );
}

export default OffCanvasBar;
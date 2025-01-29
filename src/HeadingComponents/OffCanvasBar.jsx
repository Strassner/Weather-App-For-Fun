import SearchBar from "./SearchBar";
import { useState } from "react";
import OffCanvas from "react-bootstrap/Offcanvas";
import { ReactSVG } from "react-svg";
import globalSearchIcon from "../assets/GlobalSearchIcon.svg";

function OffCanvasBar({changeCity, updateWeatherData}) {
    const [show, setShow] = useState(true);

    return (
        <>
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
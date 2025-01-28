import SearchBar from "./SearchBar";
import { useState } from "react";
import OffCanvas from "react-bootstrap/Offcanvas";
import { ReactSVG } from "react-svg";
import globalSearchIcon from "../assets/GlobalSearchIcon.svg";

function OffCanvasBar({changeCity, updateWeatherData}) {
    const [show, setShow] = useState(false);
    //const city = useContext(CityContext);

    return (
        <>
            <button style={{background:'none', position:'absolute'}} onClick={() => setShow(true)}><ReactSVG src={globalSearchIcon}/></button>

            <OffCanvas show={show} onHide={() => setShow(false)}>
                <OffCanvas.Header closeButton>
                    <OffCanvas.Title>Search for a city</OffCanvas.Title>
                </OffCanvas.Header>
                <OffCanvas.Body>
                    <SearchBar changeCity={changeCity} updateWeatherData={updateWeatherData} setOffCanvasShow={setShow}/>
                </OffCanvas.Body>
            </OffCanvas>

        </>
    );
}

export default OffCanvasBar;
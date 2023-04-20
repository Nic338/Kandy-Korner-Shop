import { useEffect, useState } from "react";
import "./locations.css"
import { useNavigate } from "react-router-dom";
import { getLocations } from "../components/ApiManager";

export const LocationsList = () => {
    const [locations, setLocations] = useState([])
    const navigate = useNavigate()

useEffect( () => {
    getLocations()
    .then((locationArray) => {
     setLocations(locationArray)   
    })
},
[]
)
    return <>
    <h2>List of Locations</h2>

    <article className="locations">
        {
            locations.map(
                (location) => {
                    return <section className="location" key={`location--${location.id}`}>
                        <header>{location.address}</header>
                        <footer>{location.sqft} sq. ft.</footer>

                    </section>
                }
            )
        }
    </article>


    </>
}
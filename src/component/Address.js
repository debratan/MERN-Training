import './Address.css'

function Address({street,city,state,zip}){
    return(
        <div>
            <div className="addressdiv">
                    <h5>Address: </h5>
                    <p className="street">Street: {street}</p>
                    <p className="city">City: {city}</p>
                    <p className="state">State: {state}</p>
                    <p className="zip">Zip: {zip}</p>
            </div>
        </div>
    );
}

export default Address;
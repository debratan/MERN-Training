import Address from './Address';
import './UserProfile.css'

function UserProfile({name,email,address}){
    return(
        <div>
            <div className="profilediv">
                <div className="details">
                    <p className="name">Name: {name}</p>
                    <p className="email">Email: {email}</p>
                    <Address street={address.street} city={address.city} state={address.state} zip={address.zip}/>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;
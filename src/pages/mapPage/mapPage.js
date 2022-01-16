import { Component, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context";
import { Map, GoogleApiWrapper } from "google-maps-react";

class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        style={{ width: "100%", height: "100%" }}
        zoom={10}
        initialCenter={{
          lat: 55.751306,
          lng: 37.626457,
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCwzT2S2gLoOYjRSuRAj-3Phn7apFFby34",
})(MapContainer);

// const GisMap = () => {
//   const navigate = useNavigate();
//   const { setIsAuth } = useContext(AuthContext);

//   const logOut = () => {
//     localStorage.removeItem("auth");
//     setIsAuth(false);
//     navigate("/login");
//   };

//   return (
//     <>
//       <div>GisMap</div>
//       <button onClick={logOut}>Log Out</button>
//     </>
//   );
// };

// export default GisMap;

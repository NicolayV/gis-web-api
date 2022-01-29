import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context";
// import { Map, GoogleApiWrapper } from "google-maps-react";
import Box from "@mui/material/Box";

import DrawerUi from "../../component/UI/Drawer";
import styles from "./style";
import { Button } from "@mui/material";
import { Map } from "../../component/Map/Map";
import { useJsApiLoader } from "@react-google-maps/api";
import { MapTiler } from "../../component/MapTiler";

const API_KEY = process.env.REACT_APP_API_KEY;
console.log(API_KEY);

const defaultCenter = {
  lat: -3.745,
  lng: -38.523,
};

const GisMap = () => {
  const navigate = useNavigate();
  const { setIsAuth } = useContext(AuthContext);

  const logOut = () => {
    localStorage.removeItem("auth");
    setIsAuth(false);
    navigate("/login");
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
  });

  return (
    <Box sx={styles.root}>
      <DrawerUi />
      <h1>GisMap</h1>
      <Button variant="outlined" onClick={logOut}>
        Log Out
      </Button>
      <Button onClick={() => navigate("/maptiler")}>MapTiler</Button>

      {/* {isLoaded ? <Map center={defaultCenter} /> : <h3>Loading</h3>} */}
    </Box>
  );
};

export default GisMap;

// class MapContainer extends Component {
//   render() {
//     return (
//       <Map
//         google={this.props.google}
//         style={{ width: "100%", height: "100%" }}
//         zoom={10}
//         initialCenter={{
//           lat: 55.751306,
//           lng: 37.626457,
//         }}
//       />
//     );
//   }
// }

// GoogleApiWrapper({
//   apiKey: "AIzaSyCwzT2S2gLoOYjRSuRAj-3Phn7apFFby34",
// })(MapContainer);

import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context";
import { Map, GoogleApiWrapper } from "google-maps-react";
import Box from "@mui/material/Box";

import DrawerUi from "../../component/UI/Drawer";
import styles from "./style";
import { Button } from "@mui/material";

const GisMap = () => {
  const navigate = useNavigate();
  const { setIsAuth } = useContext(AuthContext);

  const logOut = () => {
    localStorage.removeItem("auth");
    setIsAuth(false);
    navigate("/login");
  };

  return (
    <Box sx={styles.root}>
      <DrawerUi />
      <h1>GisMap</h1>
      <Button variant="outlined" onClick={logOut}>
        Log Out
      </Button>
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

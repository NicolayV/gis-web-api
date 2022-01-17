import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context";
import { Map, GoogleApiWrapper } from "google-maps-react";
import { SideDrawer, DrawerButton } from "../../component/UI/Drawer/";

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

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyCwzT2S2gLoOYjRSuRAj-3Phn7apFFby34",
// })(MapContainer);

const GisMap = () => {
  const navigate = useNavigate();
  const { setIsAuth } = useContext(AuthContext);

  const [drawerToggle, setDrawerToggle] = useState(true);
  const drawerToggleHandler = () =>
    setDrawerToggle((prevDrawerToggle) => !prevDrawerToggle);

  const logOut = () => {
    localStorage.removeItem("auth");
    setIsAuth(false);
    navigate("/login");
  };

  return (
    <>
      <SideDrawer open={drawerToggle} onClose={drawerToggleHandler} />
      <div>GisMap</div>
      <button onClick={logOut}>Log Out</button>
    </>
  );
};

export default GisMap;

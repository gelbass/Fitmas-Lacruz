import { Image, StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

import { COLORS } from "../constants/colors";
import maps from "../constants/maps";

const Mapa = ({ location, children, newStyle }) => {
  const MapPreviewUrl = location
    ? `https://maps.googleapis.com/maps/api/staticmap?center=${location.lat},${location.lng}&zoom=14&size=600x600&maptype=roadmap&markers=color:red%7Clabel:%7C${location.lat},${location.lng}&key=` +
      maps.API_KEY
    : console.log("false");
  console.log(location);
  console.log(MapPreviewUrl);
  return (
    <View>
      {location
        ? <MapView
            style={styles.mapa}
            initialRegion={{
              latitude: location.lat,
              longitude: location.lng,
              latitudeDelta: 0.2,
              longitudeDelta: 0.3
            }}
            // maxZoomLevel={20}
            minZoomLevel={5}
          >
            <Marker
              title="Aqui estoy"
              coordinate={{
                latitude: location.lat,
                longitude: location.lng
              }}
            />
          </MapView>
        : children}
      {/* {location ? <Image source={{ uri: MapPreviewUrl }} style={{...style}} /> : (children)} */}
    </View>
  );
};

export default Mapa;

const styles = StyleSheet.create({
  mapa: { width: "90%", height: 350, margin: 15 }
});

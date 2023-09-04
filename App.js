import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import MapboxGL from '@rnmapbox/maps';

const MapID =
  'pk.eyJ1IjoiZmFraGFyLTE3OSIsImEiOiJjbGQ0YWEzaGUwbzFwM3lvY2g0c3hiNjdjIn0.OVwzViN7nqcml97wn0Xhng';

MapboxGL.setWellKnownTileServer('Mapbox');
MapboxGL.setAccessToken(MapID);
MapboxGL.setTelemetryEnabled(false);

export default App = () => {
  const Coordinates = [66.990501, 24.860966];

  return (
    <View style={styles.page}>
      <StatusBar hidden={true} />
      <View style={styles.container}>
        <MapboxGL.MapView
          style={styles.map}
          attributionEnabled={false}
          logoEnabled={false}>
          <MapboxGL.Camera zoomLevel={11} centerCoordinate={Coordinates} />
          <MapboxGL.PointAnnotation id="point" coordinate={Coordinates} />
        </MapboxGL.MapView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container: {
    height: '100%',
    width: '100%',
  },
  map: {
    flex: 1,
  },
});


  // onUserLocationUpdate={{
  //   latitude: "24.860966",
  //   longitude: "66.990501"
  // }}
  // accessibilityLiveRegion={""}
  // compassEnabled={true}
  // localizeLabels={true}
  // tintColor="red" 
  // compassImage={true}
  // compassViewPosition={100} 

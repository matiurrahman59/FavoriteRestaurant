import React, { useContext, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';
import styled from 'styled-components/native';
import { LocationContext } from '../../../services/location/locationContext';
import { RestaurantsContext } from '../../../services/restaurants/restaurantContext';
import MapToolTip from '../components/maptooltip';
import Search from '../components/search';

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);

  const [latDelta, setLatDelta] = useState(0);

  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          {
            return (
              <Marker
                key={restaurant.name}
                title={restaurant.name}
                coordinate={{
                  latitude: restaurant.geometry.location.lat,
                  longitude: restaurant.geometry.location.lng,
                }}
              >
                <Callout
                  onPress={() =>
                    navigation.navigate('RestaurantDetails', {
                      restaurant,
                    })
                  }
                >
                  <MapToolTip restaurant={restaurant} />
                </Callout>
              </Marker>
            );
          }
        })}
      </Map>
    </>
  );
};

export default MapScreen;

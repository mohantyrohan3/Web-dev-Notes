const mongoose = require('mongoose');

// Define schema for a location using GeoJSON
const geoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: {
      type: String,   // GeoJSON type (e.g., 'Point')
      enum: ['Point'], // Must be 'Point'
      required: true
    },
    coordinates: {
      type: [Number],  // Array of numbers [longitude, latitude]
      required: true
    }
  }
});

// Create a 2dsphere index for the location field to allow geospatial queries
geoSchema.index({ location: '2dsphere' });

const GeoModel = mongoose.model('GeoModel', geoSchema);

module.exports = GeoModel;





const place = new GeoModel({
  name: 'Central Park',
  location: {
    type: 'Point',
    coordinates: [-73.968285, 40.785091]  // [longitude, latitude]
  }
});

place.save()
  .then(() => console.log('Location saved successfully!'))
  .catch(err => console.error('Error saving location:', err));






GeoModel.find({
  location: {
    $near: {
      $geometry: {
        type: "Point",
        coordinates: [-73.935242, 40.730610]  // Target location
      },
      $maxDistance: 10000  // Maximum distance in meters (10 km)
    }
  }
})
  .then(places => console.log('Nearby places:', places))
  .catch(err => console.error('Error finding places:', err));

















import { useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

function RealTimeLocationTracker() {
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          socket.emit('update-location', {
            userId: "123",  // Unique user ID
            location: {
              type: "Point",
              coordinates: [longitude, latitude]  // GeoJSON format
            }
          });
        },
        (error) => console.log(error),
        {
          enableHighAccuracy: true,
          maximumAge: 10000,
          timeout: 10000
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }

    // Listen for real-time location updates from the server
    socket.on('location-updated', (data) => {
      console.log("Real-time location update:", data);
    });

    return () => socket.disconnect();
  }, []);

  return <div>Real-time location tracking...</div>;
}

export default RealTimeLocationTracker;
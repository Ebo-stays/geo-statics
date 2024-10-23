const hotels = [
    {
      name: "Antonio Resort ",
      numberOfRooms: 150,
      starRating: 3,
      distanceFromBeach: "100m",
      amenities: ["Swimming Pool", "Free WiFi", "Spa", "Gym", "Restaurant", "Bar", "Free Parking"],
      roomTypes: [
        { type: "Deluxe Room", price: 200 },
        { type: "Suite", price: 350 },
        { type: "Family Room", price: 400 }
      ],
      image: "https://via.placeholder.com/400x300?text=Ocean+Breeze+Resort"
    },
    {
      name: "   Aqua Grandiosa Resort",
      numberOfRooms: 80,
      starRating: 3,
      distanceFromBeach: "20km",
      amenities: ["Mountain View", "Hiking Trails", "Free WiFi", "Free Breakfast", "Barbecue Area", "Free Parking"],
      roomTypes: [
        { type: "Standard Room", price: 120 },
        { type: "Superior Room", price: 180 },
        { type: "Cottage", price: 250 }
      ],
      image: "https://via.placeholder.com/400x300?text=Mountain+View+Retreat"
    },
    {
      name: "Cityscape Inn",
      numberOfRooms: 200,
      starRating: 4,
      distanceFromBeach: "10km",
      amenities: ["Conference Room", "Free WiFi", "Rooftop Bar", "Gym", "Business Center", "Free Breakfast"],
      roomTypes: [
        { type: "Single Room", price: 100 },
        { type: "Double Room", price: 150 },
        { type: "Executive Suite", price: 300 }
      ],
      image: "https://via.placeholder.com/400x300?text=Cityscape+Inn"
    },
    {
      name: "Sunset Villas",
      numberOfRooms: 50,
      starRating: 3,
      distanceFromBeach: "300m",
      amenities: ["Private Beach", "Swimming Pool", "Free Parking", "Restaurant", "Pet-Friendly"],
      roomTypes: [
        { type: "Standard Villa", price: 250 },
        { type: "Luxury Villa", price: 400 }
      ],
      image: "https://via.placeholder.com/400x300?text=Sunset+Villas"
    },
    {
      name: "Seaside Luxury Hotel",
      numberOfRooms: 180,
      starRating: 5,
      distanceFromBeach: "50m",
      amenities: ["Private Beach", "Infinity Pool", "Spa", "Gym", "Multiple Restaurants", "Free WiFi", "Valet Parking"],
      roomTypes: [
        { type: "Deluxe Room", price: 300 },
        { type: "Ocean View Suite", price: 500 },
        { type: "Presidential Suite", price: 1000 }
      ],
      image: "https://via.placeholder.com/400x300?text=Seaside+Luxury+Hotel"
    },
    {
      name: "Lakeside Lodge",
      numberOfRooms: 60,
      starRating: 4,
      distanceFromBeach: "15km",
      amenities: ["Lake View", "Fishing", "Hiking", "Free Parking", "Free Breakfast", "WiFi", "Spa"],
      roomTypes: [
        { type: "Cottage", price: 180 },
        { type: "Lodge Suite", price: 250 },
        { type: "Family Room", price: 300 }
      ],
      image: "https://via.placeholder.com/400x300?text=Lakeside+Lodge"
    },
    {
      name: "Urban Escape Hotel",
      numberOfRooms: 120,
      starRating: 4,
      distanceFromBeach: "12km",
      amenities: ["Rooftop Pool", "Free WiFi", "Gym", "Conference Rooms", "Business Center", "Free Parking"],
      roomTypes: [
        { type: "Standard Room", price: 140 },
        { type: "Deluxe Room", price: 220 },
        { type: "Executive Suite", price: 400 }
      ],
      image: "https://via.placeholder.com/400x300?text=Urban+Escape+Hotel"
    },
    {
      name: "Tropical Paradise Resort",
      numberOfRooms: 220,
      starRating: 5,
      distanceFromBeach: "20m",
      amenities: ["Private Beach", "Water Sports", "Swimming Pool", "Gym", "Spa", "Multiple Restaurants", "Free WiFi", "Free Breakfast"],
      roomTypes: [
        { type: "Tropical Room", price: 280 },
        { type: "Oceanfront Suite", price: 450 },
        { type: "Private Villa", price: 700 }
      ],
      image: "https://via.placeholder.com/400x300?text=Tropical+Paradise+Resort"
    },
    {
      name: "City Comfort Hotel",
      numberOfRooms: 100,
      starRating: 3,
      distanceFromBeach: "8km",
      amenities: ["Free WiFi", "Gym", "Free Parking", "Restaurant", "Bar"],
      roomTypes: [
        { type: "Single Room", price: 90 },
        { type: "Double Room", price: 140 }
      ],
      image: "https://via.placeholder.com/400x300?text=City+Comfort+Hotel"
    },
    {
      name: "Royal Garden Resort",
      numberOfRooms: 250,
      starRating: 5,
      distanceFromBeach: "500m",
      amenities: ["Private Beach", "Golf Course", "Spa", "Swimming Pool", "Gym", "Tennis Courts", "Multiple Restaurants", "Free WiFi"],
      roomTypes: [
        { type: "Garden View Room", price: 250 },
        { type: "Royal Suite", price: 600 },
        { type: "Presidential Villa", price: 1200 }
      ],
      image: "https://via.placeholder.com/400x300?text=Royal+Garden+Resort"
    },
    {
      name: "Beachside Bungalow Hotel",
      numberOfRooms: 40,
      starRating: 4,
      distanceFromBeach: "50m",
      amenities: ["Private Bungalows", "Free Parking", "Swimming Pool", "Restaurant", "Free WiFi", "Pet-Friendly"],
      roomTypes: [
        { type: "Bungalow", price: 180 },
        { type: "Luxury Bungalow", price: 350 }
      ],
      image: "https://via.placeholder.com/400x300?text=Beachside+Bungalow+Hotel"
    },
    {
      name: "Grand Palace Hotel",
      numberOfRooms: 300,
      starRating: 5,
      distanceFromBeach: "2km",
      amenities: ["Casino", "Luxury Spa", "Indoor Pool", "Gym", "Multiple Restaurants", "Business Center", "Free WiFi"],
      roomTypes: [
        { type: "Standard Room", price: 200 },
        { type: "Luxury Suite", price: 450 },
        { type: "Penthouse", price: 900 }
      ],
      image: "https://via.placeholder.com/400x300?text=Grand+Palace+Hotel"
    },
    {
      name: "Harborview Inn",
      numberOfRooms: 75,
      starRating: 4,
      distanceFromBeach: "150m",
      amenities: ["Harbor View", "Free Breakfast", "Free Parking", "WiFi", "Restaurant"],
      roomTypes: [
        { type: "Single Room", price: 110 },
        { type: "Double Room", price: 160 },
        { type: "Suite", price: 280 }
      ],
      image: "https://via.placeholder.com/400x300?text=Harborview+Inn"
    },
    {
      name: "Coastal Comfort Suites",
      numberOfRooms: 90,
      starRating: 3,
      distanceFromBeach: "1km",
      amenities: ["Free WiFi", "Free Parking", "Swimming Pool", "Restaurant", "Family Friendly"],
      roomTypes: [
        { type: "Standard Suite", price: 150 },
        { type: "Family Suite", price: 200 }
      ],
      image: "https://via.placeholder.com/400x300?text=Coastal+Comfort+Suites"
    },
    {
      name: "Island Getaway Resort",
      numberOfRooms: 200,
      starRating: 5,
      distanceFromBeach: "5m",
      amenities: ["Private Island", "Water Sports", "Spa", "Gym", "Multiple Restaurants", "Free Breakfast", "Free WiFi"],
      roomTypes: [
        { type: "Island View Room", price: 400 },
        { type: "Beachfront Suite", price: 600 },
        { type: "Overwater Bungalow", price: 1200 }
      ],
      image: "https://via.placeholder.com/400x300?text=Island+Getaway+Resort"
    },
    {
      name: "Serene Sands Hotel",
      numberOfRooms: 80,
      starRating: 4,
      distanceFromBeach: "250m",
      amenities: ["Beach Access", "Free WiFi", "Gym", "Restaurant", "Bar", "Spa"],
      roomTypes: [
        { type: "Standard Room", price: 130 },
        { type: "Deluxe Room", price: 220 },
        { type: "Suite", price: 350 }
      ],
      image: "https://via.placeholder.com/400x300?text=Serene+Sands+Hotel"
    },
    {
      name: "Blue Horizon Hotel",
      numberOfRooms: 180,
      starRating: 4,
      distanceFromBeach: "200m",
      amenities: ["Free WiFi", "Rooftop Pool", "Gym", "Restaurant", "Free Parking"],
      roomTypes: [
        { type: "Standard Room", price: 160 },
        { type: "Deluxe Room", price: 240 },
        { type: "Penthouse Suite", price: 600 }
      ],
      image: "https://via.placeholder.com/400x300?text=Blue+Horizon+Hotel"
    },
    {
      name: "Emerald Bay Resort",
      numberOfRooms: 240,
      starRating: 5,
      distanceFromBeach: "10m",
      amenities: ["Private Beach", "Luxury Spa", "Gym", "Multiple Restaurants", "Free Breakfast", "Free WiFi"],
      roomTypes: [
        { type: "Garden View Room", price: 300 },
        { type: "Beachfront Suite", price: 550 },
        { type: "Presidential Villa", price: 1200 }
      ],
      image: "https://via.placeholder.com/400x300?text=Emerald+Bay+Resort"
    },
    {
      name: "Golden Sands Resort",
      numberOfRooms: 300,
      starRating: 5,
      distanceFromBeach: "50m",
      amenities: ["Private Beach", "Water Park", "Gym", "Multiple Restaurants", "Free WiFi", "Free Breakfast"],
      roomTypes: [
        { type: "Standard Room", price: 250 },
        { type: "Luxury Suite", price: 600 },
        { type: "Family Room", price: 450 }
      ],
      image: "https://via.placeholder.com/400x300?text=Golden+Sands+Resort"
    },
    {
      name: "Paradise Cove Hotel",
      numberOfRooms: 210,
      starRating: 5,
      distanceFromBeach: "100m",
      amenities: ["Private Beach", "Infinity Pool", "Gym", "Spa", "Free WiFi", "Multiple Restaurants", "Free Breakfast"],
      roomTypes: [
        { type: "Oceanfront Room", price: 300 },
        { type: "Luxury Suite", price: 500 },
        { type: "Presidential Suite", price: 1100 }
      ],
      image: "https://via.placeholder.com/400x300?text=Paradise+Cove+Hotel"
    }
  ];
  
  export default hotels;
  
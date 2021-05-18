const listings = [
  {
    id: 201,
    title: "Petrol Import From Romania",
    images: [{ fileName: "petrol1" }],
    price: 320,
    categoryId: 2,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 3,
    title: "Bitumen Export To Odessa, Ukraine",
    images: [{ fileName: "petrol1" }],
    categoryId: 2,
    price: 190,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 1,
    title: "Coal Domestic Transportation",
    description:
      "Domestic job in Moldova",
    images: [
      { fileName: "petrol1" },
      { fileName: "petrol1" },
      { fileName: "petrol1" },
    ],
    price: 120,
    categoryId: 1,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 2,
    title: "Plane Jet Import From Belarus",
    images: [{ fileName: "petrol1" }],
    categoryId: 2,
    price: 360,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 102,
    title: "Wood Domestic Transportation",
    images: [{ fileName: "petrol1" }],
    price: 120,
    categoryId: 1,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 101,
    title: "Soil Domestic Transportation",
    images: [{ fileName: "petrol1" }],
    price: 120,
    categoryId: 1,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 4,
    title: "Fruit Supplies Import From Tukey",
    description: "Import job from Turkey to Moldova.",
    images: [{ fileName: "petrol1" }],
    categoryId: 2,
    price: 220,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 6,
    title: "Propane Gas Export To Iasi, Romania",
    images: [{ fileName: "couch4" }],
    categoryId: 2,
    price: 210,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
];

const addListing = (listing) => {
  listing.id = listings.length + 1;
  listings.push(listing);
};

const getListings = () => listings;

const getListing = (id) => listings.find((listing) => listing.id === id);

const filterListings = (predicate) => listings.filter(predicate);

module.exports = {
  addListing,
  getListings,
  getListing,
  filterListings,
};

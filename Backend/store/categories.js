const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "home",
    label: "Domestic",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "earth",
    label: "International",
    value: 2,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    value: 3,
  },
];

const getCategories = () => categories;

const getCategory = id => categories.find(c => c.id === id);

module.exports = {
  getCategories,
  getCategory
};

// data.js
import fastenerData from "./fastenerData";
import hardwareData from "./hardwareData";
import chemicalData from "./chemicalData";
import waterData from "./waterData";

// Tüm ürünleri birleştir
const allProducts = [
  ...fastenerData,
  ...hardwareData,
  ...chemicalData,
  ...waterData,
];

export default allProducts;

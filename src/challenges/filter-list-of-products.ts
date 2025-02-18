type Product = {
  name: string;
  value: number;
};

/**
 * Filter a list of products by a max value and a min value
 * 
 * @param products The list of products
 * @param maxValue The max value
 * @param minValue The min value
 * @returns The list of products filtered by the max value and the min value
 */
export function filterListOfProducts(
  products: Product[],
  maxValue: number,
  minValue: number
) {
  if (products.length === 0) {
    throw new Error("Products array is empty")  ;
  }

  if (maxValue < 0 || minValue < 0) {
    throw new Error("Max value or min value is less than 0");
  }

  if (maxValue < minValue) {
    throw new Error("Max value is less than min value");
  }

  const result = products.filter(
    (product) => product.value <= maxValue && product.value >= minValue
  );

  return result;
}

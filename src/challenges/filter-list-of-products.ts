type Product = {
  name: string;
  value: number;
};

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

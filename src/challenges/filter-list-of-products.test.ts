import { filterListOfProducts } from "./filter-list-of-products";

describe("Filter List of Products", () => {
  it("should return a list of products", () => {
    const products = [
      { name: "Product 1", value: 10 },
      { name: "Product 2", value: 20 },
      { name: "Product 3", value: 30 },
    ];

    const result = filterListOfProducts(products, 10, 1);

    expect(result).toEqual([{ name: "Product 1", value: 10 }]);
  });

  it("should throw an error if the products array is empty", () => {
    const products: never[] = [];

    expect(() => filterListOfProducts(products, 10, 1)).toThrow(
      "Products array is empty"
    );
  });

  it("should throw an error if the max value is less than the min value", () => {
    const products = [
      { name: "Product 1", value: 10 },
      { name: "Product 2", value: 20 },
      { name: "Product 3", value: 30 },
    ];

    expect(() => filterListOfProducts(products, 1, 10)).toThrow(
      "Max value is less than min value"
    );
  });

  it("should throw an error if the max value or min value is less than 0", () => {
    const products = [
      { name: "Product 1", value: 10 },
      { name: "Product 2", value: 20 },
      { name: "Product 3", value: 30 },
    ];

    expect(() => filterListOfProducts(products, -10, 1)).toThrow(
      "Max value or min value is less than 0"
    );
  });
});

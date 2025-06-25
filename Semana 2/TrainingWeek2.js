console.log("Data management with sets and maps");

// Define the products object

let products = {
    1: { id: 1, name: "Laptop", price: 1500 },
    2: { id: 2, name: "Mouse", price: 25 },
    3: { id: 3, name: "Keyboard", price: 50 }
};

console.log("Products object:", products);

// Create a Set with unique product names

let productSet = new Set(Object.values(products).map(product => product.name));
console.log("Set of unique products:", productSet);


// Create a Map to assign categories to products

let productMap = new Map([
    ["Electronics", ["Laptop"]],
    ["Accessories", ["Mouse", "Keyboard"]]
]);

console.log("Map of categories and products:", productMap);

// Iterate over the products object

for (let id in products) {
    console.log("Single product:", products[id]);
}

// Iterate over the Map of products

productMap.forEach((items, category) => {
    items.forEach(item => {
        console.log(`Category: ${category}, Product: ${item}`);
    });
});


console.log("Data management tests completed");
console.log("Products list (Object):", products);
console.log("Unique products list (Set):", productSet);
console.log("Categories and products (Map):", productMap);

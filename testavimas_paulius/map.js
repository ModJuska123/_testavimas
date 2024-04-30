//create new map

const fruitMap = new Map();

//Adding key-values
fruitMap.set("a", "apple");
fruitMap.set("b", "banana");
fruitMap.set("c", "orange");
fruitMap.set("d", "pay");
fruitMap.set("e", "apple");

//chech the size of map
console.log("Size of fruitMap: ", fruitMap.size);

//assessing value by key
console.log(fruitMap.get("b"));

//chech if key exist in the map
console.log(fruitMap.has("c"));
console.log(fruitMap.has("z"));

//delete
fruitMap.delete("a");


// Function to count the frequency of elements in an array using a Map

function countElementFrequency(arr) {
  const frequencyMap = new Map();
  arr.forEach((element) => {
    frequencyMap.set(element, (frequencyMap.get(element) || 0) + 1);
  });
  return frequencyMap;
}
// Sample array with elements
const vehicles = ['car', 'truck', 'car', 'bike', 'car', 'bike', 'truck'];

// Call the function to count element frequency
const elementFrequency = countElementFrequency(vehicles);
elementFrequency.forEach((count, element) => {
  console.log(`${element}: ${count} time(s)`);
});
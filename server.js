
// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function main() {
//   while(true) {
//     console.log("Microservices rock!");
//     await sleep(5000);
//   }
// }

// main();

const favoriteFood = process.env.FAVORITE_FOOD;
console.log(`My favorite food is ${favoriteFood}`);

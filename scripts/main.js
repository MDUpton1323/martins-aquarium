// The main JavaScript file for handling the aquarium functionality.

//This code ensures that the fishList function is imported from the fishList.js module and called to generate the fish list in the aquarium showcase
import { generateFishHTML } from "./fishList.js";
//This code ensures that the tipList function is imported from the tipList.js module and called to generate the tip list in the aquarium showcase
// import { tipList } from "./tipList.js";
//This code ensures that the locationList function is imported from the locationList.js module and called to generate the locations list in the aquarium showcase
// import { locationList } from "./locationList.js";

// Generate the HTML markup for the fish list based on the aquariumData.
const fishHTML = generateFishHTML();
document.getElementById("fishList").innerHTML = fishHTML;
// Generate the care tips
// const tipHTML = tipList();

// Generate the location list
// const locationHTML = locationList();

// Render each HTML string to the correct DOM element

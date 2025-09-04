// The main JavaScript file for handling the aquarium functionality.

//This code ensures that the fishList function is imported from the fishList.js module and called to generate the fish list in the aquarium showcase
import { generateFishHTML } from "./fishList.js";
//This code ensures that the tipList function is imported from the tipList.js module and called to generate the tip list in the aquarium showcase
import { generateTipHTML } from "./tipList.js";
// import { tipList } from "./tipList.js";
//This code ensures that the locationList function is imported from the locationList.js module and called to generate the locations list in the aquarium showcase
import { generateLocationsHTML } from "./locationList.js";
// import { locationList } from "./locationList.js";

// Generate the HTML markup for the fish list based on the aquariumData.
const fishHTML = generateFishHTML();
document.getElementById("fishList").innerHTML = fishHTML;
// Generate the care tips
// const tipHTML = tipList();
const tipHTML = generateTipHTML();
document.getElementById("tipList").innerHTML = tipHTML;
// Generate the location list
// const locationHTML = locationList();
const locationHTML = generateLocationsHTML();
document.getElementById("locationList").innerHTML = locationHTML;
// Render each HTML string to the correct DOM element

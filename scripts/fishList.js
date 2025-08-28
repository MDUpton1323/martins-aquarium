// File to handle the rendering of the fish list.
import { database } from "./aquariumData.js";

export const fishList = (fishHTML) => {
  // Generate an HTML representation of each fish
  const fishList = document.getElementById("fish-list");

  if (fishList) {
    fishList.innerHTML = fishHTML;
  } else {
    console.log("Could not find element with id fish-list");
  }
};

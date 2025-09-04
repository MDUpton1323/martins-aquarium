// File to handle the rendering of the care tips.
import { database } from "./aquariumData.js";

export const generateTipHTML = () => {
  // Generate an HTML representation of each fish
  // initialize an empty string variable called fishHTML to store the generated HTML markup.
  let tipHTML = "";

  for (const tip of database.tips) {
    tipHTML += `
               <ul class="Tips">
               <li class="tip">${tip.text}</li>
       `;
  }
  tipHTML += `</ul>`;
  return tipHTML;
};

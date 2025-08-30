// File to handle the rendering of the fish list.
import { database } from "./aquariumData.js";
// define a function called generateFishHTML using an arrow function syntax.
export const generateFishHTML = () => {
  // Generate an HTML representation of each fish
  // initialize an empty string variable called fishHTML to store the generated HTML markup.
  let fishHTML = "";

  for (const fish of database.fish) {
    fishHTML += `
           <article class="Fish">
               <img src="${fish.image}" alt="${fish.name} name" class="fish__name">
               <div class="fish__details">
                   <h2 class="fish__name">${fish.name}</h2>
                   <p class="fish__species">${fish.species}</p>
               </div>
           </article>
       `;
  }
  return fishHTML;
};

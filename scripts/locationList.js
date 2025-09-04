// File to handle the rendering of the location list.
import { database } from "./aquariumData.js";

export const generateLocationsHTML = () => {
  // Generate an HTML representation of each fish
  // initialize an empty string variable called fishHTML to store the generated HTML markup.
  let locationHTML = "";

  for (const location of database.locations) {
    locationHTML += `
           <article class="Locations">
               <section class="locations__details">
                   <h2 class="location__name">${location.name}</h2>
                   <p class="location__description">${location.description}</p>
               </section>
           </article>
       `;
  }
  return locationHTML;
};

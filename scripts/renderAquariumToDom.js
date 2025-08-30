// This module will contain the logic to render the fish list to the DOM.
// define a function called renderAquariumToDOM that accepts a parameter fishHTML, which represents the HTML markup of the fish list.
export const renderAquariumToDOM = (fishHTML) => {
  // we use document.getElementById('fish-list') to select the DOM element with the ID "fish-list".
  const fishList = document.getElementById("fish-list");

  if (fishList) {
    fishList.innerHTML = fishHTML;
  } else {
    // We log an error message to the console using console.error() if no element with the ID “fish-list” is found. This helps identify and debug issues related to missing or incorrect DOM elements.
    console.error('Could not find element with id "fish-list"');
  }
};

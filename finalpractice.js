// 1. VALUES, DATA TYPES, & OPERATIONS 

let activeCases = 10; // Skill: Using a Number and a Boolean to track application state.
let isEmergencyModeActive = true;
// Pseudocode: Initialize the total number of active cases and a status for the alert system.
console.log("Current Active Cases:", activeCases);
console.log("System Status (Emergency Mode):", isEmergencyModeActive);

// 2. STRINGING CHARACTERS TOGETHER

const personName = "Easton";
const lastSeenLocation = "Central Park";
const profileSummary = `URGENT: ${personName} was last seen at ${lastSeenLocation}.`;// Skill: Using Template Literals 
// Pseudocode: Combine strings and variables to create a summary message for a profile.
console.log("Profile Summary:", profileSummary);

// 3. CONTROL STRUCTURES AND LOGIC 
let hoursMissing = 5;
if (hoursMissing < 24) // Skill: Logic check using the 'less than' operator
    {
  console.log("Priority Status: Critical (Gold Alert)");// Skill: Using if/else statements with Comparison Operators.
} else {
  console.log("Priority Status: Standard Search");
}
// Pseudocode: Determine the priority of a case based on how many hours have passed.


// 4. BUILDING ARRAYS
const physicalFeatures = ["Blue hat", "Silver glasses", "Green jacket"]; // Skill: Array Initialization // Skill: Creating an array of strings.
console.log("Identification Features:", physicalFeatures);
// Pseudocode: Create a list of physical descriptors to help identify a missing person.

// 5. WORKING WITH LOOPS
console.log("Printing Flyer Details:");
for (let i = 0; i < physicalFeatures.length; i++) { // Skill: Loop through the array until the end of its length
  console.log("- " + physicalFeatures[i]);// Skill: Using a for loop to iterate through data.
}
// Pseudocode: Loop through the features array to print each item individually for a flyer.

// 6. USING ARRAYS
const sightingHistory = ["1st St", "Oak Ave"];
sightingHistory.push("Maple Drive"); // Skill: Adding an element to an existing array // Skill: Using Array Methods (like .push) to update data.
console.log("Updated Sighting History:", sightingHistory);
// Pseudocode: Add a new sighting location to the search history when a report comes in.
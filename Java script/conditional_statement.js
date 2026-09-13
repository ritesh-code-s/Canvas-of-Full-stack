

// cheacking if string is equal to another string.


let user1 = "String piyo ge";
let user2 = "String piyo ge";
let user3 = "Kaam kar le";


if (user1 == user2) {
    console.log("Ji ye dono to string ke divane hai");
}
else if (user1 == user3) {

    console.log("Ji kuch nahi ho sakta aap ka");
}

else {
    console.log("Ghee khatam");
}

// Checking where array is empty or not.

let Requriment_for_web = [];
let Requriment_for_App = ["Kotlin", "Android-studio"];

if (Requriment_for_web === 0 && Requriment_for_App === 0) {
    console.log("This is empty array");
}

else {
    console.log("These array have some elements");
}
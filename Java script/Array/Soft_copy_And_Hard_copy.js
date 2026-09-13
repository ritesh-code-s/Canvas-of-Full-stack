

// soft copy;

let fav_anime = ["One pice", "A O T", "M H A", "Naruto", "Horimiya",];

let Copy_Fav_Anime = fav_anime;
console.log(Copy_Fav_Anime);

fav_anime.pop();

console.log(fav_anime);
console.log(Copy_Fav_Anime);

// Hard copy

let fav_char_in_MCU = ["Thor", "Iron-Man", "Spider-man", "Dr-strange", "Wanda"];

let hard_copy = [...fav_char_in_MCU];

fav_char_in_MCU.pop();

console.log(fav_char_in_MCU);
console.log(hard_copy);
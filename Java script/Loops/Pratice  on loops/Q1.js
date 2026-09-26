let Anime_character = ["Midorya", "Bakugo", "Naruto", "Sauske", "Goku", "Vegeta"];
let New_list = [];

for (i = 0; i < Anime_character.length; i++) {
    if (Anime_character[i] === "Sauske") {

        break;
    }
    New_list.push(Anime_character[i]);
}

console.log(New_list);

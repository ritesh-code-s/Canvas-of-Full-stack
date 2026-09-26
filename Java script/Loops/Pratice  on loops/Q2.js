let Anime_character = ["Midorya", "Bakugo", "Naruto", "Sauske", "Goku", "Vegeta"];
let Skip = [];

for (i = 0; i < Anime_character.length; i++) {

    if (Anime_character[i] === "Goku") {
        continue;
    }
    Skip.push(Anime_character[i]);
}

console.log(Skip);
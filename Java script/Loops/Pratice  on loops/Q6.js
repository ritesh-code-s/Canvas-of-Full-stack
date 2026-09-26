let Anime_Poplarity = {

    Dragon_Ball: 70000000,
    One_Pice: 6999999999,
    One_Punch: 688888888,
    AOT: 999999999,
    Naruto: 9999999998,
    Bleach: 88888888888
}

let New_Obj = {}

for (const i in Anime_Poplarity) {
    if (Anime_Poplarity[i] <= 9999999998) {
        continue;
    }

    New_Obj[i] = Anime_Poplarity[i];
}

console.log(New_Obj);
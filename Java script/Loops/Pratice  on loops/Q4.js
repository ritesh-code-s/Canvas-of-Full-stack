let country = ["India", "Japan", "England", "America", "Nepal", "China"];

let New = [];

for (const i of country) {

    if (i === "Nepal") {
        continue;
    }
    New.push(i);
}

console.log(New);
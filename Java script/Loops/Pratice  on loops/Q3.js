let Number = [1, 2, 3, 4, 5, 6];
let New = [];

for (const i of Number) {

    if (i === 4) {
        break;
    }

    New.push(i);
}

console.log(New);


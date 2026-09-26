
let Things_Need_for_Study = ["Study table", "Pen", "Note book", "Girl-friend", "Motivation", "Really in mood to study"];

let IN_my_Case = [];

Things_Need_for_Study.forEach(function (Study) {

    if (Study == "Girl-friend") {
        return;
    }
    IN_my_Case.push(Study);
});

console.log(IN_my_Case);
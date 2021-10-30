// Первое задание

function funcName(loremString) {
    let str = loremString.trim().toLowerCase();
    return str.includes("lorem") || str.includes("ipsum") || str.includes("amet");
}

console.log(funcName(" hi Lored DDAmet"))

//Второе задание

function funcName2(str) {
    return str[0].toUpperCase() + str.substr(1);
}

console.log(funcName2("hello"));

//Третье задание

function funcName3(str, maxLength) {
    if (str.length > maxLength) {
        return str.substr(0, maxLength) + "...";
    } else {
        return str;
    }
}

console.log(funcName3("Привяо", 3));

//Четвертое задание

let myLifeMotto = ["Я", "ничего", "не", "понимаю", "в", "JavaScript"];

myLifeMotto.splice(0, 1);
myLifeMotto.splice(2, 3, "делать", "для", "лохов");

console.log(myLifeMotto);

// Пятое задание

let harryPotterTeam = ["Albus", "Hermione", "Ronald", "Draco", "Neville"];
let TeamA = [];
let TeamH = [];

harryPotterTeam.forEach((item) => {
    if (item.toLowerCase().includes("a")) {
        TeamA.push(item)
    }
    if (item.toLowerCase().includes("h")) {
        TeamH.push(item)
    }
});

console.log(TeamA);
console.log(TeamH);

// Шестое задание

let arr = [6, 3, "ten", 12, true, "4"];
let sum = 0;
let prod = 1;

arr.forEach((item) => {
    if (typeof item == "number") {
        sum += item;
        prod *= item;
    }
})

console.log(sum, prod);

// Седьмое задание

let numArr = [1, 3, 5, 7, 9];

let newArr = numArr.map(item => Math.pow(item, 2))

console.log(newArr);


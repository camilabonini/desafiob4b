import "./styles.css";
let active = 1;

let groupOne = [
    { name: "Robert Plant", color: "red" },
    { name: "John Bonham", color: "blue" },
    { name: "Jimmy Page", color: "green" },
    { name: "John Paul Jones", color: "yellow" }
];

let groupTwo = [
    { name: "Kurt Cobain", color: "purple" },
    { name: "Dave Grohl", color: "grey" },
    { name: "Krist Novoselic", color: "fucshia" }
];

let groupThree = [
    { name: "John Lennon", color: "lime" },
    { name: "Paul McCartney", color: "magenta" },
    { name: "Ringo Starr", color: "lavender" },
    { name: "George Harrison", color: "salmon" }
];

const buttonOne = document.getElementById("group-one");
const buttonTwo = document.getElementById("group-two");
const buttonThree = document.getElementById("group-three");

const buttonName = document.getElementById("name");
const buttonColor = document.getElementById("color");
const buttonReset = document.getElementById("reset");

const title = document.getElementById("title");

let ulOne = document.getElementById("list-one");

function populate(group) {
    ulOne.innerHTML = "";
    group.forEach(function (item) {
        let li = document.createElement("li");
        li.innerHTML = `<li style="background-color:${item.color}">${item.name}</li>`;
        ulOne.appendChild(li);
    });
}

function orderAlpha(active) {
    ulOne.innerHTML = "";
    if (active === 1) {
        groupOne.sort((a, b) =>
            a.name.localeCompare(b.name, "es", { sensitivity: "base" })
        );
        populate(groupOne);
    } else if (active === 2) {
        groupTwo.sort((a, b) =>
            a.name.localeCompare(b.name, "es", { sensitivity: "base" })
        );
        populate(groupTwo);
    } else {
        groupThree.sort((a, b) =>
            a.name.localeCompare(b.name, "es", { sensitivity: "base" })
        );
        populate(groupThree);
    }
}

function orderColor(active) {
    ulOne.innerHTML = "";
    if (active === 1) {
        groupOne.sort((a, b) =>
            a.color.localeCompare(b.color, "es", { sensitivity: "base" })
        );
        populate(groupOne);
    } else if (active === 2) {
        groupTwo.sort((a, b) =>
            a.color.localeCompare(b.color, "es", { sensitivity: "base" })
        );
        populate(groupTwo);
    } else {
        groupThree.sort((a, b) =>
            a.color.localeCompare(b.color, "es", { sensitivity: "base" })
        );
        populate(groupThree);
    }
}

function resetGroup(active) {
    ulOne.innerHTML = "";
    if (active === 1) {
        groupOne = [
            { name: "Robert Plant", color: "red" },
            { name: "John Bonham", color: "blue" },
            { name: "Jimmy Page", color: "green" },
            { name: "John Paul Jones", color: "yellow" }
        ];
        populate(groupOne);
    } else if (active === 2) {
        groupTwo = [
            { name: "Kurt Cobain", color: "purple" },
            { name: "Dave Grohl", color: "grey" },
            { name: "Krist Novoselic", color: "fucshia" }
        ];
        populate(groupTwo);
    } else {
        groupThree = [
            { name: "John Lennon", color: "lime" },
            { name: "Paul McCartney", color: "magenta" },
            { name: "Ringo Starr", color: "lavender" },
            { name: "George Harrison", color: "salmon" }
        ];
        populate(groupThree);
    }
}

buttonOne.onclick = function () {
    title.innerHTML = "Grupo 1";
    populate(groupOne);
    active = 1;
};

buttonTwo.onclick = function () {
    title.innerHTML = "Grupo 2";
    populate(groupTwo);
    active = 2;
};

buttonThree.onclick = function () {
    title.innerHTML = "Grupo 3";
    populate(groupThree);
    active = 3;
};

buttonName.onclick = function () {
    orderAlpha(active);
};

buttonColor.onclick = function () {
    orderColor(active);
};

buttonReset.onclick = function () {
    resetGroup(active);
};

(function () {
    populate(groupOne);
    title.innerHTML = "Grupo 1";
})();
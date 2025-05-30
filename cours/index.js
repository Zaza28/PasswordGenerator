//Rappel des types de données :
let string = "chaine de caractères";
let number = 27;
let boolean = true;

//Tableaux :
let array = ["Bordeaux", "Toulouse", "Nantes"];
// console.log(array[0][3]);

let array2 = ["Bordeaux", 24, true, [1, 2], { nom: "Denis" }];
// console.log(array2[4].nom);

let objet = {
  pseudo: "Zaïneb",
  age: 27,
  technos: ["Javascript", "React", "NodeJs"],
  admin: false,
};
// objet.adresse = "1 rue Guy de Maupassant";
// console.log(objet);

//Les Données :
let data = [
  {
    pseudo: "Zaïneb",
    age: 27,
    technos: ["Javascript", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Samia",
    age: 24,
    technos: ["Javascript", "React", "CSS"],
    admin: false,
  },
  {
    pseudo: "Samuel",
    age: 42,
    technos: ["PHP", "React", "NodeJs"],
    admin: true,
  },
];
// console.log(data[2].pseudo);
//----------------------------------------
// Les Structures de controle :

//IF/ELSE :
if (data[0].age > data[1].age) {
  //   console.log(data[0].pseudo + " est plus agé que " + data[1].pseudo);
} else {
}
//valeur à tester ? si vrai : si faux
//--------------
//WHILE :
let w = 0;

while (w < 10) {
  w++;
  //   console.log("La valeur de w est de : " + w);
}
//------------------
// Do WHILE :
let d = 0;
do {
  d++;
  //   console.log(d);
} while (d < 5);
//-----------------
// FOR :
for (const user of data) {
  //   document.body.innerHTML += `<li>${user.pseudo} - ${user.age} ans</li>`;
}
//on déclare la valeur de i / jusqu'où on boucle / si la 2eme partie pas fini on continue la boucle
for (i = 0; i < data.length; i++) {
  //   console.log(data[i].technos[0]);
  //   document.body.innerHTML += "<h2>" + data[i].pseudo + "</h2>";
}
//------------
// SWITCH :

document.body.addEventListener("click", (e) => {
  //   console.log(e.target.id);
  switch (e.target.id) {
    case "javascript":
      document.body.style.background = "yellow";
      break;
  }
  switch (e.target.id) {
    case "php":
      document.body.style.background = "violet";
      break;
  }
  switch (e.target.id) {
    case "python":
      document.body.style.background = "blue";
      break;
    default:
      null;
  }
});

//-----------------------------
// Les Méthodes String :
//------------------------------
// let string2 = "Javascript est un langage orienté object";
// console.log(eval(parseInt("1") + 2));
// console.log(typeof parseInt("42"))
// console.log(isNaN(string))
// console.log(string2[string2.length - 1]);
// console.log(string2.indexOf("langage"));

// let newString = string2.slice(5, 28);
// console.log(newString);

// console.log(string2.split("i"));

// console.log(string2.toLowerCase());
// console.log(string2.toUpperCase());

// console.log(string2.replace("Javascript", "PHP"));

//------------------------------
// Les Méthodes Number :
//-------------------------------

// let number2 = 42.1234;
// let numberString = "42.12 est un chiffre";
// console.log(number2.toFixed(1));
// console.log(parseInt(numberString));
// console.log(parseFloat(numberString));

//  MATH
// console.log(Math.PI);
// console.log(Math.round(4.1234566));
// console.log(Math.floor(4.12365789));
// console.log(Math.ceil(4.136659898));
// console.log(Math.pow(2, 7));
// console.log(Math.sqrt(16));
// console.log(Math.floor(Math.random() * 50));

//------------------------------
// Les Méthodes Arrays :
//-------------------------------

let array3 = ["Javascript", "php", "python"];
let array4 = ["ruby", "solidity"];

// let newArray = array3.concat(array4);
// console.log(newArray);

// let newArray = [...array3, ...array4];
// console.log(newArray);

// console.log(array3.join("&"));

// console.log(array3.slice(1));
//
// console.log(array3.indexOf("Python"));
// array3.forEach((languages) => console.log(languages));

// console.log(array3.every((language) => language === "php"));
// console.log(array3.some((language) => language === "php"));

// let shift = array3.shift();
// console.log(array3);

// console.log(array3.pop());

// const restArray = array3.splice(1, 1, ...array4);
// console.log(array3);

//-------------------------
// !!!!!!! IMPORTANT !!!!!!

let arrayNumber = [4, 75, 2, 23, 9];
// console.log(arrayNumber.reduce((x, y) => x + y));
arrayNumber.push("Coucou");
// console.log(arrayNumber);

// FILTER, SORT, MAP :
// console.log(arrayNumber.filter((number) => number > 10));
// console.log(arrayNumber.filter((number) => number > 10).sort((a, b) => b - a));
// console.log(arrayNumber.sort());
// console.log(arrayNumber.sort((a, b) => b - a));

// arrayNumber.map((number) => (document.body.innerHTML += `<li> ${number}</li>`));
// document.body.innerHTML = arrayNumber
//   .map((number) => `<li> ${number}</li>`)
//   .join("");

//-----------------------------
//!!!!!!!!!!!!!!!! Les Méthodes Objects : !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//------------------------------
// document.body.innerHTML = data
//   .filter((user) => user.admin === false)
//   // .filter((user) => user.pseudo.includes("Zaï"))
//   .sort((a, b) => b.age - a.age)
//   .map(
//     (user) =>
//       `
// <div class="user-card">
// <h2>${user.pseudo}</h2>
// <p>Age : ${user.age} ans</p>
// <p>Status : ${user.admin ? "Modérateur" : "Membre"}</p>
// </div>
// `
//   )
//   .join("");

//------------------------------
// Les Dates ;
//-------------------------------

// Date Classique ;
let date = new Date();

// Timestamp ;
let timestamp = Date.parse(date);

//IsoString ;
let iso = date.toISOString();
// console.log(date.toISOString());

function dateParser(chaine) {
  let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
  return newDate;
}

// console.log(dateParser(date));
// console.log(dateParser(timestamp));
// console.log(dateParser(iso));

//------------------------------
// Le Destructuring ;
//-------------------------------

let moreData = {
  destVar: ["Element 1", "Element 2"],
};
const { destVar } = moreData;
// console.log(destVar);

let array5 = [70, 80, 90];
let [x, y, z] = array5;
// console.log(x);
// console.log(y);
// console.log(z);

const dateDest = (chaine) => {
  let newDate = chaine.split("T")[0];
  let [y, m, d] = newDate.split("-");
  return [d, m, y].join("/");
};

// console.log(dateDest(iso));

//------------------------------
// Les Datasets ;
//-------------------------------

const h3js = document.getElementById("javascript");
// console.log(h3js.dataset.lang);

const h3 = document.querySelectorAll("h3");
// h3.forEach((language) => console.log(language.dataset.lang));

//------------------------------
// Les Regex ;
//-------------------------------
let mail = "zaza26@gmail.com";
// console.log(mail.search(/jjkfkjsdkjfhjk/));
// console.log(mail.replace(/zaza/, "caca"));
// console.log(mail.match(/ZaZa/i));
// console.log(mail.match(/[123]/));

//permet de matcher tous les chiffres :
// console.log(mail.match(/\d/));
//permet de matcher toutes les lettres :
// console.log(mail.match(/[a-z]/));

//contrôler un mail :
// console.log(mail.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i));

//permet de séparer les nombres :
let separator = 21345564654;
// console.log(separator.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."));

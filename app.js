// Oppgave 1

// a
let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}

// b
for (let i = 1; i <= 10; i++) {
  console.log(i);
}


// Oppgave 2
// a
/*const passWord = "Trumpass25"

let input = prompt("Skriv inn passord:")

while (input !== passWord) {
    input = prompt("Feil passord. Prøv igjen:")
}

if (input === passWord) {
    document.body.innerHTML = "<h1>Velkommen!</h1>";
    console.log('Riktig passord');
}
    */


// b
/*const KORREKT = "Oslo2025!";  
  let input;
  let forsok = 0;
  const maksForsok = 3;

  while (forsok < maksForsok) {
    input = prompt("Skriv inn passord (forsøk " + (forsok+1) + " av " + maksForsok + "):");

    if (input === null) {
      alert("Avbrutt.");
      break;
    }

    if (input === KORREKT) {
      document.body.innerHTML = "<h1>Velkommen!</h1><p>Riktig passord ✅</p>";
      console.log("Riktig passord");
      break;
    } else {
      alert("Feil passord");
    }

    forsok++;
  }


  if (forsok === maksForsok && input !== KORREKT) {
    document.body.innerHTML = "<h1>Tilgang nektet ❌</h1><p>Du har brukt alle forsøkene.</p>";
    console.log("Tilgang nektet");
  }*/


  // Oppgave 3

/*let valg = prompt("Vil du se oddetall eller partall? Skriv 'odde' eller 'par'.");

if (valg === "par") {
  for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
} else if (valg === "odde") {
  for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
} else {
  console.log("Ugyldig valg. Skriv 'odde' eller 'par'.");
}
*/


  // Oppgave 4 

  /*for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(i + " x " + j + " = " + (i * j));
  }
  console.log("----------");
}*/

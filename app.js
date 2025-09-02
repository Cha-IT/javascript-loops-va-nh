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
const KORREKT = "Oslo2025!";
  let input;
  let forsok = 0;          // счётчик
  const maksForsok = 3;    // максимум попыток

  while (forsok < maksForsok) {
    input = prompt("Skriv inn passord (forsøk " + (forsok+1) + " av " + maksForsok + "):");

    if (input === null) { // если нажал Cancel
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

  // если все 3 попытки использованы и пароль не угадан
  if (forsok === maksForsok && input !== KORREKT) {
    document.body.innerHTML = "<h1>Tilgang nektet ❌</h1><p>Du har brukt alle forsøkene.</p>";
    console.log("Tilgang nektet");
  }
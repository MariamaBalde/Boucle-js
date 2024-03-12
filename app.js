let i = prompt("Enter un type de boucle");

let typeBoucle = {
  boucle1: "for",
  boucle2: "while",
  boucle3: "do..while",
};

let defboucle = {
  defboucle1:
    " est une boucle qui permet de répéter des instructions un certain nombre de fois",
  defboucle2:
    " crée une boucle qui exécute une instruction spécifiée tant que la condition de test est évaluée à true",
  defboucle3:
    " crée une boucle qui exécute une instruction spécifiée jusquà ce que la condition de test soit évaluée comme fausse.",
};

if (i == typeBoucle.boucle1) {
  alert("Le boucle : " + " " + typeBoucle.boucle1 + "" + defboucle.defboucle1);
} else if (i == typeBoucle.boucle2) {
  alert("Le boucle : " + "" + typeBoucle.boucle2 + "" + defboucle.defboucle2);
} else if (i == typeBoucle.boucle3) {
  alert("Le boucle : " + "" + typeBoucle.boucle3 + "" + defboucle.defboucle3);
} else {
  alert("It's not a boucle ");
}

// --- Fonction ROT13 ---
function rot13(str) {
  return str.replace(/[a-zA-Z]/g, function(c){
    return String.fromCharCode(
      (c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13)
      ? c : c - 26
    );
  });
}

// Email chiffré ROT13 (dtmghislain@gmail.com)
const encryptedMail = "qgztuvfyvna@tznvy.pbz";
const decodedMail = rot13(encryptedMail);

document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();

  const nom = encodeURIComponent(document.getElementById("name").value);
  const mailUser = encodeURIComponent(document.getElementById("email").value);

  // Récupération des checkbox cochées
  const checkboxes = document.querySelectorAll('input[name="choix"]:checked');
  let selected = [];

  checkboxes.forEach(cb => selected.push(cb.value));

  // Génération automatique du message final
  const messageGenere =
      selected.length > 0
      ? selected.join("%0D%0A- ")    
      : "Aucun sujet sélectionné.";

  const subject = encodeURIComponent("Contact depuis le site DevOps de Michael D.");

  const body =
      "Nom : " + nom + "%0D%0A" +
      "Email : " + mailUser + "%0D%0A%0D%0A" +
      "Sujet(s) choisi(s) :%0D%0A- " + messageGenere + "%0D%0A";

 // Ouvre l'outil de mail sur le poste client 
  window.location.href =
      "mailto:" + decodedMail + "?subject=" + subject + "&body=" + body;
});
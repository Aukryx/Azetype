// Functions to display the score and proposition
function afficherResultat(score, nbMotsProposes) {
    const spanScore = document.querySelector(".zoneScore span");
    const affichageScore = `${score} / ${nbMotsProposes}`;
    spanScore.innerText = affichageScore;
  }
  
  function afficherProposition(proposition) {
    const zoneProposition = document.querySelector(".zoneProposition");
    zoneProposition.innerText = proposition;
  }

  function afficherEmail(nom, email, scoreEmail, finalTime) {
    let gifUrl = "https://www.bigfooty.com/forum/media/fortnite-dance-gif.68182/full";
    let logoUrl = "https://i.ytimg.com/vi/Grs1rnCZBaE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBl7wZjLbVNp7G1S1dIUaXIxEhjeQ";
  
    let subject = encodeURIComponent("Partage du score Azertype");
    let body = encodeURIComponent(`Salut, je suis ${nom} et je viens de réaliser le score ${scoreEmail} en ${finalTime} sur le site d'Azertype !
  
  Regarde ce GIF pour célébrer : ${gifUrl}
  
  Et voici notre logo : ${logoUrl}`);
  
    // Créer un conteneur pour les options de partage
    let optionsContainer = document.createElement('div');
    optionsContainer.className = 'optionsPartage';
    optionsContainer.style.marginTop = '20px';
  
    // Option 1: Lien mailto
    let mailtoLink = document.createElement('button');
    mailtoLink.textContent = "Ouvrir avec le client de messagerie par défaut";
    mailtoLink.onclick = function() {
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    };
    optionsContainer.appendChild(mailtoLink);
  
    // Option 2: Gmail
    let gmailLink = document.createElement('button');
    gmailLink.textContent = "Ouvrir avec Gmail";
    gmailLink.onclick = function() {
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`, '_blank');
    };
    optionsContainer.appendChild(gmailLink);
  
    // Option 3: Copier le texte
    let copyButton = document.createElement('button');
    copyButton.textContent = "Copier le texte du message";
    copyButton.onclick = function() {
      let textToCopy = `Salut, je suis ${nom} et je viens de réaliser le score ${scoreEmail} en ${finalTime} sur le site d'Azertype !
  
  Regarde ce GIF pour célébrer : ${gifUrl}
  
  Et voici notre logo : ${logoUrl}`;
      navigator.clipboard.writeText(textToCopy).then(() => {
        alert("Texte copié dans le presse-papiers !");
      });
    };
    optionsContainer.appendChild(copyButton);
  
    // Ajouter les options à la popup
    let popup = document.querySelector(".popup");
    
    // Supprimer les anciennes options s'il y en a
    let existingOptions = popup.querySelector('.optionsPartage');
    if (existingOptions) {
      existingOptions.remove();
    }
    
    popup.appendChild(optionsContainer);
  
    // Afficher les images dans la popup
    let imagesPreview = document.createElement('div');
    imagesPreview.innerHTML = `
      <p>Aperçu des images :</p>
      <img src="${gifUrl}" alt="GIF de célébration" style="max-width: 200px; margin: 10px 0;">
      <img src="${logoUrl}" alt="Logo" style="max-width: 200px; margin: 10px 0;">
    `;
    
    // Supprimer l'ancien aperçu s'il existe
    let existingPreview = popup.querySelector('.imagesPreview');
    if (existingPreview) {
      existingPreview.remove();
    }
    
    imagesPreview.className = 'imagesPreview';
    popup.appendChild(imagesPreview);
  }

function validerNom(nom) {
  if (nom.length < 2) {
      throw new Error("Le nom est trop court. ")
  }
  
}

function validerEmail(email) {
  let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
  if (!emailRegExp.test(email)) {
      throw new Error("L'email n'est pas valide.")
  }
  
}

function afficherMessageErreur(message) {
    
  let spanErreurMessage = document.getElementById("erreurMessage")

  if (!spanErreurMessage) {
      let popup = document.querySelector(".popup")
      spanErreurMessage = document.createElement("span")
      spanErreurMessage.id = "erreurMessage"
      
      popup.append(spanErreurMessage)
  }
  
  spanErreurMessage.innerText = message
}

function gererFormulaire(scoreEmail, finalTime) {
  try {
    let baliseNom = document.getElementById("nom")
    let nom = baliseNom.value
    validerNom(nom)

    let baliseEmail = document.getElementById("email")
    let email = baliseEmail.value
    validerEmail(email)
    afficherMessageErreur("")
    afficherEmail(nom, email, scoreEmail, finalTime)

  } catch(erreur) {
    afficherMessageErreur(erreur.message)
  }
}

  
  // Timer-related variables and functions
  let time = 0;
  let interval;
  let btnPartage = document.querySelector(".zonePartage button");
  btnPartage.disabled = true
  const display = document.getElementById("display");
  const resetBtn = document.getElementById("reset");
  let timerStarted = false;
  
  function startTimer() {
    if (!timerStarted) {
      interval = setInterval(() => {
        time += 1;
        const minutes = Math.floor((time / 100) / 60);
        const seconds = Math.floor(time / 100) % 60;
        const milliseconds = Math.floor(time % 100);
        display.innerHTML = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}:${milliseconds.toString().padStart(2, "0")}`;
      }, 10);
      timerStarted = true;
      listeBtnRadio.forEach(btn => {
        btn.disabled = true;
      })
    }
  }
  
  function stopTimer() {
    clearInterval(interval);
    interval = null;
  }
  
  
  // Game-related variables and functions
  let score = 0;
  let listePropositions = listeMots;
  let i = 0;
  let finalTime = ""
  const boutonValidation = document.getElementById("btnValiderMot");
  const inputEcriture = document.getElementById("inputEcriture");
  const listeBtnRadio = document.querySelectorAll(".optionSource input");
  let currentListePropositions = listeMots;
  
  function setParams() {
    score = 0;
    i = 0;
    time = 0;
    interval = null;
    timerStarted = false;
    currentListePropositions = listeBtnRadio[0].checked ? listeMots : listePhrases;
    listePropositions = currentListePropositions;
  }
  
  function restartGame() {
    btnPartage.disabled = true
    initAddEventListenerPopup();
    setParams();
    afficherProposition(listePropositions[i]);
    afficherResultat(score, i);
    listeBtnRadio.forEach(btn => {
        btn.disabled = false;
      });
  }
  

  
  // Event listeners
  resetBtn.onclick = () => {
    if (interval) {
      clearInterval(interval);
    }
    interval = null;
    display.innerHTML = "00:00:00";
    inputEcriture.disabled = false;
    inputEcriture.value = '';
    boutonValidation.disabled = false;
    restartGame();
  };
  
  boutonValidation.addEventListener("click", () => {
    if (inputEcriture.value === listePropositions[i]) {
      score++;
    }
    i++;
    afficherResultat(score, i);
    inputEcriture.value = '';
    if (listePropositions[i] === undefined) {
      afficherProposition("Le jeu est fini");
      boutonValidation.disabled = true;
      inputEcriture.disabled = true;
      btnPartage.disabled = false;
      stopTimer();
      finalTime = display.innerHTML
      console = finalTime
    } else {
      afficherProposition(listePropositions[i]);
    }
  });
  
  inputEcriture.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      boutonValidation.click();
    } else if (event.key.match(/[A-a-zZ0-9\s.,!?;:"'`~!@#$%^&*()_+=-{}|[\]\\]/)) {
      startTimer();
    }
  });
  
  listeBtnRadio.forEach(btn => {
    btn.addEventListener("change", (event) => {
      currentListePropositions = event.target.value === "1" ? listeMots : listePhrases;
      listePropositions = currentListePropositions;
      i = 0;
      afficherProposition(listePropositions[i]);
    });
  });

  let form = document.querySelector("form")
  form.addEventListener("submit", (event) => {
      event.preventDefault()
      let scoreEmail = `${score} / ${i}`
      gererFormulaire(scoreEmail, finalTime)
  })

  afficherResultat(score, i)
  
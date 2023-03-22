// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

/*** Déclaration du formulaire ***/
const submitForm = document.querySelector(".form");

/*** Déclaration du bground de la modal de fin ***/
const modalbgEnd = document.querySelector(".bground-end");

/*** Séléction du bouton OK de la modal de fin ***/
const modalEndOK = document.querySelector(".btn-end");

/*** Variables utilisées pour vérifier l'activation du bouton d'envoi du formulaire***/
let validFirst = false;
let validLast = false;
let validEmail = false;
let validBirthDate = false;
let validQuantity = false;
let validLocation = false;
let validCondition = true;

//***select the close icon from modal***
const modalClose = document.querySelector(".close");

//***select the close icon from modal end***
const modalCloseEnd = document.querySelector(".close-end");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

//***close modal event***
modalClose.addEventListener("click", closeModal);

//***fermeture de la modal de fin***
modalCloseEnd.addEventListener("click", closeModalEnd);
modalEndOK.addEventListener("click", closeModalEnd);

/*** Validation du prénom ***/
const getPrenom = document.querySelector("#first");
getPrenom.addEventListener("input", validationPrenom);

/*** Validation du nom ***/
const getNom = document.querySelector("#last");
getNom.addEventListener("input", validationNom);

/*** Validation du mail ***/
const getMail = document.querySelector("#email");
getMail.addEventListener("input", validationMail);

/*** Validation du date de naissance ***/
const getBirthDate = document.querySelector("#birthdate");
getBirthDate.addEventListener("change", validationBirthDate);

/*** Validation de la participation aux tournois ***/
const getQuantity = document.querySelector("#quantity");
getQuantity.addEventListener("input", validationQuantity);

/*** Validation de la ville ***/
const getLocation1 = document.querySelector("#location1");
getLocation1.addEventListener("click", validationLocation);
const getLocation2 = document.querySelector("#location2");
getLocation2.addEventListener("click", validationLocation);
const getLocation3 = document.querySelector("#location3");
getLocation3.addEventListener("click", validationLocation);
const getLocation4 = document.querySelector("#location4");
getLocation4.addEventListener("click", validationLocation);
const getLocation5 = document.querySelector("#location5");
getLocation5.addEventListener("click", validationLocation);
const getLocation6 = document.querySelector("#location6");
getLocation6.addEventListener("click", validationLocation);

/*** Validation des conditions d'utilisation ***/
let getConditions = document.querySelector("#checkbox1");
getConditions.addEventListener("click", validationConditions);

/*** Déclaration du bouton submit***/
let getSubmit = document.querySelector(".btn-submit");
getSubmit.addEventListener("click", submitFormData);

/*** Désactivation du bouton de validation du formulaire ***/
getSubmit.setAttribute("disabled", "disabled");
getSubmit.style.opacity = .3;

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//***fonction d'affichage de la modal de fin***
function launchModalEnd() {
  modalbgEnd.style.display = "block";
}

//***fonction d'envoi du formulaire***
function submitFormData(event) {
  event.preventDefault();
  closeModal();
  launchModalEnd();
}

//***close modal form***
function closeModal() {
  modalbg.style.display = "none";
}

//***close modal end form***
function closeModalEnd() {
  modalbgEnd.style.display = "none";
}

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function validationPrenom() {
  const RegExPrenom = /[0-9|._]+/;
  if (getPrenom.value.length < 2 || RegExPrenom.test(getPrenom.value)) {
    showError(getPrenom);
    validFirst = false;
    validationSubmit();
  } else {
    hideError(getPrenom);
    validFirst = true;
    validationSubmit();
  }
};

function validationNom() {
  const RegExNom = /[0-9|._]+/;
  if (getNom.value.length < 2 || RegExNom.test(getNom.value)) {
    showError(getNom);
    validLast = false;
    validationSubmit();
  } else {
    hideError(getNom);
    validLast = true;
    validationSubmit();
  }
};

function validationMail() {
  const RegExMail = /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/gm;
  if (RegExMail.test(getMail.value)) {
    hideError(getMail);
    validEmail = true;
    validationSubmit();
  } else {
    showError(getMail);
    validEmail = false;
    validationSubmit();
  }
};

function validationBirthDate() {
  const RegExBirthDate = /(\d{4})(|-|\/|)(\d{2})(|-|\/|)(\d{2})/g;
  if (RegExBirthDate.test(getBirthDate.value)) {
    hideError(getBirthDate);
    validBirthDate = true;
    validationSubmit();
  } else {
    showError(getBirthDate);
    validBirthDate = false;
    validationSubmit();
  }
};

function validationQuantity() {
  if ((0 <= getQuantity.value) && (getQuantity.value <= 99)) {
    hideError(getQuantity);
    validQuantity = true;
    validationSubmit();
  } else if (getQuantity.value === "") {
    showError(getQuantity);
    validQuantity = false;
    validationSubmit();
  } else {
    showError(getQuantity);
    validQuantity = false;
    validationSubmit();
  }
};

function validationLocation() {
  if (this.checked) {
    hideError(this);
    validLocation = true;
    validationSubmit();
  } else {
    showError(this);
    validLocation = false;
    validationSubmit();
  }
};

function validationConditions() {
  if (getConditions.checked === true) {
    hideError(getConditions);
    validCondition = true;
    validationSubmit();
  } else {
    showError(getConditions);
    validCondition = false;
    validationSubmit();
  }
};

function validationSubmit() {
  if ((validFirst === true) && (validLast === true) && (validEmail === true) && (validBirthDate === true) && (validQuantity === true) && (validLocation === true) && (validCondition === true)) {
    getSubmit.removeAttribute("disabled", "disabled");
    getSubmit.style.opacity = 1;
  } else {
    getSubmit.setAttribute("disabled", "disabled");
    getSubmit.style.opacity = .3;
  }
};

function showError(_check) {
  _check.parentElement.setAttribute("data-error-visible", "true");
};

function hideError(_check) {
  _check.parentElement.setAttribute("data-error-visible", "false");
};
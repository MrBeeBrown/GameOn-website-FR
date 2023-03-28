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
getPrenom.addEventListener("input", validatePrenom);

/*** Validation du nom ***/
const getNom = document.querySelector("#last");
getNom.addEventListener("input", validateNom);

/*** Validation du mail ***/
const getMail = document.querySelector("#email");
getMail.addEventListener("input", validateMail);

/*** Validation du date de naissance ***/
const getBirthDate = document.querySelector("#birthdate");
getBirthDate.addEventListener("change", validateBirthDate);

/*** Validation de la participation aux tournois ***/
const getQuantity = document.querySelector("#quantity");
getQuantity.addEventListener("input", validateQuantity);

/*** Validation de la ville ***/
const getLocation1 = document.querySelector("#location1");
getLocation1.addEventListener("click", validateLocation);
const getLocation2 = document.querySelector("#location2");
getLocation2.addEventListener("click", validateLocation);
const getLocation3 = document.querySelector("#location3");
getLocation3.addEventListener("click", validateLocation);
const getLocation4 = document.querySelector("#location4");
getLocation4.addEventListener("click", validateLocation);
const getLocation5 = document.querySelector("#location5");
getLocation5.addEventListener("click", validateLocation);
const getLocation6 = document.querySelector("#location6");
getLocation6.addEventListener("click", validateLocation);

/*** Validation des conditions d'utilisation ***/
let getConditions = document.querySelector("#checkbox1");
getConditions.addEventListener("click", validateConditions);

/*** Déclaration du bouton submit***/
let getSubmit = document.querySelector(".btn-submit");
getSubmit.addEventListener("click", validationSubmit);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//***fonction d'affichage de la modal de fin***
function launchModalEnd() {
  modalbgEnd.style.display = "block";
}

//***fonction d'envoi du formulaire***
function submitFormData() {
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

function validatePrenom() {
  const RegExPrenom = /[0-9|._]+/;
  if (getPrenom.value.trim().length < 2 || RegExPrenom.test(getPrenom.value)) {
    showError(getPrenom);
    validFirst = false;
  } else {
    hideError(getPrenom);
    validFirst = true;
  }
};

function validateNom() {
  const RegExNom = /[0-9|._]+/;
  if (getNom.value.trim().length < 2 || RegExNom.test(getNom.value)) {
    showError(getNom);
    validLast = false;
  } else {
    hideError(getNom);
    validLast = true;
  }
};

function validateMail() {
  const RegExMail = /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/gm;
  showError(getMail);
  validEmail = false;
  if (RegExMail.test(getMail.value.trim())) {
    hideError(getMail);
    validEmail = true;
  }
};

function validateBirthDate() {
  const RegExBirthDate = /(\d{4})(|-|\/|)(\d{2})(|-|\/|)(\d{2})/g;
  showError(getBirthDate);
  validBirthDate = false;
  if (RegExBirthDate.test(getBirthDate.value)) {
    hideError(getBirthDate);
    validBirthDate = true;
  }
};

function validateQuantity() {
  showError(getQuantity);
  validQuantity = false;
  if ((getQuantity.value.length > 0) && (getQuantity.value <= 99) && (getQuantity.value >= 0)) {
    hideError(getQuantity);
    validQuantity = true;
  }
};

function validateLocation() {
  showError(this);
  validLocation = false;
  if (this.checked) {
    hideError(this);
    validLocation = true;
  }
};

function validateConditions() {
  if (getConditions.checked) {
    hideError(getConditions);
    validCondition = true;
  } else {
    showError(getConditions);
    validCondition = false;
  }
};

function validationSubmit() {
  if ((validFirst) && (validLast) && (validEmail) && (validBirthDate) && (validQuantity) && (validLocation) && (validCondition)) {
    submitFormData();
  } else {
    for (let i = 0; i < formData.length; i++) {
      let getHiddenError = "";
      getHiddenError = formData[i].getAttribute("data-error-visible");
      if (getHiddenError == null) {
        formData[i].setAttribute("data-error-visible", "true");
      }
    }
  }
  validateConditions();
};

function showError(_check) {
  _check.parentElement.setAttribute("data-error-visible", "true");
};

function hideError(_check) {
  _check.parentElement.setAttribute("data-error-visible", "false");
};
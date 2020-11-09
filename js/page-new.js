class PageNew {
  constructor(app) {
    this._app = app;

    this.inputFieldTitel = document.querySelector("#page-new .input-name");
    this.inputFieldZutat = document.querySelector("#page-new .input-Zutat");
    this.buttonAddZutat = document.querySelector("#page-new .button-Zutat");
    this.inputFieldAnleitung = document.querySelector("#page-new .input-Anleitung");
    this.buttonAddAnleitung = document.querySelector("#page-new .button-Anleitung");
    this.zutaten = document.querySelector("#page-new .zutaten-liste");
    this.anleitung = document.querySelector("#page-new .anleitung-liste");
    this.buttonAddRezept = document.querySelector("#page-new .button-add-rezept");
    this.alleRezepte = document.querySelector("#rezepte");
    this._installEventHandlers();
    this._addErstesRezept();
  }
  async show(matches) {
    this._app.setPageTitle("Neues Rezept");
    this._app.setPageContent("#page-new");
  }
  _installEventHandlers() {

    this.inputFieldZutat.addEventListener("keyup", event => {
      if(event.key == "Enter") {
        this._addZutat(this.inputFieldZutat.value);
      }
    });
    this.buttonAddZutat.addEventListener("click", event => {
      this._addZutat(this.inputFieldZutat.value);
    });
    this.inputFieldAnleitung.addEventListener("keyup", event => {
      if(event.key == "Enter") {
        this._addAnleitung(this.inputFieldAnleitung.value);
      }
    });
    this.buttonAddAnleitung.addEventListener("click", event => {
      this._addAnleitung(this.inputFieldAnleitung.value);
    });
    this.buttonAddRezept.addEventListener("click", event => {
      this._addRezept();
    })
  }
  _addZutat(zutat) {
    if(zutat === ""){
      alert("Bitte Zutat eingeben!");
      return;
    }
    let li = document.createElement("li");
    let t = document.createTextNode(zutat);
    li.appendChild(t);
    this.zutaten.appendChild(li);
    this.inputFieldZutat.value = "";
    this.inputFieldZutat.focus();
  }
  _addAnleitung(schritt) {
    if(schritt === "") {
      alert("Bitte Schritt eingeben!");
      return;
    }
    let li = document.createElement("li");
    let t = document.createTextNode(schritt);
    li.appendChild(t);
    this.anleitung.appendChild(li);
    this.inputFieldAnleitung.value = "";
    this.inputFieldAnleitung.focus();
  }
  _addRezept() {
    if(this.inputFieldTitel.value === "" || !this.zutaten.hasChildNodes() || !this.anleitung.hasChildNodes()) {
      alert("Bitte Name des Rezeptes, eine Zutat und einen Anleitungs-Schritt eingeben");
      return;
    }
    let div = document.createElement("div");
    div.classList.add("rezept");
    let titel = document.createElement("h3");
    titel.textContent = this.inputFieldTitel.value;
    div.appendChild(titel);
    div.appendChild(document.createElement("h4").appendChild(document.createTextNode("Zutaten:")));
    let zutaten = this.zutaten.cloneNode(true);

    div.appendChild(zutaten);
    div.appendChild(document.createElement("h4").appendChild(document.createTextNode("Anleitung:")));
    let anleitung = this.anleitung.cloneNode(true);
    div.appendChild(anleitung);
    let loeschen = document.createElement("button");
    loeschen.textContent = "\u00D7"; //steht für Symbol "x"
    loeschen.onclick = () => { // wenn der Button gedrückt wird, soll das Rezept ausgeblendet werden
      let div = loeschen.parentElement;
      div.style.display = "none";
    }
    div.appendChild(loeschen);
    this.alleRezepte.appendChild(div);
    this._reset(); //Alle Input-Felder und die Listen leeren
    location.hash = "#"; //Automatisches Wechseln zur Übersicht
  }
  _reset() {
    this.inputFieldTitel.value = "";
    this.inputFieldZutat.value = "";
    this.inputFieldAnleitung.value = "";
    let div = this.zutaten.parentNode;
    div.removeChild(this.zutaten);
    let ul = document.createElement("ul");
    ul.classList.add("zutaten-liste");
    div.appendChild(ul);
    div = this.anleitung.parentNode;
    div.removeChild(this.anleitung);
    let ol = document.createElement("ol");
    ol.classList.add("anleitung-liste");
    div.appendChild(ol);
    this.zutaten = document.querySelector("#page-new .zutaten-liste");
    this.anleitung = document.querySelector("#page-new .anleitung-liste");
  }
  _addErstesRezept(){
    this.inputFieldTitel.value = "Bananenkuchen";
    this._addZutat("500g Banane");
    this._addZutat("200g Zucker");
    this._addZutat("100g Mehl");
    this._addAnleitung("Backofen einschalten");
    this._addAnleitung("Kuchen in Backofen legen");
    this._addAnleitung("Essen! :)");
    this._addRezept();
  }
}

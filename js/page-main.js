class PageMain {
  constructor(app) {
    this._app = app;
    this.hamburgerMenueButton = document.querySelector("header .icon-menu");
    this.navigationList = document.querySelector("header #navigationList");
    this._installEventHandlers();
  }

  async show(matches) {
    this._app.setPageTitle("Rezepte");
    this._app.setPageContent("#page-main");
  }
  _installEventHandlers() {
    this.hamburgerMenueButton.addEventListener("click", event => {
      if(this.navigationList.classList.contains("mobile-hidden")) {
        this.navigationList.classList.remove("mobile-hidden");
      } else {
        this.navigationList.classList.add("mobile-hidden");
      }
    });
  }
}

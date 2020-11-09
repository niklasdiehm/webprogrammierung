class App {
  constructor(title) {
    this._title = title;
    this._router = new Router();
  }

  get router() {
    return this._router;
  }

  setPageTitle(title) {
    document.title = `${title} – ${this._title}`;
  }
  setPageContent(query) {
    document.querySelectorAll("main").forEach(e => e.classList.add("hidden"));
    document.querySelectorAll(query).forEach(e => e.classList.remove("hidden"));
  }
}

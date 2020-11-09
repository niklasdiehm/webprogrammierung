class Router {
  constructor() {
    this._routes = [];
  }
// Routen werde dem Router im Script der index.html-Seite übergeben
  setUrlRoutes(routes){
    this._routes = routes;
  }
  //Auf Event reagieren, das gefeuert wird, wenn sich die URL nach dem # ändert
  run() {
    window.addEventListener("hashchange", () => this._handleRouting());
    this._handleRouting();
  }

  _handleRouting() {
    let pageUrl = location.hash.slice(1);
    // Falls index-Seite gemeint ist (Url: #)
    if(pageUrl.length === 0) {
      pageUrl = "/";
    }
    let matches = null;

    // aktuelle Route wird im Router gesucht
    let route = this._routes.find(p => matches = pageUrl.match(p.url));
    // Falls keine Route gefunden wurde, kann auch keine Seite angezeigt werden
    if(!route) {
      console.error(`Keine Seite zur URL ${pageUrl} gefunden!`);
      return;
    }

    // Alle Objekte haben die show-Methode, die sie anzeigen lassen
    route.obj.show(matches);
  }
}

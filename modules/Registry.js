class RouterRegistry {
  inited = false;
  app = null;
  constructor() {
    this._routers = {};
  }

  init(app) {
    this.app = app;
    this.inited = true;
  }

  registerRouter(fileName,fileDir,preferredURL = fileDir + "/" + fileName) {
    console.log(preferredURL);
    if (this.inited == false) {console.log("Registry has not been initiated!"); return;}
    this._routers[name] = router;
  }

  getRouter(name) {
    if (this.inited == false) {console.log("Registry has not been initiated!"); return;}
    return this._routers[name];
  }

  getAllRouters() {
    if (this.inited == false) {console.log("Registry has not been initiated!"); return;}
    return this._routers;
  }
}

module.exports = new RouterRegistry();

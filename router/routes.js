const express = require("express");
//creating Router Class

class NoteRouter {
  constructor(takeinobject) {// so that we can use other class methods
    this.takeinobject=takeinobject;
  }
  router() {
    const router = express.Router();
    router.get("/",this.samget.bind(this)); //(req,res)=>{res.send()}//
    router.post("/",this.sampost.bind(this));
    return router;
  }

samget(req,res){
    console.log("samGet works");
     res.send(this.takeinobject.read());// means nothing without binding
}

sampost(req,res){
console.log("samPost works");

res.send(this.takeinobject.write());
}

}




// router.get("/", (req, res) => {
//   res.send(`<h1>html</h1>`);
// });

module.exports = NoteRouter;

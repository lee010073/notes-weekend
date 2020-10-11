const express = require("express");

//creating Router Class

class NoteRouter {
  constructor(takeinobject) {
    this.takeinobject=takeinobject;
  }
  router() {
    const router = express.Router();
    router.get("/",this.samget.bind(this));
    router.post("/",this.sampost.bind(this));
    return router;
  }
samget(req,res){
    console.log("samGet works");
     res.send(this.takeinobject.read());
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

const fs = require("fs");
class NoteService{
    constructor(file){
    this.file=file
    this.notes={};
    }
    read(){
    fs.readFile(this.file,"utf-8",(err,data)=>{
        if (err) {
            reject(err);
          }
          console.log("READ110");
          this.notes=JSON.parse(data);
       return this.notes;
    })
    }
    write(){
    fs.writeFile(this.file,JSON.stringify(this.note),(err)=>{
        if (err) {
            reject(err);
          }
    });
    }

    add(note){
    this.note.push(note);
    }
}

module.exports = NoteService;
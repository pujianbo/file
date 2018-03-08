var name='first name'
function test(){
  this.name='pujianbo';
  this.say=function(){
    setTimeout(()=>{
      console.log(this.name);
    },1000)
  }
}
var t=new test()
t.say()()

this.name='zhags'
function Course(){
    this.name = "name";
    this.description = "description";
    this.author = "author";
    this.getSummary = function(){
        return this.name + ", " + this.description;
    };
    this.getDetails = function(){
        window.setTimeout(() => {console.log(this.name + " " + this.author)},1000);
    }
}

var course = new Course();
course.getDetails();

    function person(){
    this.name='jack',
    this.age=23,
    this.sayName=function(){
        console.log(this.name);

        function innerfunction(){
           console.log(this.age);
        }
        innerfunction();
    }

}
const x=new person();
x.sayName();
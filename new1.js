function student(){
    this.name='khan';
    this.age=23;
    this.sayname=function(){
        console.log(this.name);

        let  innerfunction=() =>  {
            console.log(this.age);
        }
        innerfunction();
    }
}
const x=new student();
x.sayname();




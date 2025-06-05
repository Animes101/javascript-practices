  //=== javascript out

// alert('hello javascript')
// document.write('hello javascript');
// console.log('<p>hello javascript</p>');

//==keywords in js

//break,case,catch,continue,debugger,dafault,delete,do,else,finally,for,function,if,in instanceof,new,return,switch,this,throw,try,typeof,var,void,while,with

//String
// console.log('hello string');
// nuber
// console.log(40.40);
// Boolean
// console.log(typeof(true));


//==5 variable

// var name='Animes Barman';
// console.log(name);
// var mango=50;
// var lichi=100;

// var total=mango+lichi;

// console.log(total);

// var a_$='use this case';
// console.log(a_$);

// var callName='cse';
// console.log(callName);

//==5 number method

// var num=5000;
// console.log(num);

// var num=toString(num);
// console.log(typeof(num))

// var init='hello world';
// init=parseInt(init);
// init=parseFloat(init)
// console.log(typeof(init));


// var numberFixed=5000.9988;

// console.log(numberFixed.toFixed(3));

// console.log(numberFixed.toPrecision(5))

// console.log(typeof(Number('animes')))

// console.log(Number(true))
// console.log(Number(false));


//==9 contatiantion

// var myName='Animes Barman';
// var fatherName='Purna Chandra Barman';


// var full=myName + ' '+ fatherName;

// console.log(full);

//==10  libary function for string

// var jatioSongit='Amar sonar bangla ami tomay valo bashi';

// console.log('number of charactor'+ ' '+ jatioSongit.length);


// var name=prompt('enter your name');


// document.write(name.length);

// var namecharAt='Animes Barman';

// console.log(namecharAt.charAt(5));

//==Uppercase and Lower case

// let text = "Hello World!";
// let result = text.toUpperCase();

// console.log(result);


// let a='AIMES BARMAN0 '

// let result2=a.toLowerCase();
// console.log(result2);

// var hello='he';
// var hi='hello'

// var out=hello.concat(hi);
// console.log(out);

// var name1='Animes Barman is very good';
// var result = name1.slice(0,5);
// console.log(result);

//==12 arithmetic and assigment operator

//arithmetic operator==+,-,*,/,%(modulus),**(exponent) ,++,--

//asigment operator== =,-=,+=,*=,/=,%=,**=

// var x=30;
// x+=20;

// console.log(x);

// var number=prompt('enter your number');
// var number2=prompt('enter your number 2');

// number=parseInt(number,10);
// number2=parseInt(number2,10);


// var sum=number + number2;

// document.write('total'+sum);

// var subc=number - number2;

// document.write('total'+subc);

//==15tempreature comvert

// var farn=parseFloat(prompt('enter farhentNumber'))
// var  cels=(farn-32) * (5/9);

// document.write('celcies'+ cels);


//==Logica Operator

//relational operator==  ->,>=,<,<=,==,===,!= !==

// Logica operator == &,||,!,

// console.log(40>50);

// console.log(50<20);
// console.log(20<=20)
// console.log(40==40);
// console.log(40=='40');
// console.log(60==='50');

// console.log(50!=40);
// console.log(90!= 90);


// console.log(50> 20 && 50>90);

// console.log(40==40 || 40!=30);


//==19 control statement if,else if,else

// if(!90==90){
//   console.log('ok');
// }else{
//   console.log('not')
// }

// if(50>=50 && 30==='30'){
//   console.log('yes')

// }else{
//   console.log('no')
// }

//==20 letter grade program

// var examMark=prompt('Enter your Mark'); 

// if(examMark>80 && examMark <90){
//   document.write('A+  payaca')
// }else if(examMark<33 && examMark>10){
//   document.write('fail koraca')
// }else if(examMark == 100){
//   document.write('full mark pyaca')
// }else{
//   document.write('exam dai ni')
// }


//==24 switch -switch,case,break,default

// var digit=prompt();
// switch(digit){

//   case '0':
//     document.write('zero');
//     break
//   case '1':
//     document.write('one');
//     break
//   case '3':
//     document.write('three');
//     break

//     default: 'not found'

// }

//==25 loop for loop

// for(var x=2;x<= 100;x++){

//   console.log('prid ' + x++)

// }
// for(var x=1;x<= 100;x++){

//   console.log('prid ' + x++)

// }

// var x=1;

// while(x<=40){
//   console.log(x)

//   x++
// }

// var i=0;

// do{

//   console.log('do while')
//   i++

// }while(i<=90){

// }

//==29 break and continue

// for(var x=0; x<=100; x++){
//   if(x === 10){
//     continue;
//   }

//   console.log(x);
// }

//23 ternary operator

// var x=500;

//  x=x >1000 ? 'positive': 'negitive';

// console.log(x);

//==32 function traditional

// function display(num,num2){
//   var result =num*num2;
//   return result;
// }

// console.log(display(12,50))

// function IFFE

// (function display(message){
  
//   document.write('hello world this is Iffe function'+ ' '+ message);
// })('ok');


// function expression

// var display=function helloWorld(m1,m2){
//      var sum=m1 + m2;

//      return sum;
// }

// var me1=parseFloat(prompt('ender your number'));
// var me2=parseFloat(prompt('enter your number2'));


// document.write(display(me1,me2));

//==34  Array =[collection of variables]

// var student=['jibon','lima ', 'bati','ripon','sopon', 'joy','sonjoy'];
// var studentMore=['purna','sonali'];

// var totalStudent=student.concat(studentMore);
// console.log(totalStudent);

// console.log(student.length);

// student.push('anamika');

// console.log(student);
// console.log(student[4]);


//==35 array loop

// var number=[1,2,3,4,5,6,7,8,9,10,11];

// var sum=0;


// for(var i=0; i<11; i++){

//   console.log(number[i]);

//   sum=sum+number[i];
// }

// console.log(sum);

// var number=[];

// for(var i=0; i<6; i++){

//   number.push(parseInt(prompt('enter your number' +i)));



// }

// console.log(number);


//==34 array Libary Methods

// var studentList=['limon','tarun','korim','sonali','toma','priyanka ','animes'];

// console.log(studentList);

// studentList.shift();   //fist element bad

// console.log(studentList);

// studentList.unshift('animes barman');

// console.log(studentList);

//addind ,remove,
// studentList.splice(2,0,'koris', 'rohim');

// console.log(studentList);

// // remove
// studentList.splice(1,2);

// console.log(studentList);

//slice

// var newStudent=studentList.slice(1);
// console.log(newStudent);

//short 

//  var sortlist=studentList.sort();

//  sortlist.reverse()

//  console.log(sortlist);

// var numbers=[10,55,32,10,20,40,80];

// numbers.sort(function(a,b){
//   return a - b;
// });

// console.log(numbers);

//==37 one dimonsonal array
// console.clear();
// function hishScore(score){

//   let max=score[0]

//   for(var x=1; x<score.length; x++){
//     if(max<score[x]);
//     max=score[x];

//   }

//   return max;



// }

// var scores=[20,50,60,30,22,10,44,55,66,77];
// var maxScore=hishScore(scores)

// console.log(maxScore)

//==38 tow dimontional arrya


// function hiscStudent(number){
  
//   var higherStudent=number[0][0];
//   var higherScore=number[0][1];


//   for(var x=1; x<number.length; x++){


//     if(higherScore<number[x][1]){
//       higherScore=number[x][1];
//       higherStudent=number[x][0];
//     }

//   }
//   return higherStudent;
  
// }

// var towArray=[
//   ['animes',70],
//   ['jion',1000],
//   ['sonali',4000]
// ]


// console.log(hiscStudent(towArray));


//object & Constraction



// var student={
//   name:'animes',
//   age:23,
//   lang:['bangla ','english']
// }

// function studentList(name,age,lang){

//   this.name=name;
//   this.age=age;
//   this.lang=lang;

//   this.SingleStudent=function(){
//     console.log(this.name);
//     console.log(this.age);
//     console.log(this.lang);

//   }


// }


// var student1=new studentList('animes',23,['english','bangla']);

// var student2=new studentList('priyanka',20,['tamil','hindi']);
// var student4=new studentList('animes',23,['english','bangla']);

// var student3=new studentList('priyanka',20,['tamil','hindi']);

// student1.SingleStudent();
// student2.SingleStudent();
// student3.SingleStudent();
// student4.SingleStudent();

// console.log(Math.floor(3.2));
// console.log(Math.ceil(5.2));
// console.log(Math.max(20,30,50,10,10,20,1100,0,));
// console.log(Math.round(3.0));
// console.log(Math.round(5.6))

// console.log(Math.random());

// console.log(Math.floor(Math.random()*11)+10);

//guss game;
// var won=0;
// var lost=0;

// for(var i=0; i<4;i++){

// var gussNumber=parseFloat(prompt('enter your guss number'));

// var randomNumber=Math.floor(Math.random()*4)+1;

// if(gussNumber===randomNumber){
//   won++
  
// }else{
//   lost++
// }

// } 

// document.write('wind='+won);

// document.write('lost='+lost);


///==43 date object and method

// var date=new Date();

// console.log(date);

// var year=date.getFullYear();
// console.log(year);

// var manth=date.getMonth();
// console.log(manth);
// var minutes=date.getMinutes();
// console.log(minutes);
// var second=date.getSeconds();
// console.log(second);
// var daates=date.getDate();
// console.log(daates);
// var day=date.getDay();
// console.log(day);
// var hours=date.getHours();
// console.log(hours);



//== localstorage and seconstorage


// localStorage.setItem("name","animes barman");
// var name=localStorage.getItem('name')

// name='ripon'

// console.log(name);


// sessionStorage

// sessionStorage.setItem('password','123456');

// var password=sessionStorage.getItem('password');

// console.log(password);

// sessionStorage.removeItem('password');

// var user={name:'animes', age:'32'};

// sessionStorage.setItem('user',JSON.stringify(user))

// var users=JSON.parse(sessionStorage.getItem('user'));

// console.log(users);



//DOM===========================================================================

//getElementByID

// var button=document.getElementById('btn');
// button.innerText='good bye'

//getelementByTagname

// var name=document.getElementsByTagName('h1')[1].innerHTML='getElementByTagname';
// var classs=document.getElementsByClassName('clas')[0];
// classs.innerHTML='getElementByClassName'


// queueMicrotask


// var para=document.querySelector('.para').innerHTML='fine';
// var heading=document.querySelector('#heading').innerHTML='ok'
// var tagName=document.querySelector('i').innerHTML='bye'


// var hiper=document.querySelector('ul li a').innerHTML='ok'

// var paraAll=document.querySelectorAll('p')[5].innerHTML='okkkkkkkkkkkkkk';



// function message(){
//   var text=document.querySelector('.text');
//   text.innerHTML='clicked'
// }

// var img=document.querySelector('#img_view');

// function viewImg1(){

//   img.src='img/1.jpg'
  
// }

// function viewImg2(){

//   img.src='img/2.jpg'
//     img.style.borderRadius="50%"

  
// }

//create items

// var listNumber=1;

// function createList(){
//   var list=document.createElement("li");
//   listNumber = listNumber + 1;
//   var listText=document.createTextNode(`list ${listNumber}`)
//   list.appendChild(listText);

//   var ulList=document.querySelector('.list');
//   ulList.appendChild(list);
// }

// function deletList(){

// var ulList=document.querySelector('.list');
// var removeList=document.querySelectorAll('.list li');
// console.log(removeList);


// ulList.removeChild(removeList[--listNumber]);

 
// }


// var parent=document.querySelector('.parend');

// console.log(parent);

// var child=parent.querySelector('li');

// console.log(child);



// var names=document.querySelector('.names');


// function add_style(){

// var styleadd=names.classList

// styleadd.add('text-center', 'text-3xl', 'font-bold', 'text-red-800')

// }

// function add_remove(){
//   names.classList.remove('text-center', 'text-3xl', 'font-bold', 'text-red-800')
// }


var btt=document.querySelector('.litsener');

btt.addEventListener('click',function(){

  alert('hello')
})

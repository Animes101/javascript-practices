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


// var btt=document.querySelector('.litsener');

// btt.addEventListener('mouseover',function(){

//   alert('hello')
// })

//==56 enet listeners width multiple
// var buttons=document.querySelectorAll('.btn');
// var display=document.querySelector('#show');

// for(var i=0; i<buttons.length; i++){

//   buttons[i].addEventListener('click',function(){

//     var text=this.innerText;

//     display.innerHTML=text;


// })
// }


// var btn=document.querySelectorAll('button');

// for(var i=0; i<btn.length; i++){

//   btn[i].addEventListener('click',function(){

//    var text=this.innerText;
//    styleAdd(text);
//    audioPlay(text);

//   })
// }

// function audioPlay(text){
//   switch(text){
//     case 'play1':
//       var sound=new Audio('/audio/reliable-safe-327618.mp3')
//       sound.play();
//       break;

//       case 'play2':
//         var sound=new Audio('/audio/reliable-safe-327618.mp3')
//       sound.play('/audio/riser-hit-sfx-001-289802.mp3');
//       break;
//       case 'play3':
//         var sound=new Audio('/audio/sound-design-elements-sfx-ps-022-302865.mp3')
//         sound.play();
//         break;
//    } 
// }


// function styleAdd(text){

//   var animation=document.querySelector('.'+text);

//   animation.classList.add('p-5','bg-black','text-white','text-lg');

//   setTimeout(function(){

//     animation.classList.remove('p-5','bg-black','text-white','text-lg','rounded-lg');

//   },1000)


// }

// document.addEventListener('keypress',function(e){

//   var text=e.key;

//   console.log(text)
//   if(text=='a'){
//     styleAdd('play1');
//    audioPlay('play1');

//   }else if(text=='b'){
//     styleAdd('play2');
//    audioPlay('play2');
//   }else if(text=='c')
//     styleAdd('play3');
//    audioPlay('play3');
  
// })




//==60  change Enent  Input Tag

// var password=document.querySelector('#pass');

// password.addEventListener('change',eventHandler)

// function eventHandler(e){




// }

// var depart=document.querySelector('#dep')

// depart.addEventListener('change',depHandler)

// function depHandler(e){

//   console.log(e.target.value);

// }


// var age=document.querySelectorAll('input[name=age]');


// Array.from(age).map((items)=>{

//   items.addEventListener('change',function(e){

//     console.log(e.target.checked);


//   })

// })





//61  ==form submit

// var form=document.querySelector('form')
// var names=document.querySelector('#myname');
// var email=document.querySelector('#email');
// var password=document.querySelector('#pass')


// form.addEventListener('submit',formHandler)

// function formHandler(e){
//   e.preventDefault()

//   var userInfo={
//     names:names.value,
//     email:email.value,
//     password:password.value,
//   }
//   console.log(userInfo);

//   names.value='';
//   email.value='';
//   password.value='';




// }



// var video=document.querySelector('video');
// var message=document.querySelector('div');

// video.addEventListener('pause',handlePush)


// function handlePush(){
//   message.classList.remove('hidden')


// }

// video.addEventListener('play',handlePlay)


// function handlePlay(){
//   message.classList.add('hidden')

  
// }


// window.addEventListener("load" ,function(){
//   console.log('load')
// })
// window.addEventListener("unload" ,function(){
//   console.log('unload')
// })
// window.addEventListener("scroll" ,function(){
//   console.log('scroll')


// })

// window.addEventListener("resize" ,function(){
//   console.log('resize')
// })


// var sum=[]

// var show=document.querySelector('p');
// var text=document.querySelector('textarea');
// text.addEventListener('keyup',function(e){


//   console.log(e.shiftKey)


// })

// var input=document.querySelector('input');

// input.addEventListener('blur',function(){
//   console.log('bler')
// })

// input.addEventListener('focus',function(){
//   console.log('focus')
// })
// input.addEventListener('focusin',function(){
//   console.log('in')
// })
// input.addEventListener('focusout',function(e){

//   input.value=e.target.value.toUpperCase();
//   console.log('out')
// })
// var input=document.querySelector('input');
// var para=document.querySelector('p');



// para.addEventListener('copy',function(){
//   console.log('copy')
// })
// para.addEventListener('cut',function(){
//   console.log('cut')
// })
// input.addEventListener('paste',function(){
//   console.log('past')
// })

// var grag=document.querySelector('p');
// var div=document.querySelector('div');


// grag.addEventListener('dragstart',function(e){

//   e.dataTransfer.setData('text',e.target.id);

// })

// div.addEventListener('dragover',function(e){
//   e.preventDefault();


// })

// div.addEventListener('drop',function(e){
//   var id=e.dataTransfer.getData('text')
//   div.appendChild(document.getElementById(id))

// })



//==70  location

// var list=document.querySelector('ul');

// var href=list.children[0].innerText=window.location.href;
// var origin=list.children[1].innerText=window.location.origin
// var protocal=list.children[2].innerText=window.location.protocol;
// var host=list.children[3].innerText=window.location.host;
// var hostName=list.children[4].innerText=window.location.hostname;

// console.log(window.location.pathname);
// console.log(window.location.port);


//popap box

// var confirmAnser=confirm('do you want');

// if(confirmAnser){
//   console.log('yer')
// }else{
//   console.log('no')
// }


// var yourName=prompt('enter Your Name');

// if(yourName==null || yourName==''){

//   console.log('please enter youyr name')

// }else{
//   console.log(`wellcome ${yourName}`);
// }



// setTimeOut and SetInterval 


// setTimeout(() => {

//   console.log('2 s')
  
// }, 2000);


// setInterval(displayMessage, 1000);

// function displayMessage(){
//   console.log('hello world')
// }


// var startTimeBtn=document.querySelector('button');
// var time=document.querySelector('h1');

// startTimeBtn.addEventListener('click',displayClock);


// function displayClock(){
//   var data=new Date();
//   var hours=data.getHours();
//   var minutes=data.getMinutes();
//   var second=data.getSeconds();

//   setInterval(()=>{
//     displayClock()

//   },1000)

//   time.innerText=`hours${hours}: minutes${minutes}:second${second}`;
// }

//Error Handlening 


// try{
//   alert(xxx)
// }catch(e){

//   console.log(e.message)
//   console.log(e.name)
// }finally{
//   console.log('finaly ok')
// }

// document.querySelector('#submit').addEventListener('click',errorHandle);
// var showErr=document.querySelector('p');


// function errorHandle(e){
//   e.preventDefault();

//   var numbers=document.querySelector('#text').value ;

//   try{
//     if(numbers<5){
//       throw 'numbers is very low'
//     }else if(numbers>10){
//       throw 'numbers is very high'
//     }
//   }catch(e){


//     showErr.innerText=e
//   }

// }



// ES6


// var x=6;

// if(true){
// let  x=5
// console.log(x);
// }

// console.log(x);
// let x=0;
// for(let x=0; x<=100; x++){

//   console.log(x);

// }

// console.log(x)


// const manto=5;

// manto=50;

// console.log(manto);


// const x=90;
// const y=80;

// const total=x+y;

// console.log(`total ${total}`);

//es6 function
// var sum=0;

// const add=(x,y)=>{

// sum =x+y;


// }

// add(50,60);

// console.log(sum);


// Hosting

// x=90

// console.log(x)
// var x;  


// Default and Rest Parameter

// function message(x='this is default parameters'){

//   console.log(`${x}`)
// }
// message('asdfasdf');



// function message2(x,y,...z){
//   console.log(`${z} ${x} ${y}`)
// }

// message2(40,50,30,20,400,3000,)



// sprade operator


// let names=['animes barman','priyanka rani'];
// let namesOr=['animes','priyanka'];
// const total=[...names,...namesOr];
// console.log(total)




// let bio1={
//   name:'animes',
//   age:30,
// }

// let bio2={
//   fatherName:'purna chandra barman',
//   motherName:'shephali rani',
// }


// let fullBio={
//   ...bio1,...bio2
// }

// console.log(fullBio);



//object literals

// function studentInfo(name,age){

//   return {
//     name,
//     age,
//   }


// }

// console.log(studentInfo('animes',40));

//conssoze
// let mesage={
//   body(){
//     return 'mello world'
//   }

// }

// console.log(mesage.body())

//for of and for in


// let fols=['mango','lichu','katheal','labu'];

// for(let fol of fols){
//   console.log(fol);
// }


// let students={
//   name:'anisul islam',
//   class:12,
//   age:30,
//   cgap:3.40
// }

// for(let x in students){
//   console.log(`${students[x]} ${x}`)
// }


// let numbers=[4,3,4,5,6,,7,7,5,4,3,3,4,54,5,6,66,6,6];

// let square=[];
// numbers.forEach(numbe => {

//   square.push(numbe*numbe);
  
// });

// console.log(square);


// ==71 forEach map filter

// let numbers=[4,3,4,5,6,7,7,5,4,3,3,4,54,5,6,66,6,6];

// let squareNumber=numbers.map((item)=>{return item*item});


// console.log(squareNumber);


// let numbers=[50,5,6,7,8,9,3,2,1];

// let bigNuber=numbers.filter((items)=>{
//   return items>5
// })

// console.log(bigNuber);


//==72 arrow function

// function display(){
//   console.log('display show traditinal function');


// }


// const display2=()=>{
//   console.log('arrow function')
// }

// display();
// display2();

// const dis=(x,y)=> x+y;

// console.log(dis(40,50));


// const students = [
//   {
//     id: 1,
//     name: "Ayesha Khatun",
//     age: 20,
//     grade: "A",
//     subjects: ["Math", "Physics", "Biology"]
//   },
//   {
//     id: 2,
//     name: "Rahim Uddin",
//     age: 22,
//     grade: "B+",
//     subjects: ["English", "History", "Geography"]
//   },
//   {
//     id: 3,
//     name: "Sadia Islam",
//     age: 19,
//     grade: "A+",
//     subjects: ["Chemistry", "Math", "ICT"]
//   },
//   {
//     id: 4,
//     name: "Tanvir Hossain",
//     age: 21,
//     grade: "B",
//     subjects: ["Economics", "Accounting", "Management"]
//   },
//   {
//     id: 5,
//     name: "Nusrat Jahan",
//     age: 20,
//     grade: "A-",
//     subjects: ["Bangla", "English", "Sociology"]
//   }
// ];





// function display(){

//   return students.filter((item)=> {
//     return item.age >20;
//   }).map((stu)=>{ 
//     return stu.name;
//   });

  
// }

// console.log(display())

// const display=()=> students.filter((item)=> item.age >20).map((studName)=>studName.name);




// console.log(display())





//distraciting

// let numbers=[4,3,4,5,6,7,7,5,4,3,3,4,54,5,6,66,6,6];

// let dis=[dd ,cc , ...z]=numbers;

// console.log(dis)

//swap

// var ami=90;
// var jami=70;
// [ami,jami]=[jami,ami]

// console.log(jami)


// const studentInfo={
//   id:1,
//   name:'animes barman',
//   gpa:3.40,
//   age:20
// }


// const {id, name, age}=studentInfo;

// console.log(id)



// const studentInfo=({fulName,id})=>{

//   console.log(fulName,id);

// }


// const student={

//   id:200,
//   fulName:'Animes Barman',
// }

// studentInfo(student);


//==75 find findindex


// const numbers=[9,8,7,76,65,54,4,3,3,2,];


// const friestTopNumber=numbers.find((item)=>item>20);

// console.log(friestTopNumber);

// const frientIndex=numbers.findIndex((item)=> item>30);

// console.log(frientIndex);



//startWith ,endsWidth, includes


// const names='animes barman';

// const friens=names.startsWith('imes',2);

// console.log(friens);

// const last=names.endsWith('man');

// console.log(last);



//==77 class


// import { ok } from "./module";

// console.log(ok)


//class


//  class student{
//   constructor(id,name0){
//     this.id=id;
//     this.name0=name0;
//   }

//   set NameStudent(name){
//     this.name=name;
//   }
//  }


//  const student1= new student(44,'animes')
//  const student2= new student(33,'priyanka')

//  console.log(student1)
//  console.log(student2)


//  student1.NameStudent='harami ho'

//  console.log(student1)


//== Synchronous vs Asynchronous


// aSynchronous

// console.log('task1')
// console.log('task2')
// setTimeout(() => {
//   console.log('task3')
// }, 2000);
// console.log('task4')
// console.log('task5')
// console.log('task6')
// console.log('task7')
// console.log('task8')


//callback and higher order function

// function square(x){
//   console.log(x*x);

// }

// // const y=square;

// // y(300)

// function higWoder(x,callback){

//   callback(x);

// }


// higWoder(50,square)




// const task1=(callback)=>{
//   console.log('heloo1')
//   callback();
// }

// const task2=(callback)=>{
//   console.log('heloo2')
//   callback()
// }

// setTimeout(() => {

//   task2();
  
// }, 2000);
// const task3=(callback)=>{
//   console.log('heloo3')
//   callback()
// }
// const task4=(callback)=>{
//   console.log('heloo4')
//   callback()
// }
// const task5=()=>{
//   console.log('heloo6')
// }
// const task6=(callback)=>{
//   console.log('heloo7')
// }

// task1(()=>{
//   task2(()=>{
//     task3(()=>{
//       task4(()=>{
//         task5(()=>{
//           task6()
//         })
//       })
//     })
//   })
// })



// promise part-1

// const  promise1=new Promise((res,rej)=>{

//   const isPromise=true;

//   setTimeout(() => {
//     if(isPromise){
//     res('promise 1 is resolve');
//   }else{
//     rej('promise 1 is not resolve')
//   }
    
//   }, 2000);

// })

// const promise2=new Promise((res)=>{

//   setTimeout(() => {
//     res('promise2 is resolved')
    
//   }, 1000);
// })


// promise1.then((res)=>{
//   console.log(res)
// }).catch((err)=>{
//   console.log(err)
// })

// promise2.then((res)=>{
//   console.log(res);
// })


// Promise.all([promise1,promise2]).then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err)
// })

// Promise.race([promise1,promise2]).then((res)=>{
//   console.log(res)
// })

//promise part-2 


// const task1=()=>{
//   return new Promise((res,rej)=>{
//     res('task one is complated')
//   })
// }

// const task2=()=>{
//   return new Promise((res,rej)=>{
//     rej('error task2')
//   })
// }
// const task3=()=>{
//   return new Promise((res,rej)=>{
//     res('task 3 is complated')
//   })
// }
// const task4=()=>{
//   return new Promise((res,rej)=>{
//     res('task 4 is complated')
//   })
// }

// task1().then((res)=>{
//   console.log(res);
// })
// .then(task2)
// .then((res)=>{
//   console.log(res)
// })
// .then(task3)
// .then((res)=>{
//   console.log(res)
// })
// .then(task4)
// .then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err)
// })


//  async await javascript


// const task1=()=>{
//   return new Promise((res,rej)=>{
//     res('task one is complated')
//   })
// }

// const task2=()=>{
//   return new Promise((res,rej)=>{
//     rej('error task2')
//   })
// }
// const task3=()=>{
//   return new Promise((res,rej)=>{
//     res('task 3 is complated')
//   })
// }
// const task4=()=>{
//   return new Promise((res,rej)=>{
//     res('task 4 is complated')
//   })
// }

//  async function showAllTask(){

//   try{
//     const t1 = await task1();
//   console.log(t1);
//   const t2=await task2()
//   console.log(t2)
//   const t3=await task3()
//   console.log(t3)
//   }catch(e){
//     console.log(e);
//   }
// }


// showAllTask()



// XMLHttpRequest--property--function

// const makeRequest=(method,url,data)=>{
  
//   const xhl=new XMLHttpRequest();

//   xhl.open(method,url);

//   xhl.setRequestHeader('Content-Type', 'application/json')

//   xhl.onload=()=>{
//     const data=xhl.response;

//     console.log(JSON.parse(data));
//   }

//   xhl.onerror=()=>{
//     console.log('error ')
//   }

//   xhl.send(JSON.stringify(data));

// }


// const getData=()=>{

//   makeRequest('GET','https://fakestoreapi.com/products')
// }


// // getData()

// const product = { title: 'New Product', price: 29.99 }

// const sentData=()=>{
//   makeRequest('POST',`https://fakestoreapi.com/products `,{
//      title: 'New Product', price: 29.99
//   })
// }

// // sentData();

// const updateData=()=>{

//   makeRequest('PUT',`https://fakestoreapi.com/products/${0}`,{
//      title: 'Nefff Product', price: 29.99 
//   })
// }

// // updateData();


// const delitData=()=>{
//   makeRequest('DELETE',`https://fakestoreapi.com/products/${1}`)
// }
// delitData()

// calling api from javascript | fetch api



// const makeRequest= async(url,config)=>{


//    const res= await fetch(url,config)
//    if(!res.ok){
//     throw new Error `Error ${res.status}`
//    }
//    const data= await res.json()

//    return data

// }

// const getData=(url)=>{
//        makeRequest(url)
//        .then(res=>console.log(res))
//        .catch(e=> console.log(e));

// }

// getData('https://fakestoreapi.com/products')


// const sendData=(url)=>{
//   const product = { title: 'New Product', price: 29.59 };
// makeRequest(url,{
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify(product)
// })

//   .then(res=>console.log(res))
//   .catch(e=> console.log(e))

// }

// sendData('https://fakestoreapi.com/products')


// const updateData=(url)=>{
//     const product2 = { title: 'Updated Product', price: 39.99 };
// makeRequest(url, {
//   method: 'PUT',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify(product2)
// })
// .then(res=>console.log(res))
//   .catch(e=> console.log(e))


  
// }

// updateData(`https://fakestoreapi.com/products/${1}`)

// const deletProduct=(url)=>{
//     makeRequest(url, {
//   method: 'DELETE'
// })
//   .then(res=>console.log(res))
//   .catch(e=> console.log(e))


// }

// deletProduct(`https://fakestoreapi.com/products/${1}`)




// calling api from javascript | axios api


// axios.get('https://fakestoreapi.com/products')
// .then((res)=> console.log(res.data))
// .catch((e)=>console.log(e))


// const product = { title: 'New Product', price: 29.99 }

// axios.post('https://fakestoreapi.com/products',
//   {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify(product)

// })
// .then((res)=> console.log(res.data))
// .catch((e)=> console.log(e))

// const product2 = { title: 'Updated Product', price: 39.99 };
// axios.put(`https://fakestoreapi.com/products/${5}`,{
//   method: 'PUT',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify(product2)

// })
// .then((res)=> console.log(res.data))
// .catch((e)=> console.log(e))


// axios.delete('https://fakestoreapi.com/products/2')
// .then((res)=> console.log(res.data))
// .catch((e)=> console.log(e))


const callApi= async(config)=>{

  return await axios(config);

}

// const getData=(url)=>{
//   callApi(url)
//   .then((res)=> console.log(res.data))
//   .catch((e)=> console.log(e))
// }

// getData('https://fakestoreapi.com/products');


// const product = { title: 'New Product', price: 29.99 };

// const postData=(url)=>{
//   callApi({
//   url:url,
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify(product)
// })
// .then((res)=> console.log(res.data))
// .catch((e)=> console.log(e))

// }

// postData('https://fakestoreapi.com/products')

// const product2 = { title: 'Updated Product', price: 39.99 };
// const updateData=(url)=>{

//   callApi({
//   url:url,
//   method: 'PUT',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify(product2)
// })
//   .then((res)=> console.log(res.data))
//   .catch((e)=> console.log(e));

// }

// updateData(`https://fakestoreapi.com/products/${1}`)



// const delitData=(url)=>{
//   callApi({
//     url:url,
//     method: 'DELETE'

//   })
//   .then((res)=>console.log(res.data))
//   .catch((e)=> console.log(e))
  
// }

// delitData(`https://fakestoreapi.com/products/${4}`)
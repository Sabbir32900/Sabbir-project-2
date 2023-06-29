
//var sabbir = 67447884;
//console.log(sabbir)
//var sabbir = "gyr ghdr sgggrys hrsf bth a6t tudfrev t6fegh";
//console.log(sabbir)
//var booltype = false ;
//console.log(booltype)

//var rocona ="THE PROBLEM IS GETTING WORSE DAY BY DAY. THERE ARE MANY CAUSES OF LOAD SHEDDING. MISUSE, ILLEGAL CONNECTION AND INSUFFICIENT PRODUCTION ARE THE MAIN CAUSES OF LOAD SHEDDING. SOME DISHONEST PERSONS ARE ALSO RESPONSIBLE FOR IT";

//console.log(rocona.toString());
//var myfd = "sabbir munna nurhossain mahedi abdulla";
//console.log(myfd.indexOf("d"));
// var nam1 = 390.5553;
// var nam2 =490;
// nam1 ="" + nam1;
// var mot = nam1 + nam2 ;
// console.log(mot);
// var nam2 = 550;
// var nam3 = 4;
// var mot = nam2 / nam3;
// console.log(mot);
// var num1 = 20;
// var votar = 99.4999;

// var sum = Math.random(votar) * 100;
// console.log(sum);
//  var num1 = 10;
//  var num2 = 20;
// if(num1 < num2){    
//     console.log("ami na go tumi");
// }
//   else {
//     console.log("sabbir amr name na yes ha ami na");   }
// var x = 50;
// var y = 50;
// if (x > y){
//     console.log("x boro");
// }
// else if(x < y){
//     console.log("y boro");
// }

// else{
//     console.log("same");
// }
// var sum =10;
// switch(sum){
//     case 10:
//         console.log("ami jabo na tumi jao abogh ano ok");
//         break;
//     case 5:
//         console.log("go ami jabo na tumi jao");
//         break;
//     case 1:
//         console.log("ha ha ami na go");
//         break;
//     default:
//         console.log("ai tahole ami jaba ni ok");
// }
// var mydate = new Date();
// console.log(mydate.toLocaleString());

// var fdname = ["sabbir" , "munna" , "mahedi"];
// fdname[1] = 50;
// fdname.push("nurhossain");
// fdname.pop();
// fdname.unshift("nurhossain");
// fdname.shift();

// console.log(fdname);


// var x = 20;
// var y =20;
// if(x < y){
//     console.log("y boro");

// }
// else if(x > y){
//     console.log("x boro");
// }
// else {
//     console.log("x and y 2 ta same")
// }


// var sum = "sabbir";
// switch(sum){
//     case 1:
//         console.log("namebar 1 soathik");
//         break;
//     case 5:
//         console.log("namebar 5 soathik");
//         break;
//     case "sabbir":
//         console.log("namebar sabbir soathik")
//         break;
//         default:
//             console.log("ar na hole sob pagol");
// }


// var sabbirdate = new Date;
// console.log(sabbirdate.toLocaleString());


// var sabbir = new Date;
// console.log(sabbir.toLocaleString())



// var fdname = ["sabbir" , "munna" , "mahedi" , "nurhossain"];
// console.log(fdname.slice(1,3));



// var fdname = ["sabbir" , "munna" , "mahedi" , "nurhossain"];
// fdname.splice(0,2, "sabbir hossain" , "munna hossain" , "mahedi hossain");

// console.log(fdname);



// for(var i = 0; i <= 5; i++){
//     console.log(i);
// }

// var sum = [0,1,2,3,4,5,6,7,8,9];
// for(var i = 0; i <= sum.length; i++){
//     console.log(i);
// }

// var i = 0;
// while(i < 5 ){
//     console.log("sabbir hallo word");
//     i++


// }


// function sum (nam1,nam2){
//     var total = nam1 * nam2;
//     console.log(total);

// }

// sum(10,10);
// sum(5,5);

//function sum (nam1){
//     var total = nam1 * 10;
//     return total;

// }
// var a = sum(10);
// var b = sum(20);
// console.log(a / b);


function Myname (YourName,myparens,phone){
    this.YourName = YourName;
    this.myparens = myparens;
    this.phone    = phone   ;
    this.sum      = function(){
        console.log(this.YourName);
        console.log(this.myparens);
        console.log(this.phone);
    }

}

var newobj1 = new Myname("sabbir hossain" , "furoja khatun" , 01319458837);
var newobj2 = new Myname("niloy hossain" , "furoja khatun" , 01767422899);
var newobj3 = new Myname("mahedi hossain" , "furoja khatun" , 01314544855);
var newobj4 = new Myname("munna hossain" , "furoja khatun" , 01313844056);

newobj1.sum();
newobj2.sum();
newobj3.sum();
newobj4.sum();




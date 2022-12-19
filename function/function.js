//---1---
// function mainFunction(getcallfunction)
// {
// console.log("Main function Executed");
// }
// function callBack()
// {
// console.log("callBack function Executed");
// }
//
// mainFunction(callBack);

//---2---
// function add(a,b)
// {
// 	console.log(a+b);
// }
//  add (10,20)

//---3---
// function add(a,b)
// {
// 	return a+b;
// }
// document.write(add (110,220));

//---4---
// let age = [23,45,78,13,29];
// var x=age.filter(function(value)
// {
// 	return value>=25
// });
// document.write(x);

//----5-filter----
// var num = [0,1,2,3,4,5,6,7,8,9];
// let even = num.filter(function(value)
// {
// 	return value %2==0
// });
//
// let odd = num.filter(function(value)
// {
// 	return value %2!==0
// });
// document.write("Even nos:",even)
// document.write("<br>")
// document.write("Odd nos:",odd);

//---6-find---
// var num = [11,17,2,3,4,5,6,7,8,9];
// let even = num.findIndex(function(value)
// {
// 	return value %2==0
// });
//
// let odd = num.findIndex(function(value)
// {
// 	return value %2!==0
// });
// document.write("Even nos:",even)
// document.write("<br>")
// document.write("Odd nos:",odd);

// ---7-map---
// var a = [1,2,3,4,5,6,7];
// var x = a.map(function(value)
// {
// 	return value*5;
// });
// document.write(x);

//-----prime--------
// var a = parseInt(prompt("enter"));
// if(a>1)
// {
// 	for(i=2;i<a;i++)
// 	{
// 		if(a%i==0)
// 		{
// 			break;
// 		}
// 	console.log("Prime")
// 	}
// }
// else
// {
// 	console.log("Not Prime")
// }

// ---8-Synchronous---
// document.write("Hi"); // First
// document.write("<br>");
//
// document.write("kavzz") ;// Second
// document.write("<br>");
//
// document.write("How are you"); // Third

//----synchronous----
// function synchronous()
// {
// 	var a = 10;
// 	var b = 20;
// 	document.write(a)
// 	document.write("<br>")
// 	document.write(b)
//  document.write("<br>")
// 	document.write(a+b);
// }
// synchronous()

//---9-Asynchronous---
// function asynchronous()
// {
// 	var a = 10;
// 	var b = 20;
// 	console.log(a)
// 	setInterval(function()
// 	{
// 	 console.log(b);
// 	},1000);
// 	console.log(a+b);
// }
// asynchronous()

// ---10-setTimeout---
// setTimeout(function()
// {
// 	console.log("a")
// },5000);
// 	console.log("b")

// ----11-setInterval----
// 	setInterval(function(name)
// 	{
// 		console.log('a',name);
//
// 	},1000,"kavya");

//---12-both---
// function hello()
// {
// 	document.write("heloo");
// 	document.write("<br>")
// }
// setTimeout(hello,4000);
// setInterval(hello,2000)


//---storage---
//localStorage.setItem("name","kavz")
//localStorage.getItem(key)
//localStorage.removeItem(key)
//localStorage.clear()
//sessionStorage.setItem("name","kavz")

//---object---
// var obj={
// 	a:"b",
// 	c:"d",
// };
// var obj1=obj;
// obj1.a="e";
// console.log(obj,obj1);

 JS math----
x = Math.sqrt(676);
//x = Math.cbrt(125); 
//x = Math.abs(-90.09);
//x = Math.random();
//x = Math.floor(Math.random()*10);
//x = Math.random()*10;
//x = Math.pow(2,4); //(m,n)
//x = Math.floor(-5.9); //returns the lowest integer
//x = Math.ceil(-9.4); //returns the highest integer
//x = Math.round(8.5); 
//x = Math.acos(1);
//x = Math.acos(0);
//x = Math.acos(-1);
//x = Math.trunc(89.7899);
//x = Math.sign(-0); //positive 1, negative -1, zero 0
//x = Math.PI;
//x = Math.max(76,78,98);
//x = Math.min(76,78);
//x = Math.log(7);
//x = Math.fround(7.3);
console.log(x)


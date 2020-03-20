//2

// лишние символы в регулярке

let str='http://a';
console.log(/^[https://]|^[http://]/.test(str));

//4

// неверно 

let str0='a.jpg';
console.log(/.jpg$/.test(str0));

//6

// длину тоже в регулярку

let num=1234567;
console.log(/\d/.test(num)||num.length<12||num.length>=1)

//8

// неверно

let my_date='20.03.2020';
let arrdate=my_date.split('.');
console.log(/\d.\d.\d/.test(my_date) && arrdate[0]<=31 && arrdate[0]>=1 && arrdate[1]>=1 && arrdate[1]<=12 && arrdate[2].length==4);

//10

// неверно

let email='random@gmail.com'
console.log(/@gmail.com$|org.ru$|@mail.ru$/.test(email))

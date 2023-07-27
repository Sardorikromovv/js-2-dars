/* if,else,else if */

/*let a = 46;
let b = 10;
let c = 55;
let d = 21*/

/*if (a == 46 && b == 10 && c == 55 && d == 21){
    console.log("Qiymatlarni hammasi to'g'ri")
}
else{
    console.log("Qiymatlardan kamida bittasi notog'ri")
}*/

/*if (a == 45 || b == 14 || c == 41 || d == 21){
    console.log("Qiymatlardan kamida bitttasi togri")
}
else{
    console.log("Qiymatlarning hammasi notogri")
}*/

/* JS data types: underfined,boolean,object */

/*let soz;*/
/*let rost = true*/

/*let rost = 45==45?true:false*/

/*let arrayObject = [45,78,"text",true,false,"js"]*/

/*let oddiyObject = {ism:"Toxir", familya: "Otaxonov",yoshi: "16 yoshda"};*/

/*console.log(oddiyObject.ism,oddiyObject.familya,oddiyObject.yoshi)*/


/* Functions in JS */


/*function savatchanitekshir(){
    if (savatcha.length == 0){
        document.write("Savatchani ichida " +savatcha.length+ "dona ma'lumot bor")
    }
    else{
        document.write("Savatchani ichida " +savatcha.length+ "ta ma'lumot bor")
    }
}
let savatcha = [12,"text"]
savatchanitekshir()*/

/* Date in JS */

let sana = new Date();

/*sana.setFullYear(2007)*/
/*sana.setMonth(12)*/
/*sana.setDate(5)*/

let yil = sana.getFullYear()
let oy = sana.getMonth()
let kun = sana.getDate()
let haftakuni = sana.getDay()
let oylar = ["yanvar","fevral","mart","aprel","may","iyun","iyul","avgust","sentyabr","oktyabr","noyabr","dekabr"]
let kunlar = ["yakshanba","Dushanba","Seshanba","chorshanba","payshanba","juma","shanba"]

document.write(" Bugun " + yil + " - yil " + oylar[oy] + " oyining " +
                         kun + " - kuni. Haftaning " + kunlar[haftakuni] + " - kuni.");









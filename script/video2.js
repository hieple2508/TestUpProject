console.log(`I assume the dream of 200000000 people`)


// //input paramater
// function sum(a,b,d,e,f){
//     return a + b + d + e +f;
// }

// let c = sum(2,3,4,5,3);

// console.log('c = ', c);


// //Arrow Funtion
// let sum2 = (q , w) => {
//     return q + w;
// }

// console.log('check sum arrow function:',sum2(1,1));


// let obj = {
//     name: 'Chin cute',
//     address: 'HoChiMinh city',
//     getName: function(){
//         return this.name, this.address;
//     }
// }
// console.log('Show infor:',obj);

let sum3 = (e, r, callback) => {
    let tong = e + r;
    //waiting
    let i = 0;
    let timer = setInterval(() => {
        callback(tong);
        i++;
        if (i === 5) {
            // sp clear 
            clearInterval(timer);
        }
    }, 1000);

    console.log('i:', i);
}

let printSum = (message) => {
    console.log(`>> check sum: `, message);
}

//callback - goi lai ham xuat hien truoc
sum3(6, 9, printSum)

let filter = arr.filter((item) => item)
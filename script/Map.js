console.log(`Hello Chin Chin!!!! YOU are my sweety <3`);


let arrayy = [1, 2, 3, 4, 5];

// for (let i = 0; i < arrayy.length; i++) {
//     console.log('check i: ', i);
// }

let mapArr = arrayy.map((item, index) => {
    return (
        `<td> ${item} - ${index}  </td>`
    );
})

console.log(`check 1:`, arrayy);
console.log(`check 2:`, mapArr);
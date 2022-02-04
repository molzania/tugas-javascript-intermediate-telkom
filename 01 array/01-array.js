// Kamu diminta untuk membuat sebuah fungsi reverse yang mana akan membalik sebuah array, fungsi reverse memiliki sepsifikasi sebagai berikut:

// memiliki 1 parameter yaitu:
// arr [Array] => array yang akan kita manipulasi nilainya
// return value [Number] berupa sebuah array baru yang sudah terbalik
// Untuk mempermudah proses pengerjaan kamu dapat menggunakan code template dibawah ini

//  const arr = [1, 2, 3];
//  const arr2 = [8, 1, 5, 7];

//  const newArr = reverse(arr);
//  const newArr2 = reverse(arr2);

//  console.log(arr, newArr);
//  console.log(arr2, newArr2);

 //Jawab :

 const arr = [1,2,3];
 const arr2 = [8,1,5,7];

 function reverse(arrayOld){
   let newArr = [];
   while (arrayOld.length){
     newArr.push(arrayOld.pop());
   }
   return newArr;
 }


 console.log(arr, reverse(arr));
 console.log(arr2, reverse(arr2));
 
// Soal - 02
// Kamu diminta untuk membuat sebuah fungsi yang akan mengembalikan total berapa elemen bilangan/number yang melebihi nilai rata-rata dari sebuah array, fungsi tersebut memiliki spesifikasi sebagai berikut:

// memiliki 1 parameter:
// arr [Array of Number] => array 1 dimensi dengan nilai Number
// return value [Number] total angka yang melebihi nilai rata-rata
// Untuk mempermudah proses pengerjaan kamu dapat menggunakan code template dibawah ini

// const arr1 = [1, 3, 4, 1, 2, 8];
// const arr2 = [5, 6, 7, 8, 1, 3];

// function getAverage( .... ) { .... }

// console.log(getAverage(arr1))
// console.log(getAverage(arr2))

// Jawab :

const arr3 = [1,3,4,1,2,8];
const arr4 = [5,6,7,8,1,3];

function getAverage(array2){
  const avg = array2.reduce((a,b) => a + b, 0) / array2.length;

  for (let i = 0; i <= array2.length; i++){
    let num = array2.forEach(value);
    if(num >= avg) {
      
      return "Ada" + num;
    } else {
      return false;
    }
  }
}

console.log(getAverage(arr3));
console.log(getAverage(arr4));


// Soal - 03
// Kamu diminta untuk membuat sebuah fungsi yang mana akan mencari sebuah elemen didalam array multi dimensi, fungsi tersebut memiliki spesifikasi sebagai berikut:

// memiliki 2 parameter:
// arr [Array] => array multi dimensi yang akan kita proses
// num [Number] => angka yang ingin kita cari
// return value [Number]
// fungsi akan mengembalikan null apabila angka yang dicari tidak ditemukan
// fungsi akan mengembalikan index dari angka yang dicari
// Langkah-langkah pengerjaan:

// karna fungsi tersebut menerima sebuah array multi dimensi maka kita perlu merubahnya kedalam 1 dimensi terlebih dahulu
// setelah array 1 dimensi terbentuk, maka kita bisa mencari nilai yang ingin dicari oleh user
// apabila kita tidak menemukan nilai tersebut maka kembalikan null
// dan apabila kita menemukan nilai tersebut, maka kita akan mengembalikan index dari nilai tersebut (index dalam bentuk 1 dimensi bukan multi dimensi)
// const arr = [
//   [10],
//   [9, 7, 1],
//   [2, 8],
// ];

// function searchInArray( .... ) { .... }

// console.log(searchInArray(arr, 3));
// console.log(searchInArray(arr, 2));
// console.log(searchInArray(arr, 4));
// console.log(searchInArray(arr, 8));

//Jawab:
const arr5 = [[10],[9, 7, 1],[2, 8]];

function searchInArray(arr5, num) {
  const array3 = arr5.flat(1);
  const checkNum = array3.includes(num); 
  if(checkNum === true){ 
    for(a = 0; a<=array3.length; a++){
      array3.findIndex(newArray3 => newArray3.value == num);
      return newArray3.value;
    }
    const newArray3 = [];
    for(b = 0; b <= newArray3.length; b++){
      const indexNewArray = newArray3.indexOf(arr5);
      return indexNewArray;
    }
    indexNewArray = [];
    return `Ada ${num}bilangan yang melebihi nilai rata-rata yaitu${indexNewArray[0]} & ${indexNewArray[1]}`;
  } else if (checkNum === false){
    return null;
  }
}

console.log(searchInArray(arr5, 3));
console.log(searchInArray(arr5, 2));
 console.log(searchInArray(arr5, 4));
  console.log(searchInArray(arr5, 8));
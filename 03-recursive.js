// Soal - 01
// Kalian diminta untuk membuat sebuah fungsi sumOfArray dimana ia akan menghitung total dari sebuah array of number, fungsi tersebut memiliki spesifikasi sebagai berikut:

// fungsi harus ditulis menggunakan recursive
// memiliki 1 parameter:
// arr [Array] => array of number yang nanti kita akan cari jumlahnya
// return value [Number] => nilai kembalian berupa sebuah Number
// Untuk mempermudah proses pengerjaan kamu dapat menggunakan code template dibawah ini

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [0, 3, 1, 10, 22];
// function sumOfArray( .... ) { .... }

// console.log(sumOfArray(arr1));
// console.log(sumOfArray(arr2));

//jawab:

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];

function sumOfArray(arr){
  if(arr.length>1){
    return arr.pop()+sumOfArray(arr);
  }else{
    return arr[0];
  }
}


 console.log(sumOfArray(arr1));
 console.log(sumOfArray(arr2));

// Soal - 02
// Pada soal sebelumnya kamu diminta untuk membuat sebuah fungsi untuk mencari total sebuah "array of number", pada soal kali ini kamu diminta untuk membuat sebuah fungsi yang mana akan memberikan jumlah angka yang nilainya melebihi nilai rata-rata. Berikut merupakan langkah-langkah yang dapat kalian gunakan untuk menyelesaikan masalah tersebut:

// pastikan bahwa array yang kalian gunakan pada soal-01 dan soal-02 itu identik atau sama
// cari nilai rata-rata menggunakan fungsi yang sudah kalian buat pada soal-01
// buat sebuah funsi yang mana memiliki 2 parameter
// arr [Array] => array of number
// avg [Number] => nilai rata-rata
// fungsi pada soal-2 akan melakukan checking terhadap tiap-tiap nilai apakah ia melebihi nilai rata-rata atau tidak
// langkah terakhir adalah mengembalikan jumlah dari nilai yang melebihi nilai rata-rata
// Untuk mempermudah pengerjaan kami sudah menyediakan code template

// const avg1 = .....;
// const avg2 = .....;
// function countAboveAvg( .... ) { .... }

// const totalAboveAvg1 = countAboveAvg(arr1, avg1);
// const totalAboveAvg2 = countAboveAvg(arr2, avg2);

// console.log(totalAboveAvg1);
// console.log(totalAboveAvg2);
// Soal - 03
// Kalian diminta untuk membuat fungsi yang mana akan mencari sebuah nilai didalam array of number, fungsi tersebut memiliki spesifikasi sebagai berikut:

// fungsi harus ditulis menggunakan recursive
// memiliki 2 parameter:
// arr [Array] => array of number yang nanti akan kita cari value-nya
// num [Number] => angka yang hendak kita cari
// return value:
// apabila kita tidak menemukan angka tersebut maka kita akan mengembalikan "angka tidak ditemukan"
// apabila kita menemukan angka tersebut maka kita akan mengembalikan "angka ditemukan pada index: $INDEX"
// const arr = [1, 2, 3, 4, 5];
// function searchInArray( .... ) { .... }

// searchInArray(arr, 6);
// searchInArray(arr, 1);
// searchInArray(arr, 8);
// Soal - 04
// Kalian diminta untuk membuat fungsi yang mana nantinya akan mencetak sebuah piramida alfabet, fungsi tersebut memiliki spesifikasi sebagai berikut:

// fungsi harus ditulis menggunakan recursive

// ia memiliki 2 parameter:

// tipe data yang dimiliki keduanya adalah Number
// nilai dari 2 parameter tersebut dianjurkan sama
// bentuk segitiga dapat kalian cetak menggunakan console.log didalam fungsi trianglePattern

// kalian hanya diperbolehkan untuk membuat "1 BUAH TRADITIONAL LOOP", hal ini untuk mempermudah kalian dalam proses penyelesaian tugas.

// akan tetapi kalian juga diperbolehkan untuk menyelesaikan soal ini tanpa menggunakan traditional loop

// function trianglePattern( .... ) { .... }

// const first = 5;
// const second = 3;
// const third = 2;

// trianglePattern(first, first);
// trianglePattern(second, second);
// trianglePattern(third, third);
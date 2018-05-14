let jumlah_isi_board = 100;
let indeks_baris = 0;
let kolom_board = 10;
let baris_board = 10; 

// perulangan jumlah baris
for(let i = 1; i <= baris_board; i++){
  // jika sisa bagi = 1 -> maka lakukan perulangan++ untuk kolom ganjil (100, 80, 60, 40, 20)
  // jika sisa bagi = 0 -> maka lakukan perulangan-- untuk kolom genap (81, 61, 41, 21, 1)
  if (indeks_baris % 2 == 1){
    let angka_ganjil = jumlah_isi_board - 9;
    for(j=1; j<=kolom_board; j++){            
      if (j == 10) {
        process.stdout.write(angka_ganjil + " ");
      }else{
        process.stdout.write(angka_ganjil + ", ");
      }    
      angka_ganjil++;
      jumlah_isi_board--;
    }    
    console.log();    
  }else {
    for(k=1; k<=kolom_board; k++){      
      if (k == 10) {
        process.stdout.write(jumlah_isi_board + " ");
      }else{
        process.stdout.write(jumlah_isi_board + ", ");  
      }    
      jumlah_isi_board--;
    }
    console.log();
  }

  
  indeks_baris++; 
}
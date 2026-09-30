const dataHobi = [
  { nama: "Andre", hobi: "Lari" },
  { nama: "Galang", hobi: "Renang" },
  { nama: "Iky", hobi: "Gaming" },
  { nama: "Yoga", hobi: "Bulutangkis" },
  { nama: "Dani", hobi: "Main Bola" },
  { nama: "Mail", hobi: "Lari" },
  { nama: "Maul", hobi: "Gaming" },
  { nama: "Akbar", hobi: "Renang" },
  { nama: "Varo", hobi: "Bulutangkis" },
  { nama: "Asrofi", hobi: "Main Bola" },
  { nama: "Revano", hobi: "Gaming" },
  { nama: "Dika", hobi: "Lari" },
  { nama: "Rifki", hobi: "Main Bola" },
  { nama: "Rafi", hobi: "Renang" },
  { nama: "Fauzan", hobi: "Bulutangkis" },
];

console.log("SPIL SEMUA DATANYA : \n", dataHobi);

//FUNGSI MAP
const upcase = dataHobi.map((orang) => orang.nama.toUpperCase());

console.log("\n");

console.log("Penggunaan fungsi map() untuk uppercase yaitu : \n", upcase);

//FUNGSI FILTER
const hobigaming = dataHobi.filter((orang) => orang.hobi === "Gaming");

console.log(
  "\n Penggunaan fungsi filter() Orang-orang yg hobinya gaming :\n",
  hobigaming
);

// FUNGSI REDUCE
const totalKarakterNama = dataHobi.reduce((total, orang) => {
  return total + orang.nama.length;
}, 0);

console.log(
  "\n Penggunaan fungsi reduce() total karakter seluruh nama:",
  totalKarakterNama
);

// FUNGSI FIND
const orangHobiRenang = dataHobi.find((orang) => orang.hobi === "Renang");

console.log(
  "\n Penggunaan fungsi find() orang pertama yang hobi Renang:",
  orangHobiRenang
);

//FUNGSI SOME
const adaHobiGaming = dataHobi.some((orang) => orang.hobi === "Gaming");

console.log(
  "\n Penggunaan fungsi some() apakah ada yang hobi Gaming?:",
  adaHobiGaming
);

//FUNGSI EVERY
const semuaPunyaHobi = dataHobi.every((orang) => orang.hobi !== "");

console.log(
  "\n Penggunaan fungsi every() apakah semua orang memiliki hobi?:",
  semuaPunyaHobi
);

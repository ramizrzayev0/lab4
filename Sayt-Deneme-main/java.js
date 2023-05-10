let q1 = +(prompt("İmtahan 1 qiymətini daxil edin (0-10 aralığında):"));
let q2 = +(prompt("İmtahan 2 qiymətini daxil edin (0-10 aralığında):"));
let q3 = +(prompt("İmtahan 3 qiymətini daxil edin (0-10 aralığında):"));
let q4 = +(prompt("İmtahan 4 qiymətini daxil edin (0-10 aralığında):"));

let average = (q1 + q2 + q3 + q4) / 4;

alert("Ortalama qiymət: " + average.toFixed(2));

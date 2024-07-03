// เริ่มเขียนโค้ดตรงนี้
function printStar(n) {
  let finalResult = "";

  for (let i = 1; i <= n; i++) {
    let rowResult = "";
    for (let j = 1; j <= i; j++) {
      rowResult = rowResult + "*" + "\t";
    }
    finalResult = finalResult + rowResult + "\n";
  }
  return finalResult;
}

console.log(printStar(6));

// เปลี่ยนบรรทัดที่8 จาก +J เป็น +"*"

// เริ่มเขียนโค้ดตรงนี้
function printPattern(n) {
  let finalResult = "";

  for (let i = 1; i <= n; i++) {
    let rowResult = "";
    for (let j = 1; j <= i; j++) {
      rowResult = rowResult + j + "\t";
    }
    finalResult = finalResult + rowResult + "\n";
  }
  return finalResult;
}

console.log(printPattern(6));

// n รับค่าจำนวนบรรทัดที่ต้องการ
// finalResult ไว้เก็บผลลัพท์ทั้งหมด
// loop นอก วนนับจำนวนเเถวตามที่ต้องการ
// loop ใน วนเพื่อเพิ่มตัวเลข J เข้าไปใน string rowResult

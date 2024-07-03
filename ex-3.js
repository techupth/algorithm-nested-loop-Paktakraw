// เริ่มเขียนโค้ดตรงนี้
function multiplicationTable(n) {
  let finalResult = "";

  for (let i = 1; i <= n; i++) {
    let rowResult = "";
    for (let j = 1; j <= n; j++) {
      rowResult = rowResult + j * i + "\t";
    }
    finalResult = finalResult + rowResult + "\n";
  }
  return finalResult;
}

console.log(multiplicationTable(5));

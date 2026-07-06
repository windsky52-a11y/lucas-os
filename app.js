// ===== 初始資料 =====
let income = 71000;
let expense = 10000 + 1200 + 7000 + 10000; 
let stockIncome = 12000;
let printIncome = 4000;

income += stockIncome + printIncome;

// ===== 計算 =====
let balance = income - expense;

let totalAssets = 2400000;

// ===== 顯示 =====
document.getElementById("income").innerText = income;
document.getElementById("expense").innerText = expense;
document.getElementById("balance").innerText = balance;
document.getElementById("totalAssets").innerText = totalAssets;

/// var numb = document.getElementById("squat").value;

/// var myTable = document.getElementById("wk1");
/// myTable.rows[1].cells[0].innerHTML = numb;

/// document.getElementById("test1").innerHTML = numb;

function changeTable(){
  // Get all the rows of the table
  var rows = document.getElementById("wk1").rows;

  // Target row and col index
  var targetRow = 1;
  var targetCol = 1;

  // Target row with all its cells
  var targetRowCells = rows[targetRow].cells;

  // week 1, row 1
  document.getElementById("t1").innerHTML = roundNearest5(document.getElementById("mp").value *0.4 * 0.9) + "x5";
  document.getElementById("t2").innerHTML = roundNearest5(document.getElementById("dl").value *0.4 * 0.9) + "x5";
  document.getElementById("t3").innerHTML = roundNearest5(document.getElementById("bp").value *0.4 * 0.9) + "x5";
  document.getElementById("t4").innerHTML = roundNearest5(document.getElementById("squat").value *0.4 * 0.9) + "x5";

  // week 1, row 2
  document.getElementById("t5").innerHTML = roundNearest5(document.getElementById("mp").value *0.5 * 0.9) + "x5";
  document.getElementById("t6").innerHTML = roundNearest5(document.getElementById("dl").value *0.5 * 0.9) + "x5";
  document.getElementById("t7").innerHTML = roundNearest5(document.getElementById("bp").value *0.5 * 0.9) + "x5";
  document.getElementById("t8").innerHTML = roundNearest5(document.getElementById("squat").value *0.5 * 0.9) + "x5";

  // week 1, row 3
  document.getElementById("t9").innerHTML = roundNearest5(document.getElementById("mp").value *0.6 * 0.9) + "x3";
  document.getElementById("t10").innerHTML = roundNearest5(document.getElementById("dl").value *0.6 * 0.9) + "x3";
  document.getElementById("t11").innerHTML = roundNearest5(document.getElementById("bp").value *0.6 * 0.9) + "x3";
  document.getElementById("t12").innerHTML = roundNearest5(document.getElementById("squat").value *0.6 * 0.9) + "x3";
  
  // week 1, row 4
  document.getElementById("t13").innerHTML = roundNearest5(document.getElementById("mp").value *0.65 * 0.9) + "x5";
  document.getElementById("t14").innerHTML = roundNearest5(document.getElementById("dl").value *0.65 * 0.9) + "x5";
  document.getElementById("t15").innerHTML = roundNearest5(document.getElementById("bp").value *0.65 * 0.9) + "x5";
  document.getElementById("t16").innerHTML = roundNearest5(document.getElementById("squat").value *0.65 * 0.9) + "x5";

  // week 1, row 5
  document.getElementById("t17").innerHTML = roundNearest5(document.getElementById("mp").value *0.75 * 0.9) + "x5";
  document.getElementById("t18").innerHTML = roundNearest5(document.getElementById("dl").value *0.75 * 0.9) + "x5";
  document.getElementById("t19").innerHTML = roundNearest5(document.getElementById("bp").value *0.75 * 0.9) + "x5";
  document.getElementById("t20").innerHTML = roundNearest5(document.getElementById("squat").value *0.75 * 0.9) + "x5";

  // week 1, row 6
  document.getElementById("t21").innerHTML = roundNearest5(document.getElementById("mp").value *0.85 * 0.9) + "x5+";
  document.getElementById("t22").innerHTML = roundNearest5(document.getElementById("dl").value *0.85 * 0.9) + "x5+";
  document.getElementById("t23").innerHTML = roundNearest5(document.getElementById("bp").value *0.85 * 0.9) + "x5+";
  document.getElementById("t24").innerHTML = roundNearest5(document.getElementById("squat").value *0.85 * 0.9) + "x5+";

////////////////////////////

  // week 2, row 1
  document.getElementById("t25").innerHTML = roundNearest5(document.getElementById("mp").value *0.4 * 0.9) + "x5";
  document.getElementById("t26").innerHTML = roundNearest5(document.getElementById("dl").value *0.4 * 0.9) + "x5";
  document.getElementById("t27").innerHTML = roundNearest5(document.getElementById("bp").value *0.4 * 0.9) + "x5";
  document.getElementById("t28").innerHTML = roundNearest5(document.getElementById("squat").value *0.4 * 0.9) + "x5";

  // week 2, row 2
  document.getElementById("t29").innerHTML = roundNearest5(document.getElementById("mp").value *0.5 * 0.9) + "x5";
  document.getElementById("t30").innerHTML = roundNearest5(document.getElementById("dl").value *0.5 * 0.9) + "x5";
  document.getElementById("t31").innerHTML = roundNearest5(document.getElementById("bp").value *0.5 * 0.9) + "x5";
  document.getElementById("t32").innerHTML = roundNearest5(document.getElementById("squat").value *0.5 * 0.9) + "x5";

  // week 2, row 3
  document.getElementById("t33").innerHTML = roundNearest5(document.getElementById("mp").value *0.6 * 0.9) + "x3";
  document.getElementById("t34").innerHTML = roundNearest5(document.getElementById("dl").value *0.6 * 0.9) + "x3";
  document.getElementById("t35").innerHTML = roundNearest5(document.getElementById("bp").value *0.6 * 0.9) + "x3";
  document.getElementById("t36").innerHTML = roundNearest5(document.getElementById("squat").value *0.6 * 0.9) + "x3";
  
  // week 2, row 4
  document.getElementById("t37").innerHTML = roundNearest5(document.getElementById("mp").value *0.7 * 0.9) + "x3";
  document.getElementById("t38").innerHTML = roundNearest5(document.getElementById("dl").value *0.7 * 0.9) + "x3";
  document.getElementById("t39").innerHTML = roundNearest5(document.getElementById("bp").value *0.7 * 0.9) + "x3";
  document.getElementById("t40").innerHTML = roundNearest5(document.getElementById("squat").value *0.7 * 0.9) + "x3";

  // week 2, row 5
  document.getElementById("t41").innerHTML = roundNearest5(document.getElementById("mp").value *0.8 * 0.9) + "x3";
  document.getElementById("t42").innerHTML = roundNearest5(document.getElementById("dl").value *0.8 * 0.9) + "x3";
  document.getElementById("t43").innerHTML = roundNearest5(document.getElementById("bp").value *0.8 * 0.9) + "x3";
  document.getElementById("t44").innerHTML = roundNearest5(document.getElementById("squat").value *0.8 * 0.9) + "x3";

  // week 2, row 6
  document.getElementById("t45").innerHTML = roundNearest5(document.getElementById("mp").value *0.9 * 0.9) + "x3+";
  document.getElementById("t46").innerHTML = roundNearest5(document.getElementById("dl").value *0.9 * 0.9) + "x3+";
  document.getElementById("t47").innerHTML = roundNearest5(document.getElementById("bp").value *0.9 * 0.9) + "x3+";
  document.getElementById("t48").innerHTML = roundNearest5(document.getElementById("squat").value *0.9 * 0.9) + "x3+";

////////////////////////////

  // week 3, row 1
  document.getElementById("t49").innerHTML = roundNearest5(document.getElementById("mp").value *0.4 * 0.9) + "x5";
  document.getElementById("t50").innerHTML = roundNearest5(document.getElementById("dl").value *0.4 * 0.9) + "x5";
  document.getElementById("t51").innerHTML = roundNearest5(document.getElementById("bp").value *0.4 * 0.9) + "x5";
  document.getElementById("t52").innerHTML = roundNearest5(document.getElementById("squat").value *0.4 * 0.9) + "x5";

  // week 3, row 2
  document.getElementById("t53").innerHTML = roundNearest5(document.getElementById("mp").value *0.5 * 0.9) + "x5";
  document.getElementById("t54").innerHTML = roundNearest5(document.getElementById("dl").value *0.5 * 0.9) + "x5";
  document.getElementById("t55").innerHTML = roundNearest5(document.getElementById("bp").value *0.5 * 0.9) + "x5";
  document.getElementById("t56").innerHTML = roundNearest5(document.getElementById("squat").value *0.5 * 0.9) + "x5";

  // week 3, row 3
  document.getElementById("t57").innerHTML = roundNearest5(document.getElementById("mp").value *0.6 * 0.9) + "x3";
  document.getElementById("t58").innerHTML = roundNearest5(document.getElementById("dl").value *0.6 * 0.9) + "x3";
  document.getElementById("t59").innerHTML = roundNearest5(document.getElementById("bp").value *0.6 * 0.9) + "x3";
  document.getElementById("t60").innerHTML = roundNearest5(document.getElementById("squat").value *0.6 * 0.9) + "x3";
  
  // week 3, row 4
  document.getElementById("t61").innerHTML = roundNearest5(document.getElementById("mp").value *0.75 * 0.9) + "x5";
  document.getElementById("t62").innerHTML = roundNearest5(document.getElementById("dl").value *0.75 * 0.9) + "x5";
  document.getElementById("t63").innerHTML = roundNearest5(document.getElementById("bp").value *0.75 * 0.9) + "x5";
  document.getElementById("t64").innerHTML = roundNearest5(document.getElementById("squat").value *0.75 * 0.9) + "x5";

  // week 3, row 5
  document.getElementById("t65").innerHTML = roundNearest5(document.getElementById("mp").value *0.85 * 0.9) + "x3";
  document.getElementById("t66").innerHTML = roundNearest5(document.getElementById("dl").value *0.85 * 0.9) + "x3";
  document.getElementById("t67").innerHTML = roundNearest5(document.getElementById("bp").value *0.85 * 0.9) + "x3";
  document.getElementById("t68").innerHTML = roundNearest5(document.getElementById("squat").value *0.85 * 0.9) + "x3";

  // week 3, row 6
  document.getElementById("t69").innerHTML = roundNearest5(document.getElementById("mp").value *0.95 * 0.9) + "x1+";
  document.getElementById("t70").innerHTML = roundNearest5(document.getElementById("dl").value *0.95 * 0.9) + "x1+";
  document.getElementById("t71").innerHTML = roundNearest5(document.getElementById("bp").value *0.95 * 0.9) + "x1+";
  document.getElementById("t72").innerHTML = roundNearest5(document.getElementById("squat").value *0.95 * 0.9) + "x1+";

////////////////////////////

  // week 4, row 1
  document.getElementById("t73").innerHTML = roundNearest5(document.getElementById("mp").value *0.4 * 0.9) + "x5";
  document.getElementById("t74").innerHTML = roundNearest5(document.getElementById("dl").value *0.4 * 0.9) + "x5";
  document.getElementById("t75").innerHTML = roundNearest5(document.getElementById("bp").value *0.4 * 0.9) + "x5";
  document.getElementById("t76").innerHTML = roundNearest5(document.getElementById("squat").value *0.4 * 0.9) + "x5";

  // week 4, row 2
  document.getElementById("t77").innerHTML = roundNearest5(document.getElementById("mp").value *0.5 * 0.9) + "x5";
  document.getElementById("t78").innerHTML = roundNearest5(document.getElementById("dl").value *0.5 * 0.9) + "x5";
  document.getElementById("t79").innerHTML = roundNearest5(document.getElementById("bp").value *0.5 * 0.9) + "x5";
  document.getElementById("t80").innerHTML = roundNearest5(document.getElementById("squat").value *0.5 * 0.9) + "x5";

  // week 4, row 3
  document.getElementById("t81").innerHTML = roundNearest5(document.getElementById("mp").value *0.6 * 0.9) + "x5";
  document.getElementById("t82").innerHTML = roundNearest5(document.getElementById("dl").value *0.6 * 0.9) + "x5";
  document.getElementById("t83").innerHTML = roundNearest5(document.getElementById("bp").value *0.6 * 0.9) + "x5";
  document.getElementById("t84").innerHTML = roundNearest5(document.getElementById("squat").value *0.6 * 0.9) + "x5";

  document.getElementById("wk1").classList.remove("hidden");
  document.getElementById("wk2").classList.remove("hidden");
  document.getElementById("wk3").classList.remove("hidden");
  document.getElementById("wk4").classList.remove("hidden");
}


function roundNearest5(num) {
  return Math.round(num / 5) * 5;
}
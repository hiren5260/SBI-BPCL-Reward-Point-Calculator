const btn = document.getElementById("calculate");

btn.addEventListener("click", function () {
  let rewardPoint = document.querySelector("#rewardpoint").value;
  let rewardRate = document.querySelector("#rewardrate").value;

  if (rewardPoint == "" || rewardRate == "") {
    alert("Please fill out the input fields!");
    return;
  }
  rewardPoint = rewardPoint * rewardRate;

  let RP = rewardPoint / 100;
  let CASH = RP * 0.25 ;

  document.querySelector("#result").innerHTML = RP;
  document.querySelector("#result2").innerHTML = CASH;


});

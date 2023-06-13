$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.nav').addClass('affix');
        console.log("OK");
    } else {
        $('.nav').removeClass('affix');
    }
});
$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});
const prices = [27667, 28794, 28528, 28882, 29525, 29525, 28951, 27556, 27657, 27877, 27639, 27024, 26787,
     26798, 26911, 27227, 27022, 27389, 26842, 26884, 27093, 26773, 26869, 27222, 26338, 26475, 26717, 26848, 28110, 27759, 27713];

const ctx = document.getElementById('cryptoChart').getContext('2d');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['01.05', '02.05', '03.05', '04.05', '05.05', '06.05', '07.05','08.05', '09.05','10.05', '11.05','12.05', '13.05','14.05', '15.05',
     '166.05', '17.05','18.05', '19.05','20.05', '21.05','22.05', '23.05','24.05', '25.05','26.05', '27.05','28.05', '29.05','30.05','31.05'],
    datasets: [{
      label: 'Price crypto',
      data: prices,
      backgroundColor: 'rgba(0, 123, 255, 1)',
      borderColor: 'rgba(0, 123, 255, 1)',
      borderWidth: 1.5,
      fill: false,
    }]
  },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});
$("KeyPress").keypress(function(event){
    event = event || window.event;
    if (event.charCode && event.charCode!=0 && event.charCode!=46 && (event.charCode < 48 || event.charCode > 57) )
      return false;
  });

const ToBuy = () =>{
    let num = document.getElementById("VolumCoinBuy").value;
    let price = document.getElementById("PriceBuy").value;
    document.getElementById("profitBuy").innerHTML= num * price;
}
const ToSell = () =>{
    let num = document.getElementById("VolumCoinSell").value;
    let price = document.getElementById("PriceSell").value;
    document.getElementById("profitSell").innerHTML= num * price;
}

const form = document.querySelector('form');
const toRegister = (event) => {
  window.location.href = 'register.html';
};


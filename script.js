var x = document.getElementsByName("chbx");
var y = document.getElementsByName("tip");

function calcTotal() {

    var i;

    for(i = 0; i < x.length; i++) {
        if(x[i].checked == true) {
            var style = Number(x[i].value);
        }
    }

    for(i = 0; i < y.length; i++) {
        if(y[i].checked == true) {
            var tip = Number(y[i].value);
        }
    }

    var calcTip = style * tip;

    var total = style + calcTip;

    document.getElementById("total").innerHTML = "Total: $" + total;

}

function displayAd() {
    setTimeout(function() {
        document.getElementById("ad").style.display = "block";
    }, 5000);
}

displayAd();

function closeAd() {
    document.getElementById("ad").style.display = "none";
}
// Create a calculate function

function calculate() {
    var p = 0;
    var y = 0;
    var r = 0;
    var simpleInterest = 0.0;

    p = parseInt(document.getElementById("principal").value).toLocaleString;
    y = parseInt(document.getElementById("years").value);
    r = parseFloat(document.getElementById("rate").value);

    simpleInterest = parseFloat(p * y * r)/100;

    document.getElementById("result").innerHTML = simpleInterest.toLocaleString('en');
}
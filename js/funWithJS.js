document.getElementById('wrapper01').innerHTML = "<hr>Adjust grams";
document.getElementById('wrapper02').innerHTML = "<br>Calcium Nitrate<br><input id='adjustCalNit' type='number'><br><br>MPK<br><input id='adjustMPK' type='number'><br><br>Epsom Salt<br><input id='adjustEpsom' type='number'><br><br>Trace Elements<br><input id='adjustTrace' type='number'><br><br>";

function ppmCalc() {
var ppmN, ppmP, ppmK, ppmCa, ppmMg,ppmFe;
ppmN = document.getElementById('adjustCalNit').value*41;
ppmP = document.getElementById('adjustMPK').value*60;
ppmK = document.getElementById('adjustMPK').value*75;
ppmCa = document.getElementById('adjustCalNit').value*50;
ppmMg = document.getElementById('adjustEpsom').value*25;
ppmFe = document.getElementById('adjustTrace').value*19.8;
document.getElementById('wrapper05').innerHTML = "Nitrogen: " + ppmN + "<br>Phosphorus: " + ppmP + "<br>Potassium: " + ppmK + "<br>Calcium: " + ppmCa + "<br>Magnesium: " + ppmMg + "<br>Fe: " + ppmFe;

}

document.getElementById('wrapper03').innerHTML = "<button onclick='ppmCalc()'>Calculate</button>";
document.getElementById('wrapper04').innerHTML = "<hr>PPM<br>";



;

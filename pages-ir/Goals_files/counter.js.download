function counter() {
    var regex = /[+-]?\d+(\.\d+)?/g;
    var sum = 0;
    var str = document.getElementById("text").innerHTML;
var floats = str.match(regex).map(function(v) {
  return parseFloat(v);
});
for (var i = 0; i < floats.length; i++) {
  sum += floats[i]
}
document.getElementById("totaal").innerHTML = "Geld Opgehaald: " + sum;
                    
} 
counter();

var template=document.querySelector("war").innerHTML();
var theTemplate = Handlebars.compile(template);

Handlebars.registerHelper('print_data', function () {
console.log("here");
var x=document.getElementById('war').insertRow(0);
var y = x.insertCell(0);
var z = x.insertCell(1);
y.innerHTML=`${this.label}`;
z.innerHTML=`${this.kills}`;
return y,x;
});
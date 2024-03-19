function add(){
    var a=parseInt(document.getElementById("n1").value);
    var b=parseInt(document.getElementById("n2").value);
    document.getElementById("res").textContent=a+b;
}
function sub()
{
    var a=parseFloat(document.getElementById("n1").value);
    var b=parseFloat(document.getElementById("n2").value);
    document.getElementById("res").textContent=a-b;
}
function mul()
{
    var a=parseFloat(document.getElementById("n1").value);
    var b=parseFloat(document.getElementById("n2").value);
    document.getElementById("res").textContent=a*b;
}
function div()
{
    var a=parseFloat(document.getElementById("n1").value);
    var b=parseFloat(document.getElementById("n2").value);
    document.getElementById("res").textContent=a/b;
}
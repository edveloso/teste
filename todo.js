var nodelist = document.getElementsByTagName("li");

var i;

for (i = 0; i < nodelist.length; i++){
    var span = document.createElement("span");
    var txt = document.createTextNode("MeuValor");
    span.appendChild(txt);
    nodelist[i].appendChild(span);
}

function novoElemento() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("cxEntrada").value;
    var td = document.createTextNode(inputValue);
    li.appendChild(td);
    document.getElementById("lista").appendChild(li);
}


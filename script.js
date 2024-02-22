var table = document.createElement("table");
table.className = "table";

var thead = document.createElement("thead");
thead.className = "thead-dark";

var thead_tr=create_tr();

var thead_th1 = create_th("th","scope","col","#");
var thead_th2 = create_th("th","scope","col","First");
var thead_th3 = create_th("th","scope","col","Last");
var thead_th4 = create_th("th","scope","col","Handle");

thead_tr.append(thead_th1,thead_th2,thead_th3,thead_th4);
thead.append(thead_tr);

var tbody = document.createElement("tbody");

var tbody_tr1 = create_tr();

var tbody_th1 = create_th("th","scope","row",1);
var tbody_td1 = create_td("td","Mark");
var tbody_td2 = create_td("td","Otto");
var tbody_td3 = create_td("td","@mdo");

var tbody_tr2 = create_tr();

var tbody_th2 = create_th("th","scope","row",2);
var tbody_td4 = create_td("td","Jacob");
var tbody_td5 = create_td("td","Thornton");
var tbody_td6 = create_td("td","@fat");

var tbody_tr3 = create_tr();

var tbody_th3 = create_th("th","scope","row",3);
var tbody_td7 = create_td("td","Larry");
var tbody_td8 = create_td("td","the Bird");
var tbody_td9 = create_td("td","@twitter");

tbody_tr1.append(tbody_th1,tbody_td1,tbody_td2,tbody_td3);
tbody_tr2.append(tbody_th2,tbody_td4,tbody_td5,tbody_td6);
tbody_tr3.append(tbody_th3,tbody_td7,tbody_td8,tbody_td9);

tbody.append(tbody_tr1,tbody_tr2,tbody_tr3);

table.append(thead,tbody);
document.body.append(table);

   

function create_tr(){
    var tr = document.createElement("tr");
    return tr;
}

function create_th(tagname,attrname,attrvalue,content){
    var th = document.createElement(tagname);
    th.setAttribute(attrname,attrvalue);
    th.innerHTML = content;
    return th;
}

function create_td(tagname,content){
    var td = document.createElement(tagname);
    td.innerHTML = content;
    return td;
}

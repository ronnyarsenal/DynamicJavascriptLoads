function FormLoadComd(){
var x = document.getElementById("ChangingInformation");// body of info
var i = "input"
var l = "label"
var b = "button"
x.innerHTML = " ";//set blank


var CLabel = document.createElement(l);
var t = document.createTextNode("Lookup Commodities"); //text
CLabel.setAttribute("id", "MainLabelLookupComd");
CLabel.appendChild(t);
x.appendChild(CLabel);

var SelectComdLabel = document.createElement(l);
SelectComdLabel.setAttribute("id", "SelectComdLookupLabel");
t = document.createTextNode("Select Cert:");
SelectComdLabel.appendChild(t);
x.appendChild(SelectComdLabel);

var SelectComd = document.createElement("select");
SelectComd.setAttribute("id", "SelectCertLookupCert");
x.appendChild(SelectComd);

//buttons
var brkln = document.createElement("br");
x.appendChild(brkln);

var ViewComd = document.createElement(b);
t = document.createTextNode("View comd:");
ViewComd.appendChild(t);
ViewComd.setAttribute("id", "ViewComd");
//ViewComd.onclick = locktextboxes;
x.appendChild(ViewComd);

var EditComd = document.createElement(b);
t = document.createTextNode("Edit Certs:");
EditComd.appendChild(t);
EditComd.setAttribute("id", "EditComd");
//EditComd.onclick = unlocktextboxes;
x.appendChild(EditComd);

var AddComd = document.createElement(b);
t = document.createTextNode("Add Comd");
AddComd.appendChild(t);
AddComd.setAttribute("id", "AddComd");
//AddComd.onclick = unlocktextboxesAdd;
x.appendChild(AddComd);

var Clear = document.createElement(b);
t = document.createTextNode("Clear");
Clear.appendChild(t);
Clear.setAttribute("id", "ClearButtonCerts");
//Clear.onclick = ClearF;
x.appendChild(Clear);

//checkboxes 
var DCheckbox = document.createElement(i)
DCheckbox.setAttribute("type", "checkbox");
DCheckbox.setAttribute("id", "DeactivateCboxComd");
DCheckbox.disabled = true;
x.appendChild(DCheckbox); 

var DeactivateLabel = document.createElement(l);
DeactivateLabel.setAttribute("id", "DeactivateLabelComd");
t = document.createTextNode("De-Activate:");
DeactivateLabel.appendChild(t);
x.appendChild(DeactivateLabel);

//labels & textboxes
var ComdID = document.createElement(l);
ComdID.setAttribute("id", "ComdID");
t = document.createTextNode("Cert ID:");
ComdID.appendChild(t);
x.appendChild(ComdID);

var ComdName = document.createElement(l);
ComdName.setAttribute("id", "ComdName");
t = document.createTextNode("Comd:");
ComdName.appendChild(t);
x.appendChild(ComdName);

var ComdDescription = document.createElement(l);
ComdDescription.setAttribute("id", "ComdDescription");
t = document.createTextNode("Comd Desctiption:");
ComdDescription.appendChild(t);
x.appendChild(ComdDescription);

var ComdIDTextbox = document.createElement(i);
ComdIDTextbox.setAttribute("id", "ComdIDTextbox");
ComdIDTextbox.disabled = true;
x.appendChild(ComdIDTextbox);

var ComdNTextbox = document.createElement(i);
ComdNTextbox.setAttribute("id", "ComdNumTextbox");
ComdNTextbox.disabled = true;
x.appendChild(ComdNTextbox);

var ComdDTextbox = document.createElement(i);
ComdDTextbox.setAttribute("id", "ComdDescriptionTextbox");
ComdDTextbox.disabled = true;
x.appendChild(ComdDTextbox);
}

//on click events 
function unlocktextboxes(){
var txtbx = document.querySelectorAll('input[type=text]')
for(var i = 0; i < txtbx.length; i++)
{
txtbx[i].disabled = false;
}
//locks all the checkboxes 
var chk = document.querySelectorAll('input[type=checkbox]')
for(var i = 0; i < chk.length; i++)
{
chk[i].disabled = false;
}
}
//view
function locktextboxes(){
//locks all the textboxes
var txtbx = document.querySelectorAll('input[type=text]')
for(var i = 0; i < txtbx.length; i++)
{
txtbx[i].disabled = true;
}
//locks all the checkboxes 
var chk = document.querySelectorAll('input[type=checkbox]')
for(var i = 0; i < chk.length; i++)
{
chk[i].disabled = true;
}

}

//add
function unlocktextboxesAdd(){
var txtbx = document.querySelectorAll('input[type=text]')
for(var i = 0; i < txtbx.length; i++)
{
txtbx[i].disabled = false;
}
//locks all the checkboxes 
var chk = document.querySelectorAll('input[type=checkbox]')
for(var i = 0; i < chk.length; i++)
{
chk[i].disabled = false;
}

}
//clear
function ClearF(){
var inputClear = document.querySelectorAll('input')

for( var i = 0; i < inputClear.length; i++){
inputClear[i].value = ""; 
}

var chk = document.querySelectorAll('input[type=checkbox]')
for(var i = 0; i < chk.length; i++)
{
chk[i].checked = false;
}

}
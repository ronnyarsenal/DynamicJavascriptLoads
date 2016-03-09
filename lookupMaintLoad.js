function FormLoadMaint(){
var x = document.getElementById("ChangingInformation");// body of info
var i = "input"
var l = "label"
var b = "button"
x.innerHTML = " ";//set blank

var LSLabel = document.createElement(l);
var t = document.createTextNode("Lookup MaintFunc"); //text
LSLabel.setAttribute("id", "MainLabelLookupStatus");
LSLabel.appendChild(t);
x.appendChild(LSLabel);

var SelectStatusLabel = document.createElement(l);
SelectStatusLabel.setAttribute("id", "SelectStatusLookupLabel");
t = document.createTextNode("Select MaintFunc:");
SelectStatusLabel.appendChild(t);
x.appendChild(SelectStatusLabel);

var SelectStatus = document.createElement("select");
SelectStatus.setAttribute("id", "SelectStatusLookupStatus");
x.appendChild(SelectStatus);

//buttons
var brkln = document.createElement("br");
x.appendChild(brkln);

var ViewS = document.createElement(b);
t = document.createTextNode("View Status:");
ViewS.appendChild(t);
ViewS.setAttribute("id", "View MF");
ViewS.onclick = locktextboxes;
x.appendChild(ViewS);

var EditS = document.createElement(b);
t = document.createTextNode("Edit MF:");
EditS.appendChild(t);
EditS.setAttribute("id", "EditStatus");
EditS.onclick = unlocktextboxes;
x.appendChild(EditS);

var AddS = document.createElement(b);
t = document.createTextNode("Add MF");
AddS.appendChild(t);
AddS.setAttribute("id", "AddStatus");
AddS.onclick = unlocktextboxesAdd;
x.appendChild(AddS);

var Clear = document.createElement(b);
t = document.createTextNode("Clear");
Clear.appendChild(t);
Clear.setAttribute("id", "ClearButtonStatus");
Clear.onclick = ClearF;
x.appendChild(Clear);

//checkboxes 
var DCheckbox = document.createElement(i)
DCheckbox.setAttribute("type", "checkbox");
DCheckbox.setAttribute("id", "DeactivateCboxStatus");
DCheckbox.disabled =  true;
x.appendChild(DCheckbox); 

var DeactivateLabel = document.createElement(l);
DeactivateLabel.setAttribute("id", "DeactivateLabelCert");
t = document.createTextNode("De-Activate:");
DeactivateLabel.appendChild(t);
x.appendChild(DeactivateLabel);

//labels & textboxes
var StatusID = document.createElement(l);
StatusID.setAttribute("id", "StatusID");
t = document.createTextNode("Maint ID:");
StatusID.appendChild(t);
x.appendChild(StatusID);

var StatusName = document.createElement(l);
StatusName.setAttribute("id", "StatusName33");
t = document.createTextNode("MaintFunc Description:");
StatusName.appendChild(t);
x.appendChild(StatusName);

var SIDTextbox = document.createElement(i);
SIDTextbox.setAttribute("id", "StatusIDTextbox");
SIDTextbox.disabled = true;
x.appendChild(SIDTextbox);

var SNTextbox = document.createElement(i);
SNTextbox.setAttribute("id", "StatusNumTextbox");
SNTextbox.setAttribute("type", "text");
SNTextbox.disabled = true;
x.appendChild(SNTextbox);


var SNTextbox = document.createElement(i);
SNTextbox.setAttribute("id", "StatusNumTextbox3");
SNTextbox.setAttribute("type", "text");
SNTextbox.disabled = true;
x.appendChild(SNTextbox);

var StatusName = document.createElement(l);
StatusName.setAttribute("id", "StatusName3");
t = document.createTextNode("MaintFunc:");
StatusName.appendChild(t);
x.appendChild(StatusName);
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
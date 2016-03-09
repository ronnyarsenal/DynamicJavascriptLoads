function FormLoadSupplierType(){
var x = document.getElementById("ChangingInformation");// body of info
var i = "input"
var l = "label"
var b = "button"
x.innerHTML = " ";//set blank

var LSTLabel = document.createElement(l);
var t = document.createTextNode("Select Supplier Type:"); //text
LSTLabel.setAttribute("id", "MainLabelSupplierType");
LSTLabel.appendChild(t);
x.appendChild(LSTLabel);

var SelectSTLabel = document.createElement(l);
SelectSTLabel.setAttribute("id", "SelectStatusLookupLabel");
t = document.createTextNode("Select Status:");
SelectSTLabel.appendChild(t);
x.appendChild(SelectSTLabel);

var SelectST = document.createElement("select");
SelectST.setAttribute("id", "SelectSupplierLookup");
x.appendChild(SelectST);

//buttons
var brkln = document.createElement("br");
x.appendChild(brkln);

var ViewST = document.createElement(b);
t = document.createTextNode("View Supplier Type:");
ViewST.appendChild(t);
ViewST.setAttribute("id", "ViewST");
ViewST.onclick = locktextboxes;
x.appendChild(ViewST);

var EditST = document.createElement(b);
t = document.createTextNode("Edit Supplier Type:");
EditST.appendChild(t);
EditST.setAttribute("id", "EditST");
EditST.onclick = unlocktextboxes;
x.appendChild(EditST);

var AddST = document.createElement(b);
t = document.createTextNode("Add Supplier Type");
AddST.appendChild(t);
AddST.setAttribute("id", "AddStatus");
AddST.onclick = unlocktextboxesAdd;
x.appendChild(AddST);

var Clear = document.createElement(b);
t = document.createTextNode("Clear");
Clear.appendChild(t);
Clear.setAttribute("id", "ClearButtonStatus");
Clear.onclick = ClearF;
x.appendChild(Clear);

//checkboxes 
var DCheckbox = document.createElement(i)
DCheckbox.setAttribute("type", "checkbox");
DCheckbox.setAttribute("id", "DeactivateCboxST");
DCheckbox.disabled =  true;
x.appendChild(DCheckbox); 

var DeactivateLabel = document.createElement(l);
DeactivateLabel.setAttribute("id", "DeactivateLabelST");
t = document.createTextNode("De-Activate:");
DeactivateLabel.appendChild(t);
x.appendChild(DeactivateLabel);

var ICheckbox = document.createElement(i)
ICheckbox.setAttribute("type", "checkbox");
ICheckbox.setAttribute("id", "InternalCbox");
ICheckbox.disabled =  true;
x.appendChild(ICheckbox); 

var InternalLabel = document.createElement(l);
InternalLabel.setAttribute("id", "InternalLabelST");
t = document.createTextNode("Internal:");
InternalLabel.appendChild(t);
x.appendChild(InternalLabel);

var SelectStatusLabel = document.createElement(l);
SelectStatusLabel.setAttribute("id", "SelectStatusLookupLabel1");
t = document.createTextNode("Supplier Type ID:");
SelectStatusLabel.appendChild(t);
x.appendChild(SelectStatusLabel);

var SelectStatusLabel = document.createElement(l);
SelectStatusLabel.setAttribute("id", "SelectStatusLookupLabel2");
t = document.createTextNode("Supplier Type:");
SelectStatusLabel.appendChild(t);
x.appendChild(SelectStatusLabel);

var SelectStatusLabel = document.createElement(l);
SelectStatusLabel.setAttribute("id", "SelectStatusLookupLabel3");
t = document.createTextNode("Audit Frequency:");
SelectStatusLabel.appendChild(t);
x.appendChild(SelectStatusLabel);

var SelectStatusLabel = document.createElement(l);
SelectStatusLabel.setAttribute("id", "SelectStatusLookupLabel4");
t = document.createTextNode("Survey Frequency:");
SelectStatusLabel.appendChild(t);
x.appendChild(SelectStatusLabel);

var SelectStatusLabel = document.createElement(l);
SelectStatusLabel.setAttribute("id", "SelectStatusLookupLabel5");
t = document.createTextNode("High Level Category:");
SelectStatusLabel.appendChild(t);
x.appendChild(SelectStatusLabel);

var SelectStatusLabel = document.createElement(l);
SelectStatusLabel.setAttribute("id", "SelectStatusLookupLabel6");
t = document.createTextNode("Comments:");
SelectStatusLabel.appendChild(t);
x.appendChild(SelectStatusLabel);

var SIDTextbox = document.createElement(i);
SIDTextbox.setAttribute("id", "SupplierTypeSTID");
SIDTextbox.disabled = true;
x.appendChild(SIDTextbox);

var SIDTextbox = document.createElement(i);
SIDTextbox.setAttribute("id", "SupplierTypeST");
SIDTextbox.setAttribute("type", "text");
SIDTextbox.disabled = true;
x.appendChild(SIDTextbox);

var SIDTextbox = document.createElement(i);
SIDTextbox.setAttribute("id", "SupplierTypeAF");
SIDTextbox.setAttribute("type", "text");
SIDTextbox.disabled = true;
x.appendChild(SIDTextbox);

var SIDTextbox = document.createElement(i);
SIDTextbox.setAttribute("id", "SupplierTypeSF");
SIDTextbox.setAttribute("type", "text");
SIDTextbox.disabled = true;
x.appendChild(SIDTextbox);

var SIDTextbox = document.createElement(i);
SIDTextbox.setAttribute("id", "SupplierTypeHLC");
SIDTextbox.setAttribute("type", "text");
SIDTextbox.disabled = true;
x.appendChild(SIDTextbox);

var SIDTextbox = document.createElement(i);
SIDTextbox.setAttribute("id", "SupplierTypeComments");
SIDTextbox.setAttribute("type", "text");
SIDTextbox.disabled = true;
x.appendChild(SIDTextbox);

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
var txtbx = document.querySelectorAll('input[type=text]')
for(var i = 0; i < txtbx.length; i++)
{
txtbx[i].disabled = true;
}
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
}
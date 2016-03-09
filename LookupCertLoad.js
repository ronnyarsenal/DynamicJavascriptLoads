function FormLoadCert(){
var x = document.getElementById("ChangingInformation");// body of info
var i = "input"
var l = "label"
var b = "button"
x.innerHTML = " ";//set blank

var LCLabel = document.createElement(l);
var t = document.createTextNode("Lookup Cert"); //text
LCLabel.setAttribute("id", "MainLabelLookupCert");
LCLabel.appendChild(t);
x.appendChild(LCLabel);

var SelectCertLabel = document.createElement(l);
SelectCertLabel.setAttribute("id", "SelectCertLookupLabel");
t = document.createTextNode("Select Cert:");
SelectCertLabel.appendChild(t);
x.appendChild(SelectCertLabel);

var SelectCert = document.createElement("select");
SelectCert.setAttribute("id", "SelectCertLookupCert");
x.appendChild(SelectCert);

//buttons
var brkln = document.createElement("br");
x.appendChild(brkln);

var ViewC = document.createElement(b);
t = document.createTextNode("View Certs:");
ViewC.appendChild(t);
ViewC.setAttribute("id", "ViewCert");
ViewC.onclick = locktextboxes;
x.appendChild(ViewC);

var EditC = document.createElement(b);
t = document.createTextNode("Edit Certs:");
EditC.appendChild(t);
EditC.setAttribute("id", "EditCert");
EditC.onclick = unlocktextboxes;
x.appendChild(EditC);

var AddC = document.createElement(b);
t = document.createTextNode("Add Certs");
AddC.appendChild(t);
AddC.setAttribute("id", "AddCert");
AddC.onclick = unlocktextboxesAdd;
x.appendChild(AddC);

var Clear = document.createElement(b);
t = document.createTextNode("Clear");
Clear.appendChild(t);
Clear.setAttribute("id", "ClearButtonCerts");
Clear.onclick = ClearF
x.appendChild(Clear);

//checkboxes 
var DCheckbox = document.createElement(i)
DCheckbox.setAttribute("type", "checkbox");
DCheckbox.setAttribute("id", "DeactivateCboxCert");
DCheckbox.disabled = true;
x.appendChild(DCheckbox); 

var DeactivateLabel = document.createElement(l);
DeactivateLabel.setAttribute("id", "DeactivateLabelCert");
t = document.createTextNode("De-Activate:");
DeactivateLabel.appendChild(t);
x.appendChild(DeactivateLabel);

//labels & textboxes
var CertID = document.createElement(l);
CertID.setAttribute("id", "CertID");
t = document.createTextNode("Cert ID:");
CertID.appendChild(t);
x.appendChild(CertID);

var CertName = document.createElement(l);
CertName.setAttribute("id", "CertName");
t = document.createTextNode("*Cert:");
CertName.appendChild(t);
x.appendChild(CertName);

var CertDescription = document.createElement(l);
CertDescription.setAttribute("id", "CertDescription");
t = document.createTextNode("Cert Desctiption:");
CertDescription.appendChild(t);
x.appendChild(CertDescription);

var CIDTextbox = document.createElement(i);
CIDTextbox.setAttribute("id", "CertIDTextbox");
CIDTextbox.setAttribute("type", "text");
CIDTextbox.disabled = true;
x.appendChild(CIDTextbox);

var CNTextbox = document.createElement(i);
CNTextbox.setAttribute("id", "CertNumTextbox");
CNTextbox.setAttribute("type", "text");
CNTextbox.disabled = true;
x.appendChild(CNTextbox);

var CDTextbox = document.createElement(i);
CDTextbox.setAttribute("id", "CertDescriptionTextbox");
CDTextbox.setAttribute("type", "text");
CDTextbox.disabled = true;
x.appendChild(CDTextbox);
}

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
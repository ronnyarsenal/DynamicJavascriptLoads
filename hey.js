function addbuttons(){
var x = document.getElementById("ChangingInformation");// body of info
var i = "input"
var l = "label"
var b = "button"
x.innerHTML = " ";//set blank

//break element
var breakln = document.createElement("br");

//labels
var AELabel = document.createElement(l);
var t = document.createTextNode("Add/Edit Person"); //text
AELabel.setAttribute("id", "MainLabelSecurity");
AELabel.appendChild(t);
x.appendChild(AELabel);

var SelectNameLabel = document.createElement(l);
SelectNameLabel.setAttribute("id", "SelectLabelSecurity");
t = document.createTextNode("Select Name:");
SelectNameLabel.appendChild(t);
x.appendChild(SelectNameLabel);


var ClockIDLabel = document.createElement(l);
ClockIDLabel.setAttribute("id", "ClockIDLabelSecurity");
t = document.createTextNode("Clock ID:");
ClockIDLabel.appendChild(t);
x.appendChild(ClockIDLabel);

var CIDTextbox = document.createElement(i);
CIDTextbox.setAttribute("id", "CIDTSecurity");
CIDTextbox.disabled = true;
var y = CIDTextbox;
x.appendChild(y);


var FNameLabel = document.createElement(l);
FNameLabel.setAttribute("id", "FNLabelSecurity");
t = document.createTextNode("*First Name:");
FNameLabel.appendChild(t);
x.appendChild(FNameLabel);

var FNTextbox = document.createElement(i);
FNTextbox.setAttribute("id", "FNTSecurity");
FNTextbox.disabled = true;
x.appendChild(FNTextbox);

var MILabel = document.createElement(l);
MILabel.setAttribute("id", "MILabelSecurity");
t = document.createTextNode("Middle Initial:");
MILabel.appendChild(t);
x.appendChild(MILabel);

var MITextbox = document.createElement(i);
MITextbox.setAttribute("id", "MITSecurity");
MITextbox.disabled = true;
x.appendChild(MITextbox);

var ViewOnly = document.createElement(l);
ViewOnly.setAttribute("id", "ViewOnlyLabel");
t = document.createTextNode("View Only:");
ViewOnly.appendChild(t);
x.appendChild(ViewOnly);

var QSLEdit = document.createElement(l);
QSLEdit.setAttribute("id", "QSLEditLabel");
t = document.createTextNode("QSL Edit:");
QSLEdit.appendChild(t);
x.appendChild(QSLEdit);

var MetricsEdit = document.createElement(l);
MetricsEdit.setAttribute("id", "MetricsEditLabel");
t = document.createTextNode("Metrics Edit:");
MetricsEdit.appendChild(t);
x.appendChild(MetricsEdit);

var AuditEdit = document.createElement(l);
AuditEdit.setAttribute("id", "AuditEditLabel");
t = document.createTextNode("Audit Edit:");
AuditEdit.appendChild(t);
x.appendChild(AuditEdit);

var RiskEdit = document.createElement(l);
RiskEdit.setAttribute("id", "RiskEditLabel");
t = document.createTextNode("Risk Edit:");
RiskEdit.appendChild(t);
x.appendChild(RiskEdit);

var SystemCreator = document.createElement(l);
SystemCreator.setAttribute("id", "SystemCreatorLabel");
t = document.createTextNode("System Creator:");
SystemCreator.appendChild(t);
x.appendChild(SystemCreator);

var Administrator = document.createElement(l);
Administrator.setAttribute("id", "AdministratorLabel");
t = document.createTextNode("Administrator:");
Administrator.appendChild(t);
x.appendChild(Administrator);


var FullNameLabel = document.createElement(l);
FullNameLabel.setAttribute("id", "FullNameSecurity");
t = document.createTextNode("Full Name:");
FullNameLabel.appendChild(t);
x.appendChild(FullNameLabel);

var LNameLabel = document.createElement(l);
LNameLabel.setAttribute("id", "LNLabelSecurity");
t = document.createTextNode("*Last Name:");
LNameLabel.appendChild(t);
x.appendChild(LNameLabel);

var LNTextbox = document.createElement(i);
LNTextbox.setAttribute("id", "LNTSecurity");
LNTextbox.disabled = true;
x.appendChild(LNTextbox);


var FullNameLabel = document.createElement(l);
FullNameLabel.setAttribute("id", "FullNameSecurity");
t = document.createTextNode("Full Name:");
FullNameLabel.appendChild(t);
x.appendChild(FullNameLabel);

var DeactivateLabel = document.createElement(l);
DeactivateLabel.setAttribute("id", "DeactivateLabel");
t = document.createTextNode("De-Activate:");
DeactivateLabel.appendChild(t);
x.appendChild(DeactivateLabel);

var FullNTextbox = document.createElement(i);
FullNTextbox.setAttribute("id", "FullLNTSecurity");
FullNTextbox.disabled = true;
x.appendChild(FullNTextbox); 


//checkboxes 
var DCheckbox = document.createElement(i)
DCheckbox.setAttribute("type", "checkbox");
DCheckbox.setAttribute("id", "DeactivateCbox");
x.appendChild(DCheckbox); 

var VOCheckbox = document.createElement(i)
VOCheckbox.setAttribute("type", "checkbox");
VOCheckbox.setAttribute("id", "VOCbox");
x.appendChild(VOCheckbox); 

var QSLCheckbox = document.createElement(i)
QSLCheckbox.setAttribute("type", "checkbox");
QSLCheckbox.setAttribute("id", "QSLCbox");
x.appendChild(QSLCheckbox); 

var MCheckbox = document.createElement(i)
MCheckbox.setAttribute("type", "checkbox");
MCheckbox.setAttribute("id", "MCbox");
x.appendChild(MCheckbox); 

var ACheckbox = document.createElement(i)
ACheckbox.setAttribute("type", "checkbox");
ACheckbox.setAttribute("id", "ACbox");
x.appendChild(ACheckbox); 

var RCheckbox = document.createElement(i)
RCheckbox.setAttribute("type", "checkbox");
RCheckbox.setAttribute("id", "RCbox");
x.appendChild(RCheckbox); 

var SCheckbox = document.createElement(i)
SCheckbox.setAttribute("type", "checkbox");
SCheckbox.setAttribute("id", "SCbox");
x.appendChild(SCheckbox); 

var AdminCheckbox = document.createElement(i)
AdminCheckbox.setAttribute("type", "Checkbox");
AdminCheckbox.setAttribute("id", "AdminCbox");
x.appendChild(AdminCheckbox); 


//drop downs 
var SelectName = document.createElement("select");
SelectName.setAttribute("id", "SelectPersonSecurity");
x.appendChild(SelectName);

//buttons
x.appendChild(breakln);
var View = document.createElement(b);
t = document.createTextNode("View:");
View.appendChild(t);
View.setAttribute("id", "ViewSecurity");
View.onclick = locktextboxes;
x.appendChild(View);

var Edit = document.createElement(b);
t = document.createTextNode("Edit:");
Edit.appendChild(t);
Edit.setAttribute("id", "EditSecurity");
Edit.onclick = unlocktextboxes;
x.appendChild(Edit);

var Add = document.createElement(b);
t = document.createTextNode("Add");
Add.appendChild(t);
Add.setAttribute("id", "AddSecurity");
x.appendChild(Add);

var Clear = document.createElement(b);
t = document.createTextNode("Clear");
Clear.appendChild(t);
Clear.setAttribute("id", "ClearButtonSecurity");
x.appendChild(Clear);
}

function clearNodes(){
var x = document.getElementById("ChangingInformation");
x.innerHTML = " ";
}

function unlocktextboxes(){
var FirstName = document.getElementById("LNTSecurity");
FirstName.disabled = false;
var LastName = document.getElementById("FNTSecurity");
LastName.disabled = false;
var FullName= document.getElementById("FullLNTSecurity");
FullName.disabled = false;
}

function locktextboxes(){
var FirstName = document.getElementById("LNTSecurity");
FirstName.disabled = true;
var LastName = document.getElementById("FNTSecurity");
LastName.disabled = true;
var FullName= document.getElementById("FullLNTSecurity");
FullName.disabled = true;
}
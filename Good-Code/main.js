let today = new Date();
addEvents();
var del;
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

var selectYear = document.getElementById('selectYear')
var selectMonth = document.getElementById('selectMonth')

var daysInMonth;

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

var colors = ['floralwhite','red','gray','Pink','blue','Yellow','orange','gold','purple','lightorange','brown','#3f3b3b'];

var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

var textColor = [' #3f3b3b','white','white','white','white',' #3f3b3b','white','white','white','white','white','white']

var yearsArray = [];

let Year2 = 2030;
for(var Year1 = 2000;Year1 < Year2;Year1++)
{
yearsArray.push(Year1);
}

//let monthAndYear = document.getElementById("monthAndYear");
//
randomAccess();

showCalendar(currentMonth, currentYear);

createButtons();
//

var modal = document.createElement('div');

modal.classList.add('modal');



var modalContent = document.createElement('div');

modalContent.classList.add('modal-content');


var modalHeader = document.createElement('div');

modalHeader.classList.add('modal-header');

modalHeader.innerHTML = '<h2>Add Event</h2>';


var modalBody = document.createElement('div');

modalBody.classList.add('modal-body');

//modalBody.appendChild(input);

var input = document.createElement('div');

input.id = "SuperDiv"

function displayid(id){

input.innerHTML = "";

var text = document.createElement('input')

text.classList.add("form-control");

text.classList.add("col-sm");

text.classList.add("btn-outline-danger");

text.type = "text";


input.appendChild(text)

var modalButton = document.createElement('button')

modalButton.classList.add("btn");

modalButton.classList.add("btn-block");

modalButton.classList.add("col-sm-12");

input.style.alignItems = "center";

modalButton.style.marginTop = "50px"

modalButton.classList.add("btn-success");

modalButton.innerHTML = "Add";

modalButton.addEventListener('click', function(){

localStorage.setItem((id+"/"+months[currentMonth]+"/"+currentYear),text.value)

document.location.reload()
} )

input.appendChild(modalButton)

}
var mainEvent = document.getElementById('events')

function addEvents(){

for (var i = 0, n = localStorage.length; i < n; i++) {
  var k = localStorage.key(i);
  
  var event = document.createElement('div')
  event.classList.add('row')
  event.classList.add('col-12')
 
  var dates = document.createElement('div');
  
  dates.classList.add('col-sm-5');
  dates.classList.add('btn-info');
  
   dates.innerHTML += k;

   var del = document.createElement('button');
   del.innerHTML = "&times";
   del.id = k;
   del.classList.add('delBtn');
   del.classList.add('close');
   var info = document.createElement('div');

   info.classList.add('col-sm-7');
   dates.classList.add('btn-danger');
   
  
   info.innerHTML += localStorage[k];

  console.log(k + ": " + localStorage[k]);
   info.appendChild(del);
   events.appendChild(dates)
   events.appendChild(info)
}}

var label1 = document.createElement('label')

var description = document.createElement('input')

description.classList.add('form-control')

description.type = "text";

description.id = "description"

description.classList.add('col-md')

description.classList.add('form-control')

modalBody.appendChild(input)


var modalFooter = document.createElement('div');

modalFooter.classList.add('modal-footer');

var span = document.createElement('span');

var data = document.createElement('p')

span.classList.add('close');

span.innerHTML = "&times";
;
document.body.appendChild(modal);

modal.appendChild(modalContent);

modalHeader.appendChild(span);

modalContent.appendChild(modalHeader);

modalContent.appendChild(modalBody);

modalContent.appendChild(modalFooter);

modalFooter.appendChild(data);

let today = new Date();
addEvents();
var del;
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

var selectYear = document.getElementById('selectYear')
var selectMonth = document.getElementById('selectMonth')

var daysInMonth;

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

var colors = ['floralwhite', 'red', 'gray', 'Pink', 'blue', 'Yellow', 'orange', 'gold', 'purple', 'lightorange', 'brown', '#3f3b3b'];

var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

var textColor = [' #3f3b3b', 'white', 'white', 'white', 'white', ' #3f3b3b', 'white', 'white', 'white', 'white', 'white', 'white']

var yearsArray = [];

let Year2 = 2030;
for (var Year1 = 2000; Year1 < Year2; Year1++) {
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
var mainEvent = document.getElementById('events')

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

window.onresize = function () {
    document.location.reload();
  }
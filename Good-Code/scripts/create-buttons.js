
function createButtons(){

    var previous = document.getElementById('previous');
   
     previous.addEventListener('click',function previous() {
     currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
     
     currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
     
     showCalendar(currentMonth, currentYear);
     }) 
     
   var  next = document.getElementById('next');
   
   next.addEventListener('click',function next() {
     currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
     
     currentMonth = (currentMonth + 1) % 12;
     
     showCalendar(currentMonth, currentYear);
   }
   )
   
   var container = document.getElementById('container')
   
   }
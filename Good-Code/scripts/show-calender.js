function showCalendar(month, year) {
    let firstDay = (new Date(year, month)).getDay();
   
     let daysInMonth = 32 - new Date(year, month, 32).getDate();
    
     let tbl = document.getElementById('table');
   
   
     tbl.innerHTML = '';
   
     console.log('hi')
   
     var monthAndYear = document.getElementById('header');
     
     monthAndYear.innerHTML = months[month] + " " + year;
     
     monthAndYear.style.textAlign = 'center';
     
     monthAndYear.style.backgroundColor = colors[month];
   
     monthAndYear.style.textcolor = textColor[month];
    
     monthAndYear.style.color = textColor[month]
    
     selectYear.value = year;
   
     selectMonth.value = month;
   
     var dayhead = document.createElement('tr')
   
      dayhead.classList.add('bg-primary');
   
      dayhead.classList.add('text-white');
   
    for (var i = 0; i < days.length; i++) {
   
       var day = days[i];
   
       const cell = document.createElement('td');
   
       cell.classList.add('colors')
   
       var daymark = document.createTextNode(day);
   
       cell.appendChild(daymark);
   
       dayhead.appendChild(cell);
   
    }
     tbl.appendChild(dayhead);
     
     // creating all cells
     let date = 1;
   ;
   for (let i = 0; i < 6; i++) 
   {
         // creates a table row
         let row = document.createElement("tr");
   
      for(let btn = 0;btn < 1;btn++)
      {
     var allbtns = document.getElementsByClassName('modal-btn');
     
     Array.from(allbtns).forEach(function(button){
     
     button.addEventListener('click',function(){
     
     logbtnDate(button)
   })
   });
         for(let btn = 0;btn < 1;btn++)
      {
     var delBtns = document.getElementsByClassName('delBtn');
     
     Array.from(delBtns).forEach(function(button){
     
     button.addEventListener('click',function(){
     deleteItem(button);
   })
   })
   };
         for (let j = 0; j < 7; j++) 
         {
             if (i === 0 && j < firstDay)
              {
         
                 let cell = document.createElement("td");
         
                 let cellText = document.createTextNode("");
             
                 cell.appendChild(cellText);
             
                 row.appendChild(cell);
             }
             else if (date > daysInMonth) {
             
                 break;
             }
   
             else {
                 let cell = document.createElement("td");
             
                 let btn = document.createElement('button');
             
                 btn.classList.add('modal-btn')
             
                 let cellText = document.createTextNode(date);
             
                 if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
             
                     cell.classList.add("bg-info");
             
                 } // color today's date
             
                 btn.classList.add('btn');
      
                 cell.appendChild(btn);
             
                 btn.id = date;
   
   
   //              btn.addEventListener('active',modal(btn.id,month,year)                )
                //btn.onclick = modal(btn.id,month,year)
                 btn.innerHTML = date;
             
                 row.appendChild(cell);
             
                 date++;
             }
   
             tbl.appendChild(row); // appending each row into calendar body.
     }
   }
   }
   }
   
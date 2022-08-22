
function randomAccess(){
    for(var i = 0;i < yearsArray.length;i++){
      var option = document.createElement('option');
      
      option.innerHTML = yearsArray[i];
      
      selectYear.selected = currentYear;
      
      selectMonth.selected = currentMonth;
      
      option.value = yearsArray[i];
      
      selectYear.appendChild(option);
  //      selectYear.innerHTML += "<option  onclick = jump()>" + yearsArray[i] + "</option>"
     }
      for(var i = 0;i < months.length;i++)
      {
      
      var option = document.createElement('option');
      
      option.innerHTML = months[i]
      
      option.value = [i]
      
      selectMonth.appendChild(option);
  //      selectYear.innerHTML += "<option  onclick = jump()>" + yearsArray[i] + "</option>"
     }
  }
  
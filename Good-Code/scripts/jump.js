
function jump() {
    currentYear = parseInt(selectYear.value);
  
    currentMonth = parseInt(selectMonth.value);
  
    console.log(selectYear.value+ "/" + "/" + selectMonth.value)
  
    showCalendar(currentMonth, currentYear);
  }
  
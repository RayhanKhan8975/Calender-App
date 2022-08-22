
var logbtnDate = function (btn) {

    var hour = new Date().getHours();
    
    var minutes = new Date().getMinutes();
    
    var seconds = new Date().getSeconds();
    
    var daylight = hour > 12? 'PM':'AM';
    
    hour = hour === 0? 12:hour;
    
    hour = hour > 12? hour - 12 : hour;
    
    minutes = minutes.toString().length < 2? "0" + minutes:minutes;
    
    
    modal.style.display = "block";
    
    data.innerHTML = "";
    
    data.innerHTML +=  btn.id +  '-'  + months[selectMonth.value]  + "-" + selectYear.value;
    
    data.innerHTML += "<br>" + "current time:" + hour + ":" + minutes + ":" + seconds + ":"+ daylight + ";"
    
    
    var loc_id = btn.id;
    displayid(btn.id)
    
    span.onclick = function(){
    
    modal.style.display = "none";
    
    }
    }
    
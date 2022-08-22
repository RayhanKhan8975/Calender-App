
var deleteItem = function(btn){
    localStorage.removeItem(btn.id)
    document.location.reload();
    }
function display(){
    alert(`Hello ${document.getElementById('name').value}`)
}

function updateTime() {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    setTimeout(updateTime, 1000)
    document.getElementById("time").innerHTML = dateTime;
}



updateTime();


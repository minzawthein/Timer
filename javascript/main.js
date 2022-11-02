(function() {

    var hours = document.getElementsByClassName('hour')[0],
        minutes = document.getElementsByClassName('minute')[0],
        seconds = document.getElementsByClassName('second')[0],
        display = document.getElementsByClassName('display')[0],
        startTime = document.getElementById('start'),
        pauseTime = document.getElementById('pause'),
        resetTime = document.getElementById('reset'),
        interval,
        hour = 00,
        minute = 00,
        second = 00,
        millisecond = 0;
    
    startTime.addEventListener('click', function() {
        clearInterval(interval);
        interval = setInterval(function(){
                second ++;
                if(second< 9) {
                    return second = "0" + second;
                }
                if(second> 9) {
                    return second;
                }    
                if(second === 60) {
                    second = 0;
                    minute ++;
                }
    
                if(minute === 60) {
                    minute = 0;
                    hour ++;
                }
            }
            console.log(second);
        },1000);
    },false);
}());

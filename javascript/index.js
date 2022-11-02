(function() {
    var hours = document.getElementsByClassName('hour')[0],
        minutes = document.getElementsByClassName('minute')[0],
        seconds = document.getElementsByClassName('second')[0],
        milliseconds = document.getElementsByClassName('millisecond')[0],
        display = document.getElementsByClassName('display')[0],
        startTime = document.getElementById('start'),
        pauseTime = document.getElementById('pause'),
        resetTime = document.getElementById('reset'),
        interval,
        hour = 00,
        minute = 00,
        second = 00,
        millisecond = 00;

    startTime.addEventListener('click', function() {
        clearInterval(interval);
        interval = setInterval(function(){
            millisecond = new Date().getMilliseconds();
            if(millisecond < 1000) {
                millisecond ++;
                if(millisecond > 996) {
                    millisecond = 0 ;
                    second ++;
                    if(second <= 9) {
                       return second = "0" + second;
                    }
                    else if(second > 9) {
                        return second;
                    }
                }
                if(second === 60) {
                    second = 0;
                    minute ++;
                }

                if(minute === 60) {
                    minute = 0;
                    hour ++;
                }

                if(hour === 24) {
                    hour = 0;
                }
            }
            hours.innerHTML = "0" + hour;
            minutes.innerHTML = ": 0" + minute;
            seconds.innerHTML = ":" + second;
            milliseconds.innerHTML = "." + new Date().getMilliseconds();
        },1000/800);
    },false);

    pauseTime.addEventListener('click', function() {
        clearInterval(interval);
    })

    resetTime.addEventListener('click', function() {
        clearInterval(interval);
        millisecond=00;
          second= 00;
          minute= 00;
          hour= 00;
          hours.innerHTML = "0" + hour;
            minutes.innerHTML = ": 0" + minute;
            seconds.innerHTML = ": 0" + second;
            milliseconds.innerHTML = "." +  millisecond;
    },false);
}());
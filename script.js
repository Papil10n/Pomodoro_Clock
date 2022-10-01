const startBtn = document.querySelector(".startBtn");
const pauseBtn = document.querySelector(".pauseBtn");
const refreshBtn = document.querySelector(".refreshBtn");
const refreshImg = document.querySelector(".reload");
const pomodoroMode = document.querySelector(".pomodoroBtn");
const breakMode = document.querySelector(".breakBtn");

let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
const sound = document.querySelector(".audio")



startBtn.addEventListener("click", (event) => {
   startBtn.classList.add("hide");
   pauseBtn.classList.remove("hide");

   pauseBtn.addEventListener("click", (event) => {
      clearInterval(workTime)
      startBtn.classList.remove("hide");
      pauseBtn.classList.add("hide");
   })

   refreshBtn.addEventListener("click", (event) => {
      let load = setTimeout(function() {
         clearInterval(workTime);
         startBtn.classList.remove("hide");
         pauseBtn.classList.add("hide");
         minutes.innerHTML = "25";
         seconds.innerHTML = "00";
         pomodoroMode.classList.add("active");
         breakMode.classList.remove("active");
         document.title = "Pomodoro Clock";
      }, 300)

   })

   let min = Number(minutes.innerHTML);
   let sec = Number(seconds.innerHTML);
   let workTime = setInterval(renderWorkTime, 1000);

   function renderWorkTime() {
      if (min != 0 || sec != 0) {
         if (sec > 0) {
            sec--;
         } else if (sec == 0) {
            sec--;
            sec = 59;
            min--;
         }
   
         min > 9 ? minutes.innerHTML = min : minutes.innerHTML = "0" + min;
         sec > 9 ? seconds.innerHTML = sec : seconds.innerHTML = "0" + sec;
         document.title = min + ":" + sec;

      } else {

         clearInterval(workTime);
         pomodoroMode.classList.toggle("active");
         breakMode.classList.toggle("active");
         sound.play();

         if (pomodoroMode.classList.contains("active")) {
            minutes.innerHTML = "25";
            seconds.innerHTML = "00";
         } else {
            minutes.innerHTML = "05";
            seconds.innerHTML = "00";
         }
         
         startBtn.classList.remove("hide");
         pauseBtn.classList.add("hide");
      }
   }


})

refreshBtn.addEventListener(("click"), (event) => {
   refreshImg.classList.add("rotate");
   setTimeout(function(){
      refreshImg.classList.remove("rotate");
      
   }, 1000)
})




var counter = 0;

function setup() {
  timer1 = createP('timer1');
  timer2 = createP('timer2');
  timer3 = createP('timer3');

  setInterval(count1, 100)

}

  function count1(){
    timer1.html(counter);
    counter ++
  }




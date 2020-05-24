let timer = document.querySelector("#counter");

function countUpEvery1s(){
  let count = 0;
  let addIn1s = setInterval(counter, 1000);

  function counter(){
    return ++count;
  }

  timer.innerText = addIn1s;
}

window.addEventListener('load', countUpEvery1s);

let timer = document.querySelector("#counter");
let plusBtn = document.querySelector("#plus");
let minusBtn = document.querySelector("#minus");
let heartBtn = document.querySelector("#heart");
let pauseBtn = document.querySelector("#pause");
let likesList = document.querySelector(".likes");
let commentsContainer = document.querySelector("#list");
let addCommentBtn = document.querySelector("#submit");
let commentInput = document.querySelector("#comment-input");
let count = 0;
let intervalID;
let paused = false;
let likeCount = 0;
let previousSecond = undefined;
let arrOfLikes = []


window.addEventListener('load', countUpEvery1s);
plusBtn.addEventListener('click', increaseCounterByOne);
minusBtn.addEventListener('click', decreaseCounterByOne);
pauseBtn.addEventListener('click', pauseTimer);
addCommentBtn.addEventListener('click', addComment);


function addComment(event) {
  event.preventDefault();
  let commentText = document.createElement('p');
  commentText.innerText = commentInput.value;
  commentsContainer.appendChild(commentText);
}

function countUpEvery1s() {

  intervalID = setInterval(counter, 1000);
}

function counter() {
  count++;
  timer.textContent = count;
}

function increaseCounterByOne() {
  count++;
  return
}

function decreaseCounterByOne() {
  count--;
  return
}

function pauseTimer() {
  if (paused == false) {
    clearInterval(intervalID);
    paused = true;
    pauseBtn.textContent = 'resume'
    plusBtn.disabled = true;
    minusBtn.disabled = true;
    heartBtn.disabled = true;
    return;
  } else {
    intervalID = setInterval(counter, 1000);
    paused = false;
    pauseBtn.textContent = 'pause'
    plusBtn.disabled = false;
    minusBtn.disabled = false;
    heartBtn.disabled = false;
    return;
  }
}

heartBtn.addEventListener('click', function () {

  if (previousSecond != count) {
    previousSecond = count;
    likeCount = 1;
  } else if (previousSecond == count) {
    likeCount += 1;
    arrOfLikes.pop();
  }

  let objOfLike = {
    count: count,
    NumberOfLikes: likeCount
  }

  arrOfLikes.push(objOfLike);
  addAllLikes();
});

function addAllLikes() {

  let previousLikes = document.querySelectorAll(".likes li");
  for (let i = 0; i < previousLikes.length; i++) {
    previousLikes[i].remove();
  }

  for (let i = 0; i < arrOfLikes.length; i++) {

    let newLike = document.createElement('li');
    if (arrOfLikes[i].NumberOfLikes == 1) {
      newLike.textContent = `${arrOfLikes[i].count} has been liked ${arrOfLikes[i].NumberOfLikes} time`;
    } else {
      newLike.textContent = `${arrOfLikes[i].count} has been liked ${arrOfLikes[i].NumberOfLikes} times`;
    }

    likesList.appendChild(newLike);
  }
}

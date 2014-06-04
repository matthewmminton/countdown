var countdown = prompt('How many seconds in the countdown?');
countdown = parseInt(countdown);

// setTimeout(function(){console.log('You are taking off to the moon!');}, countdown);

function countItDown(){
  if(countdown === 0){
    clearInterval(countingDown);
    console.log('You are taking off to the moon!');
  } else {
    console.log(countdown--);
  }
}

var countingDown = setInterval(countItDown, 1000);

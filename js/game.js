var countdown = prompt('How many seconds in the countdown?');
countdown = parseInt(countdown);

setTimeout(function(){console.log('You are taking off to the moon!');}, countdown);


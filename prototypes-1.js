//extend Stopwatch prototypical with start, stop and reset functions
// this is also bad practice, and an example of attempting premature optimization
// also introduces security risk, you can just set duration from anywhere


function Stopwatch() {
  let running, startTime, stopTime, duration = 0;

  Object.defineProperty(this, 'duration', {
    get: function() { return duration; },
    set: function(value) { return duration = value; }
  });
  Object.defineProperty(this, 'startTime', { 
    get: function() { return startTime; },
    set: function(value) { return startTime = value; }
  });
  Object.defineProperty(this, 'stopTime', {
    get: function() { return stopTime; },
    set: function(value) { return stopTime = value; }
  });
  Object.defineProperty(this, 'running', {
    get: function() { return running; },
    set: function(value) { return running = value; }
  });

}

Stopwatch.prototype.start = function() {
  if(this.running) { 
    throw new Error('Already started');
  }
  this.running = true;
  this.startTime = new Date();
}
Stopwatch.prototype.stop = function() {debugger;
  if(!this.running) {
    throw new Error('Already stopped');
  }
  this.running = false;
  this.stopTime = new Date();
  this.duration += (this.stopTime.getTime() - this.startTime.getTime()) / 1000;
}
Stopwatch.prototype.reset = function() {
  this.duration = 0;
  this.running = false;

} 
//implement a Stopwatch object
//start() starts the timer, calling it while running throws error
//stop() stops the timer, calling it while stopped throws error
//reset() stops and resets the timer


function Stopwatch() {
  this.isStarted = false;
  this.isStopped = false;
  this.duration = 0;
  this.start = () => {
    if(this.isStarted) {
      throw new Error('Already started');
    }
    this.isStarted = true;
    this.isStopped = false;
    this.startTime = new Date();

  },
  this.stop = () => {
    if(this.isStopped) {
      throw new Error('Already stopped');
    }

    this.isStopped = true;
    this.isStarted = false;
    this.stopTime = new Date();
    this.duration += (this.stopTime - this.startTime) / 1000;
  },

  this.reset = () => {
    this.duration = 0;
    this.isStarted = false;
    this.isStopped = false;
  }
}
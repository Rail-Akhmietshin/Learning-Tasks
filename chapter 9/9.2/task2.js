class Clock {
    constructor( template ) {
       this.template = template;
    }
  
    render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
      
      let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
    
    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }

    stop(delay) {
      setTimeout(() => clearInterval(this.timer), delay * 1000);
    }
  
}


class ExtendedClock extends Clock {
    constructor(template) {
        super(template);
        let obj = {};
        obj['template'] = template;
        obj['precision'] = 1000;
        this.precision = obj['precision'];
    }
    
    start() {
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
    };
}

let clock = new ExtendedClock("h:m:s");
clock.start();
clock.stop(10);

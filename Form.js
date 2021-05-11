class Form {

    constructor() {
      this.button1 = createButton('Science');
      this.button2 = createButton('Social');
      this.button3 = createButton('Math');
      this.button = createButton('Start Quiz');
      this.choose = createElement('h2');
      this.title = createElement('h2');
    }
    hide(){
      this.choose.hide();
      this.button.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("Welcome to BrainFall");
      this.title.position(displayWidth/2 - 50, 25);

      this.choose.html("Choose your subject:")
        this.choose.position(displayWidth/2 - 70, 75);
  
      this.button1.position(displayWidth/2 - 50, 150);
      this.button1.style('width','100px');
      this.button1.style('height','40px');

      this.button2.position(displayWidth/2 - 50, 200);
      this.button2.style('width','100px');
      this.button2.style('height','40px');

      this.button3.position(displayWidth/2 - 50, 250);
      this.button3.style('width','100px');
      this.button3.style('height','40px');

      this.button.position(displayWidth/2 - 50, 300);
      this.button.style('width','100px');
      this.button.style('height','40px');
  
    }
  }
  
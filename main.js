let event = [];
let eventNumber = -1;

//Constructing a new instance
const TypeWritter = function (txtElement, myTxt) {
  this.txtElement = txtElement;
  this.text = myTxt;
  this.isDeleting = false;
  this.typing = false;
  this.displayContent = "";
  this.type();
};

//Typing function
TypeWritter.prototype.type = function () {
  if (!this.typing) {
    if (!this.isDeleting) {
      this.displayContent = this.text.substring(
        0,
        this.displayContent.length + 1
      );
    } else {
      this.displayContent = this.text.substring(
        0,
        this.displayContent.length - 1
      );
    }

    document.querySelector("#display-text").innerHTML = this.displayContent;
    var timing = 500;

    if (this.isDeleting) {
      timing /= 2;
    } else {
      timing = 500;
    }

    if (!this.isDeleting && this.text.length == this.displayContent.length) {
      this.isDeleting = true;
      timing = 3000;
    } else if (this.isDeleting && 0 == this.displayContent.length) {
      this.isDeleting = false;
      timing = 2000;
    }

    setTimeout(() => this.type(), timing);
  }
};

//Display text event
document.getElementById("form").addEventListener("submit", init);

//Init function
function init(e) {
  document.getElementById("display-text").innerHTML = "";
  e.preventDefault();
  const txtElement = document.querySelector("#text");
  const word = txtElement.value;
  const wait = 3000;
  //Init typewriter
  event.push(new TypeWritter(txtElement, word, wait));
  eventNumber++;
  if (event[eventNumber] && event[eventNumber - 1]) {
    event[eventNumber - 1].typing = true;
  }
  document.getElementById("form").reset();
}

function outputContent(content) {
  document.querySelector("#display-text").innerHTML = content;
}

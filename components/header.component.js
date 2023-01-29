import { Component } from "../core/component.js";

export class HeaderComponent extends Component {
  constructor(id) {
    super(id);
  }

  init() {
    if (localStorage.getItem("visited")) {
      this.hide();
    }

    const button = this.$el.querySelector(".js-header-start");
    button.addEventListener("click", buttonClick.bind(this));
  }
}

function buttonClick() {
  localStorage.setItem("visited", JSON.stringify(true));
  this.hide();
}

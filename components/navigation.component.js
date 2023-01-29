import { Component } from "../core/component.js";
export class NavigationComponent extends Component {
  constructor(id) {
    super(id);
    this.tabs = [];
  }

  init() {
    this.$el.addEventListener("click", tabClick.bind(this));
  }

  registerTabs(tabs) {
    this.tabs = tabs;
  }
}

function tabClick(event) {
  event.preventDefault();

  if (event.target.classList.contains("tab")) {
    const arr2 = Array.from(this.$el.querySelectorAll(".tab")).forEach((tab) =>
      tab.classList.remove("active")
    );
    event.target.classList.add("active");
  }
  this.tabs.forEach((tab) => tab.component.hide());
  const activeTab = this.tabs.find(
    (tab) => tab.name === event.target.dataset.name
  );

  activeTab.component.show();
}

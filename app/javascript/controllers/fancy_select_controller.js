import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="fancy-select"
export default class extends Controller {
  static targets = ["list", "item", "selected", "input"];

  connect() {}

  toggle() {
    if (this.listTarget.classList.contains("hidden")) {
      this.open();
    } else {
      this.close();
    }
  }

  open() {
    this.listTarget.classList.remove("hidden");
  }

  close() {
    this.listTarget.classList.add("hidden");
  }

  choose(e) {
    const selectItem = e.currentTarget;
    const id = selectItem.dataset.id;
    console.log({ selectItem, id });

    // Copy the label HTML and place it into the outer form element]
    this.selectedTarget.innerHTML =
      selectItem.querySelector(`[data-js="label"]`).outerHTML;
    // Set the hidden inputs value to the ID
    this.inputTarget.value = id;
    // Remove checkmarks from all other elements
    this.itemTargets.forEach((itemTarget) => {
      itemTarget
        .querySelector(`[data-js="title"]`)
        .classList.remove("font-semibold");
      itemTarget.querySelector(`[data-js="check"]`).classList.add("hidden");
    });
    // Add checkmark to selected item.
    selectItem
      .querySelector(`[data-js="title"]`)
      .classList.add("font-semibold");
    selectItem.querySelector(`[data-js="check"]`).classList.remove("hidden");

    this.close();
  }
}

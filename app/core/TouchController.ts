import { InputController } from "./input.controller";

export class TouchController {
  constructor(private readonly inputController: InputController) {
    this.setupTouchButtons();
  }

  private setupTouchButtons(): void {
    const buttons = document.querySelectorAll<HTMLButtonElement>("#touch-controls button");

    buttons.forEach(button => {
      const key = button.dataset.key!;
      
      button.addEventListener("touchstart", (e) => {
        e.preventDefault();
        this.inputController.setKey(key, true);
      });

      button.addEventListener("touchend", () => {
        this.inputController.setKey(key, false);
      });

      button.addEventListener("mousedown", () => {
        this.inputController.setKey(key, true);
      });
      button.addEventListener("mouseup", () => {
        this.inputController.setKey(key, false);
      });
    });
  }
}

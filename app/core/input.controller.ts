export class InputController {
  private keys: { [key: string]: boolean } = {};

  constructor() {
    this.listenToEvents();
  }

  public isPressed(keyCode: string): boolean {
    return !!this.keys[keyCode];
  }

  private onKeyDown(event: KeyboardEvent): void {
    this.keys[event.code] = true;
    console.log(`Key down: ${event.code}`);
  }

  public setKey(keyCode: string, pressed: boolean): void {
    this.keys[keyCode] = pressed;
  }

  private onKeyUp(event: KeyboardEvent): void {
    this.keys[event.code] = false;
  }

  private listenToEvents(): void {
    window.addEventListener("keydown", this.onKeyDown.bind(this));
    window.addEventListener("keyup", this.onKeyUp.bind(this));
  }
}
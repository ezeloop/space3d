import type { Object3D, Scene } from "three";
import { GLTFLoader, type GLTF } from "three/examples/jsm/Addons.js";
import type { InputController } from "./input.controller";

export class Spaceship {
  private readonly gltfLoader = new GLTFLoader();
  public declare model: Object3D
  private readonly speed = 0.2;
  private readonly rotationSpeed = 0.05;

  constructor(
    private readonly scene: Scene, 
    private readonly inputController: InputController, 
    private readonly scale: number
) {}

  public loadModel() {
    this.gltfLoader.load(
      "/spaceship.glb",
      (gltf: GLTF) => {
        this.model = gltf.scene;
        this.model.scale.set(this.scale, this.scale, this.scale); // Adjust scale as needed
        this.scene.add(this.model);
      },
      undefined,
      (error) => {
        console.error("An error occurred while loading the GLTF model:", error);
      }
    );
  }
    public update():void {
        if(!this.model) {
            console.warn("Model not loaded yet");
            return;
        }

        if(this.inputController.isPressed("KeyW") || this.inputController.isPressed("ArrowUp")) {
            this.model.translateZ(this.speed); // Move forward
        }

        if(this.inputController.isPressed("KeyS") || this.inputController.isPressed("ArrowDown")) {
            this.model.translateZ(-this.speed); // Move backward
        }

        if(this.inputController.isPressed("KeyA") || this.inputController.isPressed("ArrowLeft")) {
            this.model.rotateY(this.rotationSpeed); // Rotate left
        }

        if(this.inputController.isPressed("KeyD") || this.inputController.isPressed("ArrowRight")) {
            this.model.rotateY(-this.rotationSpeed); // Rotate right
        }
    }
}

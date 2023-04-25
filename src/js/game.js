import { Actor, Engine, Vector, Label, Color, Font } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";

export class Game extends Engine {
  constructor() {
    super({ width: 640, height: 480 });
    this.start(ResourceLoader).then(() => this.startGame());
  }

  startGame() {
    
    const background = new Actor();
    background.graphics.use(Resources.Sea.toSprite());
    background.pos = new Vector(250, 250);
    background.vel = new Vector(-0, 0);
    this.add(background);
    
    const fish = new Actor();
    fish.graphics.use(Resources.Fish.toSprite());
    fish.pos = new Vector(400, 300);
    fish.vel = new Vector(-30, 10);
    this.add(fish);
    
    const anotherfish = new Actor();
    anotherfish.graphics.use(Resources.Fish.toSprite());
    anotherfish.pos = new Vector(300, 300);
    anotherfish.vel = new Vector(-30, 10);
    this.add(anotherfish);

    const duck = new Actor();
    duck.graphics.use(Resources.Duck.toSprite());
    duck.pos = new Vector(500, 0);
    duck.vel = new Vector(-50, 50);
    this.add(duck);
    
    
  
  }
}

new Game();

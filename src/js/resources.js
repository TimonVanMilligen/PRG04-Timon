import { ImageSource, Sound, Resource, Loader } from "excalibur";
import fishImage from "./fish.png";
import duckImage from "./duck.png";
import seaImage from "./sea.png";

const Resources = {
  Fish: new ImageSource(fishImage),
  Duck: new ImageSource(duckImage),
  Sea: new ImageSource(seaImage)
};
const ResourceLoader = new Loader([Resources.Fish, Resources.Duck, Resources.Sea])

export { Resources, ResourceLoader };

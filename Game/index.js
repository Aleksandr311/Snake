import {MAP_WIDTH, MAP_HEIGHT, MAP_POINT_SIZE,} from "./const.js"
import Snake from "../Core/Snake.js";
import Map from "../Core/Map.js";

const game = {
    map: {},
    snake: {},
    apple: {},
    score: 0,
    init(){
        Map.setWidth(MAP_WIDTH);
        Map.setHeight(MAP_HEIGHT);
        Map.setPointSize(MAP_POINT_SIZE);
        this.map = Map;
        
    },
    spawnSnake(){},
    spawnApple(){},
    start(){},
    pause(){},
    stop(){},
  }
  game.init()
  console.log(game)
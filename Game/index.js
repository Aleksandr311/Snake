import {MAP_WIDTH, MAP_HEIGHT, MAP_POINT_SIZE, SPEED,} from "./const.js"
import Snake from "../Core/Snake.js";
import Map from "../Core/Map.js";
import {SNAKE_LENGTH, DIRECTION, SPEED, SNAKE_POSITION_HEAD_X, SNAKE_POSITION_HEAD_Y}


from game = {
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
    init(){        
        Snake.setPositionHead(SNAKE_POSITION_HEAD_X);
        Snake.setPositionHead(SNAKE_POSITION_HEAD_Y);
        Snake.setPositionBody(SNAKE_POSITION_BODY_X);
        Snake.setPositionBody(SNAKE_POSITION_BODY_Y);
        Snake.setLength(SNAKE_LENGTH);
        Snake.setDirection(DIRECTION);
        Snake.setSpeed(SPEED);

        this.snake = Snake;
        },
    spawnSnake(){},
    spawnApple(){},
    start(){},
    pause(){},
    stop(){},
  }
  game.init()
  console.log(game)
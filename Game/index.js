import {MAP_WIDTH, MAP_HEIGHT, MAP_POINT_SIZE, SNAKE_SPEED, 
    SNAKE_DIRECTION, SNAKE_POSITION_HEAD_X, SNAKE_POSITION_HEAD_Y, 
    SNAKE_POSITION_BODY, APPLE_POSITION_X, APPLE_POSITION_Y,} from "./const.js"
import Snake from "../Core/Snake.js";
import Map from "../Core/Map.js";
import Apple from "../Core/Apple.js";



const game = { //здесь удалил from перед game
    map: {},
    snake: {},
    apple: {},
    score: 0,
    init(){
        Map.setWidth(MAP_WIDTH);
        Map.setHeight(MAP_HEIGHT);
        Map.setPointSize(MAP_POINT_SIZE);
        this.map = Map;
            
        Snake.setPositionHead({
            x: SNAKE_POSITION_HEAD_X,//номер ячейки по горизонтали
            y: SNAKE_POSITION_HEAD_Y,//номер ячейки по вертикали
        });
        Snake.setPositionBody(SNAKE_POSITION_BODY);
        //Snake.setPositionBody(SNAKE_POSITION_BODY_Y);
        //Snake.setLength(SNAKE_LENGTH);
        Snake.setDirection(SNAKE_DIRECTION);
        Snake.setSpeed(SNAKE_SPEED);
        this.snake = Snake;
        //this.snake.setSpeed(3);
        Apple.setPositionX(APPLE_POSITION_X)
        Apple.setPositionY(APPLE_POSITION_Y)
        this.apple = Apple
    },
    spawnSnake(){},
    spawnApple(){},
    start(){},
    pause(){},
    stop(){},
  }
  game.init()
  console.log(game)
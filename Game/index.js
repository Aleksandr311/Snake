import {MAP,SNAKE, APPLE,} from "./const.js"
import Snake from "../Core/Snake.js";
import Map from "../Core/Map.js";
import Apple from "../Core/Apple.js";



const game = { //здесь удалил from перед game
    map: {},
    snake: {},
    apple: {},
    score: 0,
    init(){
        Map.setWidth(MAP.WIDTH);
        Map.setHeight(MAP.HEIGHT);
        Map.setPointSize(MAP.POINT_SIZE);
        this.map = Map;
            
        Snake.setPositionHead({
            x: SNAKE.POSITION_HEAD_X,//номер ячейки по горизонтали
            y: SNAKE.POSITION_HEAD_Y,//номер ячейки по вертикали
        });
        Snake.setPositionBody(SNAKE.POSITION_BODY);
        //Snake.setPositionBody(SNAKE_POSITION_BODY_Y);
        //Snake.setLength(SNAKE_LENGTH);
        Snake.setDirection(SNAKE.DIRECTION);
        Snake.setSpeed(SNAKE.SPEED);
        this.snake = Snake;
        //this.snake.setSpeed(3);
        Apple.setPositionX(APPLE.POSITION_X);
        Apple.setPositionY(APPLE.POSITION_Y);
        this.apple = Apple;
    },
    spawnSnake(){},
    spawnApple(){},
    start(){},
    pause(){},
    stop(){},
  }
  game.init()
  console.log(game)
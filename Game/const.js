//map
const MAP_WIDTH = 20;
const MAP_HEIGHT = 20;
const MAP_POINT_SIZE = 16;

const SNAKE_POSITION_HEAD_X = 10;
const SNAKE_POSITION_HEAD_Y = 10;
const SNAKE_POSITION_BODY = [
    {
        x:9,
        y:10,
    },
    {
        x:8,
        y:10,
    },
];
const SNAKE_LENGTH = 3; //ЯЧЕЙКИ
const SNAKE_DIRECTION = "right";//"up","down","left" возможные значения
const SNAKE_SPEED = 1;

const APPLE_POSITION_X = 5;
const APPLE_POSITION_Y = 5;

export {
    MAP_WIDTH,
    MAP_HEIGHT,
    MAP_POINT_SIZE,
    
    SNAKE_POSITION_HEAD_X,
    SNAKE_POSITION_HEAD_Y,
    SNAKE_POSITION_BODY,
    SNAKE_LENGTH,
    SNAKE_DIRECTION,
    SNAKE_SPEED,//Обернуть в функцию и экспортировать ее????

    APPLE_POSITION_X,
    APPLE_POSITION_Y,
};


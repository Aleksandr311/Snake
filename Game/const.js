//map
const MAP = {
    WIDTH: 20,
    HEIGHT: 20,
    POINT_SIZE: 16,
};

const SNAKE = {
    POSITION_HEAD_X: 10,
    POSITION_HEAD_Y: 10,
    POSITION_BODY: [
    {
        x:9,
        y:10,
    },
    {
        x:8,
        y:10,
    },
],
    LENGTH: 3, //ЯЧЕЙКИ
    DIRECTION: "right",//"up","down","left" возможные значения
    SPEED: 3,
};

const APPLE = {
    POSITION_X: 5,
    POSITION_Y: 5,
};

export {
    MAP,
    SNAKE,
    APPLE,
};


const snake = {
    positionHead:{
        x:0,//номер ячейки по горизонтали
        y:0,//номер ячейки по вертикали
    },
    positionBody:[{
        x:0,//номер ячейки по горизонтали
        y:0,//номер ячейки по вертикали
    }],//ячейки занимаемые body
    length: 0,//сколько ячеек занимает змейка
    direction:"right",//"up","down","left" возможные значения
    speed: 0,//Количество ячеек в секунду
    move(){},
    eats(something){},
    setSpeed(speed){},
    setDirection(direction){
        this.direction = direction
    },
    grow(){},

}
export default snake
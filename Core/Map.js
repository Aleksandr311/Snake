export default map = {
    width: 0,// количество ячеек по горизонтали
    height: 0,//количество ячеек по вертикали
    pointSize: 0, //размер ячейки
    setWidth(w){
        this.width = w
    },
    setHeight(h){
        this.height = h
    },
    setPointSize(ps){
        this.pointSize = ps
    },
}




/*let field = document.createElement('div');
document.body.appendChild(field);
field.classList.add('field');

for (let i=0; i<400; i++){
   let cell = document.createElement('div');
   field.appendChild(cell);
   cell.classList.add('cell');
}

let cells = document.getElementsByClassName('cell');
let x = 1, y=20;

for (let i=0; i<cell.length; i++){
    if (x>20){
    x=1;
    y--;
    };

cell[i].setAttribute('posX', x);
cell[i].setAttribute('posY', y);
x++;
}*/
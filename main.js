let area = document.querySelector( '.area');
let num = 0;
let result = 'Игра не закончена';

area.onclick = function(event){
    console.log(event);
    //console.log(event.target);
    if (event.target.className == 'block'){
        if(num % 2 == 0) {
            event.target.innerHTML = 'X';
        }else {event.target.innerHTML = 0;}
     }
     num++;
     checkWin();
     document.querySelector('.win').innerHTML = result


     function checkWin() {
        const boxes = document.getElementsByClassName('block');
        console.log(boxes);

        const arr = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7], 
            [2,5,8],
            [0,4,8],
            [2,4,6]
         ];
         for (let i =0; i<arr.length; i++) {
            if(boxes[arr[i][0]].innerHTML== 'X' &&
boxes[arr[i][1]].innerHTML== 'X' && boxes[arr[i][2]].innerHTML== 'X')
                        {
                            result = 'победили крестики!';

                        }
                        else if(boxes[arr[i][0]].innerHTML== '0' &&
boxes[arr[i][1]].innerHTML== '0' && boxes[arr[i][2]].innerHTML== '0'){
                        result = 'Победили нолики!'; 
                        }
                     }
     }
}
function paveBox(boxes) {
  let done = [];
  let ing = [];
  let start = actions[0];
let count = 0;
  for(let i=0; i<boxes.length; i++) {
    if(boxes[i] < start){
        for(let j=0; j<start; j++) {
            count++;
        }
        if(count === start){

            done.push(boxes[i]);
        }
    }
    if(){

    }
  }
}

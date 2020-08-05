var initArr = [1,2,3,4,5,6,7,8,9];

function numGen(){
  let a=[];
  for (i=0;i<10;++i){
    a[i]=i;
  }
  return a = a.slice(1);
}


function shuffle() {
  let array =  numGen();
  let tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return array;
}

function blockGen(array){
  let html = "";
  for(let i =0; i < array.length; i++){
    html = html +`
    <div class="card"><span class="block_b${array[i]}">${array[i]}</span></div>
    `;

  }
  document.querySelector("#gen").innerHTML = html;
}

function gen(){
  let randArr = shuffle();
  blockGen(randArr);
}

function sort() {
  let randArr =numGen();
  blockGen(randArr);
}

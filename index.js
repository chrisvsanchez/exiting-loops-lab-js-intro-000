function breakOut(array, changeValue, stopValue){
  for (let i = 0; i < array.length; i++){
    if ( i === stopValue){
      break;
    }else{
    let array[i] = changeValue;
    }
  }
  return array;
}
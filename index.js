var currentlyServing=0;

function takeANumber(katzDeliLine) {
  currentlyServing++;
 let numInLine = katzDeliLine.push(currentlyServing);
  return `Welcome, You are number ${currentlyServing}`;
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length===0){
    return "There is nobody waiting to be served!";
  }
  else {
    let firstInLine = katzDeliLine.shift();
    return `Currently serving ${firstInLine}.`;
  }
}

function currentLine(katzDeliLine) {
  let lineString ="The line is currently";
  if(katzDeliLine.length===0){
    lineString+=" empty.";
    return lineString;
  }
  else{
    lineString+=": "
    katzDeliLine.forEach((person, i) =>{
     lineString+=`${i+1}. ${person}`;
     if(i!==katzDeliLine.length-1){
       lineString+=", "
     }
    })
    return lineString;
  }
}
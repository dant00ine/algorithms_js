function Sigma(num){
  if(num < 1){
    return 0;
  } else {
    return Sigma(num -1) + num;
  }
}

// Martin's fancier recursion formula

function martinSigma(num){
  var returnVal = 0;
  if(num >= 1){
    var intNum = Math.trunc(num);
    var prevVal = martinSigma(intNum -1);
    returnVal = prevVal + intNum;
  }
  return returnVal
}

function factorial(num){
  if(num == 1)
    return num;
  else
    return num * factorial(num - 1);
}

function floodFill(canvas2D, startXY, newColor){
  // we know this cell is targetColor so store the value
  // before we make the change to the newColor
  var targetColor = canvas2D[startXY[0]][startXY[1]];
  canvas2D[startXY[0]][startXY[1]] = newColor;

  // identify four possible adjacent pixels
  var rowUp = [startXY[0] -1, startXY[1]];
  var rowDown = [startXY[0] +1, startXY[1]];
  var rightPix = [startXY[0], startXY[1] +1];
  var leftPix = [startXY[0], startXY[1] -1]

  //quick break cases followed by recursive calls on new cells
  if(canvas2D[rowUp[0]] && canvas2D[rowUp[0]][rowUp[1]]){
    if( canvas2D[rowUp[0]][rowUp[1]] == targetColor )
      { floodFill(canvas2D, rowUp, newColor); }
  }

  if(canvas2D[rowDown[0]] && canvas2D[rowDown[0]][rowDown[1]]){
    if(canvas2D[rowDown[0]][rowDown[1]] == targetColor)
      { floodFill(canvas2D, rowDown, newColor); }
  }

  if(canvas2D[rightPix[0]] && canvas2D[rightPix[0]][rightPix[1]]){
    if(canvas2D[rightPix[0]][rightPix[1]] == targetColor)
      { floodFill(canvas2D, rightPix, newColor); }
  }

  if(canvas2D[leftPix[0]] && canvas2D[leftPix[0]][leftPix[1]]){
    if(canvas2D[leftPix[0]][leftPix[1]] == targetColor)
      { floodFill(canvas2D, leftPix, newColor); }
  }

  return canvas2D;
}

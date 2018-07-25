function produceDrivingRange(blockRange) {
  return function(start,end) {
    const dist = parseInt(end) - parseInt(start);
    const diff = Math.abs(blockRange - dist);

    if(dist > blockRange ){
      return `${diff} blocks out of range`;
    } else if (dist <  blockRange) {
      return `within range by ${diff}`;
    }
  }
}

function produceTipCalculator(tip) {
  return function(total) {
    return tip*total
  }
}

const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

//the following gives the right solution but not what the test wanted...
// function totalBatteries(){
//     let batteries = batteryBatches.reduce(function(total,element){return element + total},0)
//     return batteries
// }
// what the test wanted.....
const totalBatteries = batteryBatches.reduce(function(total, batches){
    return batches + total
    }
  )

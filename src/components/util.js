export function getMinValueOfArr(arr){
    var min = arr[0];
    for(var i=1,len=arr.length;i<len;i++){
        var temp = arr[i];
        min = temp < min ? temp:min;
    }
    return min;
}

export function getMaxValueOfArr(arr){
    var max = arr[0];
    for(var i=1,len=arr.length;i<len;i++){
        var temp = arr[i];
        max = temp < max ? max : temp;
    }
    return max;
}

export function getMinIndexOfArr(arr,min){
    var index = 0;
    for(var i=0,len=arr.length;i<len;i++){
        if(arr[i]===min){
            index = i;
            return index;
        }
    }
}

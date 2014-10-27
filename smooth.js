/**
 * Created by a_wags25 on 10/20/14.
 */
var temp= [32, 44, 48, 52, 55, 54, 60, 63, 60, 57, 54]


function smooth( points ){
    var  array = [];


    for(i =0; i < points.length; i ++) {
        if (i===0 || i==points.length-1) {
            array[i] = points[i];
        }
        else ( (array[i]=  (points[i-1] + points[i +1 ] +  points[i])/3))

    }
    return array;
}

console.log(smooth(temp));
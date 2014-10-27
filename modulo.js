/**
 * Created by a_wags25 on 10/20/14.
 */

//Collatz
//odd=3n +1
//even=n/2

function collatz (x){
    var steps=0;
    while (x!==1) {
        if(x%2){ x= (x*3)+1}
        else {x=(x/2)};
        steps++;
    }

    return steps;
}

console.log(collatz(1000));
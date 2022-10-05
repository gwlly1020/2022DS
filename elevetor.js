var readline = require('readline-sync');

var currentfloor = 5 ;
var targetfloor ; 
const top = 6;
const bottom = 1 ;

do
{
    targetfloor = readline.question("elevator now at ?" + currentfloor + "your target?") ;
    //bottom <= targetfloor <= top ?
    if( targetfloor < bottom || targetfloor > top)
    {
        console.log("plz input floor between" + bottom + "and" + top) ;
        continue ;
    }
    else
    {
        console.log("OK") ; 
        //move elevator
        //case 1 : down
        if(targetfloor < currentfloor)
        {
            console.log ("down...");
            while(targetfloor < currentfloor)
            {
                //currentfloor -= 1 ;
                //currentfloor -- ;
                currentfloor = currentfloor -1 ;
                console.log("elevator now at:" + currentfloor) ;
            }
        }
            else if(targetfloor > currentfloor )
            {
                console.log ("up...");
                currentfloor = currentfloor +1 ;
                console.log("elevator now at:" + currentfloor) ;
            }
            else
            {
             console.log("stop!") ;
             break ;
            }
    }
}
while(1)
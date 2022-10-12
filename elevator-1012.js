var readline = require ("readline-sync") ;

var currentfloor = 1 ;
var targetfloor ;
var floorname = ["B2","B1","1","2","3","4","5","6" ] ;

do
{
    targetFloor = readline.question("Elevator now at " + currentFloor + ". Ur target?");

    if (floorname.indexOf (targetfloor.touppercase()) < 0) ;
    {
        console.log ("please input floor : " + floorname.toString()) ;
        continue ;
    }
    else{
        console.log("OK") ;
        targetfloor = floorname.indexOf (targetfloor.touppercase()) ;
       //move elevator
       //case 1: down
       if(targetfloor < currentfloor ) 
       {
        console.log("down...") ;
        while(targetfloor < currentfloor )
        {
            //currentfloor -= 1 ;
            currentfloor -- ;
            //currentfloor = currentfloor -1 ;
            console.log("Elevator now at:"+ floorname[currentfloor] ) ;
        }
       }
       else if( targetfloor > currentfloor ) 
       {
        for(;targetfloor>currentFloor;)
        {
            console.log("Elevator now at:"+  floorName[++currentFloor]);
        }
        else
        {
            console.log("Stop!");
            break;
        }
       }
    }
} while (1)
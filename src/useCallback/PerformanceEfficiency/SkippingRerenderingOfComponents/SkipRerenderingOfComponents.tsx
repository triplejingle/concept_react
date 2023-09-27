import {Profiler, useCallback} from "react";

export default function SkipRerenderingOfComponents(){
    function render({id, phase, actualDuration, baseDuration, startTime, commitTime}:any){
        console.log(actualDuration)
    }

    return (
        <Profiler id={"callback"} onRender={render}>
            {true&&<SkipRerenderingOfComponents/>}
        </Profiler>
    );
}
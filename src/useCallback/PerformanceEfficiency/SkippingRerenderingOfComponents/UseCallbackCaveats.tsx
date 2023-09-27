import {useCallback} from "react";

export default function UseCallbackCaveats(){

    return (<>
        <UseCallbackCannotBeDirectlyUsedInsideConditions/>
    </>)
}

function UseCallbackCannotBeDirectlyUsedInsideConditions(){
    const shouldUseCallback = false;
    function exampleFunction(){

    }
    //UseCallback is a hook. Which can only be called in the top level of the component or my own hooks.
    //The hooks must be called in the same order in every render. Using conditions or loops goes against this rule.
    //Which is why the example below this doesn't work.
    // if(shouldUseCallback) {
    //     const cachedFunction = useCallback(exampleFuncation, []);
    // }

    //if usecallback is needed in a condition it can be extracted into a new component eg:
    return (<>{shouldUseCallback&&<ShouldUseCallbackComponent exampleFunction={exampleFunction}/>}</> )
    // the same can be done using a loop
}
interface ShouldUseCallbackComponent{
    exampleFunction: ()=>void;
}
function ShouldUseCallbackComponent({exampleFunction}:ShouldUseCallbackComponent){
    const cachedFunction = useCallback(exampleFunction, []);
    return (<></>)
}


import {useCallback} from "react";

export default function UseCallbackFunction(){
    //When a component is loaded the functions inside the component are newly created
    //For example this function
    function functionWhichWillBerenderedAndNotExecuted(){

    }


    const oneOfThePossibleDependencyValues = "dependency that can change";
    //Usecallback is used to cache one of the functions. So it isn't recreated.
    const cachedFunction = useCallback(functionWhichWillBerenderedAndNotExecuted, [oneOfThePossibleDependencyValues]);
    //It caches the function depended on when the dependency changes.
    //When a dependency changes it will recreate the function and cache that function.
    //Which means if the dependencies changes often the use of usecallback diminishes
    //The less the dependencies changes the more usefull usecallback is.

    return (<form>
        <button type={"submit"} onClick={cachedFunction}/>
    </form>);

}
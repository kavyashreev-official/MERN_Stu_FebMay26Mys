// Container/wrapper component
import {React} from "react";
// children is a special React prop
// It holds nested JSX passed between compenent tags
// It helps create reusable wrapper/layout components
function Contain({children}){
    return(
        <div className="card">
            {children}
        </div>
    );
}
// Parent Component
export function PropsChildren(){
    return(
        <>
          <Contain>  {/* <Container> is name of child component */}
            <h3>First child element in Nested approach</h3>
          </Contain>
        </>
    )

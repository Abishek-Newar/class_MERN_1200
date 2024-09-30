import react from "react"

export default class Header extends react.Component{
    render(){
        return(
            <>
                hello there from class component
            </>
        )
    }
}

export class Head extends react.Component{
    render(){
        return(
            <div>
                hello there from class component
            </div>
        )
    }
}

export function HeaderFunc (){
    return(
        <>
        hi there from fuctional component
        </>
    )
}




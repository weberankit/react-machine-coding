//redad f not understnad https://chatgpt.com/share/8a7b4186-dce6-43cf-85cb-a189208361d9

const List=({item,p})=>{
    return(
        <>
        {item} {p}
        </>
    )
}
export default List

export const Hocf=(List)=>{
    //here we create hocf and it return function 
    return (props)=>{ //here the props attahed/paassed to the function which call Hocf
        return(
        <>
        <h1>this is hocf</h1>
        <List {...props}/>
        </>
        )
    }
}
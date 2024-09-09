import List, { Hocf } from "./hoc1"

const Hoc2=()=>{
    {/*create new component as we know hocf return function and jsx we are calling 
        the callinghoc() or <callinghoc/> both same and we pass data here i.e pros
        */}
    const Callinghoc =Hocf(List)
    return(
        <>
        <Callinghoc item="ffs" p="ankit"/>
        </>
    )
}
export default Hoc2
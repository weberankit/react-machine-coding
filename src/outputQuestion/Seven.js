const Seven=()=>{
    let items=[1,2,34,5]
    //not recmommended to use readbility or other issue
        const ListElement = ({ title }) => <li>{title}</li>
        return (
        <div>
        {items.map((item, index) => (<ListElement key={index} title={item} />))}
        </div>)
        }
export default Seven

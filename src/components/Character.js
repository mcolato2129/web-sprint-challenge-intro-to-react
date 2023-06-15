// Write your Character component here


const Character = (props) => {
    console.log(props)
    return (
        <div>
            <h1 style={{color: '#160D08',}}>{props.char.name}</h1>
        </div>
    )
}

export default Character;
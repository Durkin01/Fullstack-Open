import Part from './Part'

const Content = ({ id, name, parts }) => {

    const totalExercises = parts.reduce((accumulator, part) => accumulator + part.exercises, 0)
    console.log(totalExercises);

    return (
        <div>
            <h2>
                {name}
            </h2>
        
            {parts.map((part) =>
            {
                console.log("log 1", part); 
                return (
                    <Part key={part.id} name={part.name} exercises={part.exercises} /> 
                    )})}
            
            <strong>total of {totalExercises} exercises</strong>
                    
        </div>
    )
}

export default Content
import Content from './Content'

const Course = ({ course }) => {

    console.log("hello")
    return (
        <div>
            <h1>Web development curriculum</h1>

            {course.map((course) => 
            { return (<Content key={course.id} name={course.name} parts={course.parts} />) })}

        </div>
    )
}

export default Course
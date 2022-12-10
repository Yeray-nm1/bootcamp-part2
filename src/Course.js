import {Header} from './Header.js'
import {Content} from './Content.js'

export const Course = ({ name, parts }) => {
    const total = () => {
        let suma = 0;
        parts.forEach(part => suma = suma + part.exercises)
        return suma;
    }

    return(
        <div>
            <Header name={name} />
            {parts.map((part) => (
                <Content key={part.id} {...part} />
            ))}
            <strong>Total of {total()} exercises</strong>
        </div>
    )
}
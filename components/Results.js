import Thumbnail from "./Thumbnail"
import FlipMove from "react-flip-move"

const Results = ({ results }) => {
  return (
    <FlipMove className="sm:px-5 px-7 my-10 sm:grid md:grid-cols-3 xl:grid-cols-4 3xl:flex flex-wrap justify-center">
        {results.map(result => (
            <Thumbnail key={result.id} result={result} />
        ))}
    </FlipMove>
  )
}

export default Results
// import { useSearchParams } from "react-router-dom"
import { useParams } from "react-router-dom"

const Article = () => {
  // const [params] = useSearchParams()
  // let id = params.get('id')
  // let name = params.get('name')
  const { id, name } = useParams()
  return (
    <div>
      article -{id} -{name}
    </div>
  )
}

export default Article
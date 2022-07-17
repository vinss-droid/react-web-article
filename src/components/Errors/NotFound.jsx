import { useEffect } from "react"

const NotFound = () => {

  useEffect(() => {

      document.title = 'Not Found'

  }, []);

  return (
    <div>
        <h1 className="text-white text-center fw-bold text-uppercase not-found">
            404 <br /> Page not found
        </h1>
    </div>
  )
}

export default NotFound

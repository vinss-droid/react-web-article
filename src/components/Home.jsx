import { useEffect } from "react"

const Home = () => {

  useEffect(() => {

      document.title = 'Home'

  }, []);

  return (
    <div className="container-fluid">
        <div className="row justify-content-center mt-5">
          <div className="col-sm-12 col-md-12 col-lg-12 overflow-hidden text-white">
              <div className="container">
                <h1 className="text-center fw-bold text-uppercase">Welcome to GOTO-MARS sites</h1>
                <hr />
                <p className="text-justify mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eaque dicta doloribus cupiditate fugiat at quo unde necessitatibus laudantium molestiae facere veniam porro, quas voluptate. Debitis animi temporibus deleniti atque reiciendis. Deserunt ipsum repellat tempora, quae atque esse pariatur nobis asperiores voluptatum perferendis rem inventore accusantium reiciendis deleniti sapiente aspernatur beatae ducimus non natus aut nemo cumque quaerat! Beatae quis nam cumque veniam quibusdam impedit quo quae sed expedita distinctio maxime enim omnis voluptatem earum, rem, neque, dolorum suscipit exercitationem eligendi harum eveniet consequuntur vero facere reiciendis. Officia voluptatem nulla fugiat natus nobis, dicta accusantium pariatur, hic suscipit exercitationem necessitatibus.
                </p>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Home

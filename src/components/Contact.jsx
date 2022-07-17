import { useEffect } from "react"
import { Link } from "react-router-dom"

const Contact = () => {

  useEffect(() => {

      document.title = 'Contact'

  }, []);

  return (
    <div className="container-fluid">
        <div className="row justify-content-center mt-5">
          <div className="col-sm-12 col-md-12 col-lg-8 text-white">
              <div className="card bg-secondary">
                <div className="card-body">
                  <h2 className="text-center text-uppercase">
                    Get In Touch
                  </h2>
                   <hr className="mb-4" />
                   <div className="row justify-content-center">
                      <div className="col-sm-12 col-md-12 col-lg-4">
                        <a href='https://instagram.com/sipahutarkevin' className="text-decoration-none text-white" target='_blank'>
                          <img src="https://img.icons8.com/fluency/48/000000/instagram-new.png"/> Sipahutar Kevin
                        </a>
                      </div>
                      <div className="col-sm-12 col-md-12 col-lg-4">
                        <a href='https://github.com/vinss-droid' className="text-decoration-none text-white" target='_blank'>
                        <img src="https://img.icons8.com/material-sharp/48/000000/github.png"/> vinss-droid
                        </a>
                      </div>
                      <div className="col-sm-12 col-md-12 col-lg-4">
                        <a href='https://www.linkedin.com/in/kevin-sipahutar-b65381220' className="text-decoration-none text-white" target='_blank'>
                          <img src="https://img.icons8.com/fluency/48/000000/linkedin.png"/> Kevin Sipahutar
                        </a>
                      </div>
                   </div>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Contact

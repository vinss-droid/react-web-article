import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

const Article = () => {

  const [ articles, setArticles ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {

    document.title = 'Artikel'

    const getArticles = async() => {

      const request = await fetch('https://api.spaceflightnewsapi.net/v3/articles');
      const response =  await request.json();
  
      setArticles(response);
      setLoading(false);
  
   }

    getArticles();

  }, []);

  return (
    <div className="container-fluid">
        <div className="row justify-content-center my-5">
          <div className="col-sm-12 col-md-12 col-lg-12 text-white">
              <h1 className="text-center fw-bold text-uppercase">
                  News Article
              </h1>

              <hr className="mb-5" />

              {loading && (

                <div>
                  <div className="container mb-5">
                    <a href="" className="text-decoration-none placeholder-glow" onClick={(e) => {e.preventDefault()}}>
                        <div className="card bg-secondary shadow placeholder w-100">
                          <div className="card-body">
                            <div className="row justify-content-center">
                              <div className="col-sm-12 col-md-12 col-lg-4">
                                <img className="rounded" src="" alt="" width="100%" />
                              </div>
                              <div className="col-sm-12 col-md-12 col-lg-8">
                                  <h5 className="fw-bold text-white mt-4 placeholder">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa saepe ullam optio dolorum itaque autem?
                                  </h5>
                                  <p className="text-info placeholder">
                                    Published At : 
                                  </p>
                              </div>
                            </div>
                          </div>
                        </div>
                    </a>
                  </div>
                  
                  <div className="container mb-5">
                    <a href="" className="text-decoration-none placeholder-glow" onClick={(e) => {e.preventDefault()}}>
                        <div className="card bg-secondary shadow placeholder w-100">
                          <div className="card-body">
                            <div className="row justify-content-center">
                              <div className="col-sm-12 col-md-12 col-lg-4">
                                <img className="rounded" src="" alt="" width="100%" />
                              </div>
                              <div className="col-sm-12 col-md-12 col-lg-8">
                                  <h5 className="fw-bold text-white mt-4 placeholder">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa saepe ullam optio dolorum itaque autem?
                                  </h5>
                                  <p className="text-info placeholder">
                                    Published At : 
                                  </p>
                              </div>
                            </div>
                          </div>
                        </div>
                    </a>
                  </div>
                  
                  <div className="container mb-5">
                    <a href="" className="text-decoration-none placeholder-glow" onClick={(e) => {e.preventDefault()}}>
                        <div className="card bg-secondary shadow placeholder w-100">
                          <div className="card-body">
                            <div className="row justify-content-center">
                              <div className="col-sm-12 col-md-12 col-lg-4">
                                <img className="rounded" src="" alt="" width="100%" />
                              </div>
                              <div className="col-sm-12 col-md-12 col-lg-8">
                                  <h5 className="fw-bold text-white mt-4 placeholder">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa saepe ullam optio dolorum itaque autem?
                                  </h5>
                                  <p className="text-info placeholder">
                                    Published At : 
                                  </p>
                              </div>
                            </div>
                          </div>
                        </div>
                    </a>
                  </div>
                </div>

              )}

              { !loading && ( 

                <div>
                    {articles.map((article) => (

                        <div key={article.id} className="container mb-5">
                            <Link to={`/article/${article.id}`} className="text-decoration-none">
                                <div className="card bg-secondary shadow">
                                  <div className="card-body">
                                    <div className="row justify-content-center">
                                      <div className="col-sm-12 col-md-12 col-lg-4">
                                        <img className="rounded" src={article.imageUrl} alt={article.imageUrl} width="100%" />
                                      </div>
                                      <div className="col-sm-12 col-md-12 col-lg-8">
                                          <h5 className="fw-bold text-white mt-4 ">{article.title}</h5>
                                          <p className="text-info">
                                            Published At : { new Date(article.publishedAt).toLocaleDateString() }
                                          </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                            </Link>
                        </div>

                    ))}
                </div>

              ) }

          </div>  
        </div>
    </div>
  )
}

export default Article

import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import NotFound from "./Errors/NotFound";

const ArticleDetail = () => {

    const [article, setArticle] = useState({});
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);
    const params = useParams();

    useEffect(() => {

        const getArticleDetail = async() => {

            const request = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${params.id}`);

            if (!request.ok) {
                setNotFound(true);
            }

            const response = await request.json();

            document.title = response.title

            setArticle(response);
            setLoading(false);

        }

        getArticleDetail();

    }, []);

    if (notFound) {
        
        return (

            <NotFound />

        )

    }

  return (
    <div>
        <div className="container">
            <div className="row justify-content-center text-white my-5">
                <div className="col-sm-12 col-md-12 col-lg-12 placeholder-glow">

                    {loading && (

                        <div className="card bg-secondary shadow py-2 placeholder">
                            <div className="card-body">
                                <div className="container">
                                    <h3 className="text-center fw-bold text-uppercase placeholder">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius maxime, nulla sequi qui doloribus aut molestias voluptate ab alias praesentium.
                                    </h3>
                                    <hr />
                                    <img className="w-100 rounded" src="    " />
                                    <p className="text-justify my-4 placeholder">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, dolor nulla quod inventore excepturi asperiores totam. Dolorum labore expedita hic impedit sapiente! Ullam nemo doloribus tempora animi voluptatibus eius doloremque sint molestias repellendus delectus, blanditiis perferendis distinctio aspernatur libero accusamus consequatur perspiciatis atque modi aut laboriosam autem quod error nulla!
                                    </p>
                                    <p className="text-white placeholder">
                                        <a href={article.url} className="text-decoration-none text-info" target='_blank'>
                                            <span className="text-white">Source : </span>
                                        </a>
                                    </p>
                                    <p className="text-white placeholder">
                                        Published at : 
                                    </p>
                                </div>
                            </div>
                        </div>

                    )}
                    
                    {!loading && (

                        <div className="card bg-secondary shadow py-2">
                            <div className="card-body">
                                <div className="container">
                                    <h3 className="text-center fw-bold text-uppercase">
                                    { article.title }
                                    </h3>
                                    <hr />
                                    <img className="w-100 rounded" src={article.imageUrl} alt={article.imageUrl} />
                                    <p className="text-justify my-4">
                                        {article.summary}
                                    </p>
                                    <p className="text-white">
                                        <a href={article.url} className="text-decoration-none text-info" target='_blank'>
                                            <span className="text-white">Source : </span> {article.newsSite}
                                        </a>
                                    </p>
                                    <p className="text-white">
                                        Published at : <span className="text-info">{ new Date(article.publishedAt).toLocaleDateString() }</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                    )}

                </div>
            </div>
        </div>
    </div>
  )
}

export default ArticleDetail

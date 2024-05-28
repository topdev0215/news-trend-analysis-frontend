import { useParams, useLocation } from "react-router-dom"
import ArticleTable from "../components/articleTable"

const Articles = () => {
    const location = useLocation()
    const { id, month } = useParams();
    const { topic_name } = location.state || {};

    return (
        <>
            <div className='text-center text-4xl font-sans text-sky-600 mt-10'>Topic:
                <span className="ml-5 text-pink-800">
                    {topic_name}
                </span>
            </div>
            <div className='flex flex-col mx-5 my-10'>
                <div className='flex justify-between'>
                    <div className='flex items-center font-mono text-2xl text-sky-500 ms-3'>
                        {month} Articles
                    </div>
                </div>
                <ArticleTable id={id} month={month} />
            </div>
        </>
    )
}

export default Articles
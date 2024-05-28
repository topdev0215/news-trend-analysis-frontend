import { useParams, useLocation, useNavigate } from "react-router-dom";
import TopicTable from "../components/topicTable";
import DisplayGraphButton from "../components/displayGraphButton";

const Topic = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { id } = useParams();
    const { topic_name } = location.state || {};

    function capitalizeFirstLetterOfEachWord(str) {
        return str
            .split(' ') // Split the string into an array of words
            .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
            .join(' '); // Join the array back into a single string
    }

    const topic = topic_name ? capitalizeFirstLetterOfEachWord(topic_name) : '';

    // Display graph
    const displayGraph = (event, topic) => {
        event.preventDefault();
        navigate(`${location.pathname}/graph`, {
            state: {
                topic: topic
            }
        });
    };

    return (
        <>
            <div className='text-center text-4xl font-sans text-sky-600 mt-10'>
                Topic:
                <span className="ml-5 text-pink-700">
                    {topic}
                </span>
            </div>
            <div className='flex flex-col mx-5 my-10'>
                <div className='flex justify-between'>
                    <div className='flex items-center font-mono text-2xl text-sky-500 ms-3'>
                        Month Trend
                    </div>
                    <div className='m-2' onClick={(event) => displayGraph(event, topic)}>
                        <DisplayGraphButton />
                    </div>
                </div>
                <TopicTable id={id} topic={topic} />
            </div>
        </>
    );
};

export default Topic;
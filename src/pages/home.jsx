import { useState } from 'react';
import TopicsTable from '../components/topicsTable'
import AddButton from '../components/addButton'
import { useOutletContext } from 'react-router-dom';

function Home() {
  const [reload, setReload] = useState(false);
  const { setLoading } = useOutletContext();

  return (
    <>
      <div className='text-center text-4xl font-sans text-green-500 mt-10'>WELCOME TO TOPIC TREND ANALYSIS</div>
      <div className='flex flex-col mx-5 my-10'>
        <div className='flex justify-between'>
          <div className='flex items-center font-mono text-2xl text-sky-500 ms-3'>
            History
          </div>
          <div className='m-2'>
            <AddButton reload={reload} setReload={setReload} setLoading={setLoading} />
          </div>
        </div>
        <TopicsTable reload={reload} setReload={setReload} setLoading={setLoading} />
      </div>
    </>
  )
}

export default Home

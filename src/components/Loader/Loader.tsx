import ClipLoader from 'react-spinners/ClipLoader';

import './Loader.css'

const Loader: React.FC = () => {

  return (
    <div className='loader'>
      <ClipLoader
        color="#bb9d55"
        loading={true}
        size={130}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Loader;

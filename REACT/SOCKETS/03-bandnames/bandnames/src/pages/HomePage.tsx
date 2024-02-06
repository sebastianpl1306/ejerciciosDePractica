import { useContext } from 'react';
import { AddBand, BandChar, BandList } from '../components';
import { SocketContext } from '../context';

export function HomePage() {
  const { online } = useContext( SocketContext );

  return (
    <div className="container">
      <div className="alert">
        <p>
          Service Status:
          <span className="text-success" style={{ display: online ? 'block' : 'none'}}>Online</span>
          <span className="text-danger" style={{ display: online ? 'none' : 'block'}}>Offline</span>
        </p>
      </div>

      <h1>BandNames</h1>
      <hr />
      <div className='row'>
        <div className="col">
          <BandChar/>
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <BandList/>
        </div>
        <div className="col-4">
          <AddBand/>
        </div>
      </div>
    </div>
  )
}

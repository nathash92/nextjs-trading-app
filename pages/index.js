import CategoryDropdown from '@/lib/components/dashboard/CategoryDropdown';
import Timestamp from '@/lib/components/dashboard/Timestamp';
import TrandingChart from '@/lib/components/dashboard/TrandingChart';
import { useCallback, useState } from 'react';

const categories = [
  {
    name: 'Nifty',
    value: 'NSE:NIFTY'
  },
  {
    name: 'Bank Nifty',
    // value: 'NSE:BANKNIFTY'
    value: "NASDAQ:AAPL"
  }
]


export default function Home() {

  const [selectedCategory, setSelectedCategory] = useState(categories[0].value);

  const onCategoryChange = useCallback((e) => {
    setSelectedCategory(e);
  }, []);

  return (
    <div className='p-2 vh-100'>
      <div className='row mh-100'>
        <div className='col-2'>
          <CategoryDropdown data={categories} val={selectedCategory} changeCb={onCategoryChange} />
        </div>
        <div className='col'>
          <div className='my-2'>
            Time: <span className='fw-bold'><Timestamp /></span>
          </div>
          <div style={{ height: 'calc(100vh - 30vh)' }}>
            <TrandingChart category={selectedCategory} />
          </div>
        </div>
      </div>
    </div>
  )
}

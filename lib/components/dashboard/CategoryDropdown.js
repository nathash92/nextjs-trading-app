import React, { memo } from 'react'

function CategoryDropdown({ data, changeCb, val }) {
  return (
    <div>
      <select className='form-select' value={val} onChange={(e) => changeCb(e.target.value)}>
        <option>Choose Category</option>
        {
          (data || []).map(e => <option key={e.value} value={e.value}>{e.name}</option>)
        }
      </select>
    </div>
  )
}

export default memo(CategoryDropdown);
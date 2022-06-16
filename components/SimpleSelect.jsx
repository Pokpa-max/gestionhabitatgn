import React from 'react'
import Select from 'react-select'

const SimpleSelect = ({ options, ...nextProps }) => (
  <Select
    isClearable
    styles={{
      input: (base) => ({
        ...base,
        'input:focus': {
          boxShadow: 'none',
        },
        height: '1.6rem',
      }),
      placeholder: (base) => ({
        ...base,
        fontSize: '14px',
      }),
      control: (base, state) => ({
        ...base,
        border: state.isFocused ? '2px solid #000' : '1px solid #d1d5db',
        borderRadius: '0 rem',
        '&:hover': {
          border: '1px solid #d1d5db',
        },
        boxShadow: 'none',
      }),
    }}
    options={options}
    {...nextProps}
  />
)

export default SimpleSelect

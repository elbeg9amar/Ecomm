import React from 'react'

import './FormInput.scss'

const FormInput = ({handleChanges, label, ...otherProps}) => (
    (
        <div className="group">
            <input 
            className="form-input" 
            onChange={handleChanges}
            {...otherProps}
            />
            {
                label ?
                (<label className={`${otherProps.value ? 'shrink' : ''} form-input-label`}>
                    {label}
                </label>)
                : null
            }
        </div>
    )
)


export default FormInput

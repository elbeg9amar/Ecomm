import React from 'react'
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MenuItem from '../menu-item/MenuItem';
import { selectDirectorySelector} from '../../reducer/directory/directorySelector';

import './Directory.scss';


function Directory({sections,fetchDirectoryStart}) {
    return (
        <div className="directory-menu">
            {sections.map(({title,imageUrl,id,size,linkUrl}) => (
                <MenuItem key={id} title={title} image={imageUrl} id={id} size={size} linkUrl={linkUrl}/>
            ))}
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySelector
});



export default connect(mapStateToProps)(Directory);





import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import Directory from '../../components/direcrtory/Directory.jsx';

import {fetchDirectoryStart} from '../../reducer/directory/directoryAction'
import { HomepageContainer } from './homepagestyled'



function Homepage({fetchDirectoryStart}) {
    // useEffect(()=> {
    //     fetchDirectoryStart()
    // },[fetchDirectoryStart]);
    return (
        <HomepageContainer>
            <Directory/>
        </HomepageContainer>
    )
};

const mapDispatchToProps = dispatch => ({
    fetchDirectoryStart: () => dispatch(fetchDirectoryStart())
})

export default connect(null,mapDispatchToProps)(Homepage);

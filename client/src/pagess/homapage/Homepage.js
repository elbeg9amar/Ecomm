import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {fetchDirectoryStart} from '../../reducer/directory/directoryAction';

import DirectoryPageContainer from '../../components/direcrtory/directory.container';

import { HomepageContainer } from './homepagestyled';



function Homepage({fetchDirectoryStart}) {

    useEffect(()=> {
        fetchDirectoryStart()
    },[fetchDirectoryStart]);

    return (
        <HomepageContainer>
            <DirectoryPageContainer/>
        </HomepageContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    fetchDirectoryStart: () => dispatch(fetchDirectoryStart())
});

export default connect(null, mapDispatchToProps)(Homepage);

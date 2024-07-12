import React from 'react';
import mFn from '../my_function';

function sub4_poster(props) {
    
    const poster = mFn.qsa('.poster-common');

    mFn.addEvt(poster[0],"mouseenter",showPoster)


    return (
        <div>
            
        </div>
    );
}

export default sub4_poster;
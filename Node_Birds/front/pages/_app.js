import "antd/dist/antd.css";
import Head from 'next/head';
import React from 'react';
// import PropTypes from ' prop-types';

const NodeBird = ({ Component }) => {
    return (
        <>
            <Head>
                <meta charSet='utf-8' />
                <title>NodeBird</title>
            </Head>
            <Component />
        </>
    )
}

// NodeBird.PropTypes = {
//     Component: PropTypes.elementType.isRequired,
// }

export default NodeBird;
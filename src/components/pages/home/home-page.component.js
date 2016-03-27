import React from 'react';

//TODO: Add file loader to webpack
export default class HomePage extends React.Component{
    render(){
        return (
            <div className="page_home">
                <a className="page_home-github-link" href="https://github.com/IvanDobrovolsky/online-store-app" target="_blank"><img src="https://camo.githubusercontent.com/652c5b9acfaddf3a9c326fa6bde407b87f7be0f4/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6f72616e67655f6666373630302e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png"/></a>
                <h1 className="page_home-title">online-store-app</h1>
                <p className="page_home-description">This is simple online store of computers implemented with React.js to demonstrate how this library makes our lives easier and the way we create apps more logical and  straightforward.</p>
                <div className="page_home-image">
                    <img src="http://formatjs.io/img/react.svg"/>
                </div>
                <a className="page_home-cta" href="/computers">Get started</a>
            </div>
        )
    }
}
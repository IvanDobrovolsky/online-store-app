import React from 'react';

//TODO Add image loader to webpack

export default class NotFoundPage extends React.Component{
    render(){
        return (
            <div className="page_not-found">
               <h1 className="page_not-found-title">The page you requested is not found!</h1>
               <div className="page_not-found-image">
                   <img src="http://72gpf1za5iq428ekh3r7qjc1.wpengine.netdna-cdn.com/wp-content/uploads/2015/11/error.jpg"/>
                   <p>404</p>
               </div>
               <a href="/" className="page_not-found-cta">Home</a>
            </div>
        )
    }
}
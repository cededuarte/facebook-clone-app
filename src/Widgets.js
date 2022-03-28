import React from 'react'
import './Widgets.css'

function Widgets() {
    return (
    
        <div className="widgets">
            <div className='widget-container'>
                <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Freact%2F&tabs=timeline&width=340&height=700&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId;width=340&amp;height=1500&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId"
                    title="ReactJS Facebook Page"
                    width="340"
                    height="100%"
                    style={{ border: 'none', overflow: 'hidden' }}
                    scrolling="no"
                    frameBorder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                ></iframe>     
                <iframe width="340" height="500" src="https://www.youtube.com/embed/3M2NCcSxKLY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
                > </iframe>
            </div>    
        </div>

    )
}

export default Widgets

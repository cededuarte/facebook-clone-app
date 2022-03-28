import React from 'react'
import Story from './Story'
import './StoryReel.css'

function StoryReel() {
    return (
        <div className="storyReel">
            {/* Story */}
            <Story 
                    image="https://www.dailyleader.com/wp-content/uploads/sites/18/2021/10/Topic-Facebook.jpeg"
                    profileSrc="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS1rDH_nWadT1GXFPomdutqV1PUMA8uXIWS2Js5_fq4pJ1lwG16"
                    title = "Mark Zuckerberg"
            />
            <Story 
                    image="https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png"
                    profileSrc="https://media-exp1.licdn.com/dms/image/C5603AQFKB5mikNj8aA/profile-displayphoto-shrink_200_200/0/1647211098172?e=1652918400&v=beta&t=6a5l7C3MXwvphey5gzBeOTzilV_alNjR-Yl2bYuLbR4"
                    title ="Cedric Eduarte"
            />
            <Story 
                    image="https://images.gulfnews.com/embedded/polopoly_fs/1.1533877!image/1706355436.jpg_gen/derivatives/landscape_422/1706355436.jpg"
                    profileSrc="https://cdn.britannica.com/18/130418-050-19E6DAB2/Manny-Pacquiao-Ricky-Hatton-knockout-victory-Philippines-May-2-2009.jpg"
                    title = "Manny Pacquiao"
            />
            <Story 
                    image="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/philippine-map-cyril-maza.jpg"
                    profileSrc="https://upload.wikimedia.org/wikipedia/commons/3/3e/President_Rodrigo_Duterte.jpg"
                    title="PRRD"
            />
            <Story
                    image = "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201806/Jeff_Bezos_0.jpeg?cg92V26H7cCaWaSphICLybmJF83BUnrr"
                    profileSrc="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSVvdf3mtAr8BQaBqwu2wAFbJD1dH6jtmyAK7hZRRnbFc0yc_pT"
                    title= "Jeff Bezos"
            /> 
        </div>
    )
}

export default StoryReel
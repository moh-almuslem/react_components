import React, { Component } from 'react';
import { Link, Redirect} from 'react-router-dom';
import maternity from "./image/maternity.png"
import newborn from "./image/newborn.png"
import family from "./image/family.png"
import milestone from "./image/milestone.png"
import viewall from "./image/viewall.png"

function PhotosessionScreen() {



   function maternityLink(){
    window.location.href = "https://pixieset.com/collection/?t=maternity";
 }

 function newbornLink(){
    window.location.href = "https://pixieset.com/collection/index/?t=newborn&page=2";
 }
  
 function familyLink(){
    window.location.href = "https://pixieset.com/collection/index/?t=family&page=2";
 }

 function cakesmashLink(){
    window.location.href = "https://pixieset.com/collection/index/?t=cake+smash&page=3";
 }

    return(

        <div className='bg'>
        <div className='container' style={{"margin-top": "5em", "max-width": "75em"}}>
            <br/>
            <img src={viewall} width="1440"/>
            <br/>
            <center><Link to="/book"><button class="button">BOOK YOUR PHOTOSESSION NOW!</button></Link></center>
            <br/>
            <table className="viewall" cellpading="0" cellspacing="0" border-radius="8px" >
                    <tbody>
                        <tr>
                            <td>
                                <h3>MATERNITY PHOTOSHOOT</h3>
                                    <p>Pregnancy is a special journey in a women’s life that is both unique and magical, there is nothing like it in the world, indeed it is a memory that should be cherished forever. As maternity photographers, we’ve come to realize that a woman is at her most beautiful when she is pregnant, we see her body as a flourishing sculpture, the perfect subject for any photographer.</p>
                                <br/>
                                
                               
                            <button onClick= {maternityLink} className="review">find out more</button>
                            </td>
                            <td>
                                <img src={maternity} width={512}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src={newborn} width={512}/>
                            </td>
                            <td>
                                <h3>NEWBORN PHOTOSHOOT</h3>
                                    <p>A cheerful and happy baby has got to be the cutest thing in the entire world. The first few days and months of a baby’s life are full of precious memories which make for the perfect baby portraits.</p>
                            <br/>
                            <button onClick= {newbornLink} className="review">find out more</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h3>FAMILY PHOTO SHOOT</h3>
                                <p>Family photography is all about love, nostalgia and the small details that mean so much. No household is complete without that one family photograph which forever evokes fond memories and transports us back to a special chapter in our lives. We believe every family portrait tells a beautiful story, one that showcases the legacy, love and affection that is present in every family.</p>
                                <button onClick= {familyLink} className="review">find out more</button>
                            </td>
                            <td>
                                <img src={family} width={512}/>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <img src={milestone} width={512}/>
                            </td>
                            <td>
                                <h3>CAKESMASH PHOTOSHOOT</h3>
                                <p>Every awesome mom and dad enjoy taking photos of their babies…after all, we all want to capture those special moments! So let’s take a sneak peek at one of the most important milestones in their life: baby’s first 12 months and their 1st birthday.</p>
                                <br/>
                                <button onClick= {cakesmashLink} className="review">find out more</button>
                            </td>
                        </tr>
                </tbody>
            </table>
        </div>
        <br/>
        </div>
        
    )
}


export default PhotosessionScreen;
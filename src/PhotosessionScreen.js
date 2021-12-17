import { Link } from 'react-router-dom';
import maternity from "./image/maternity.png"
import newborn from "./image/newborn.png"
import family from "./image/family.png"
import milestone from "./image/milestone.png"
import viewall from "./image/viewall.png"

function PhotosessionScreen() {



    return(

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
                                    <p>Text block ready for your content. Text block ready for your content</p>
                                <br/>
                                <Link to="/"><button className="review">find out more</button></Link>
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
                                    <p>Text block ready for your content. Text block ready for your content</p>
                            <br/>
                                <Link to="/"><button className="review">find out more</button></Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h3>FAMILY PHOTO SHOOT</h3>
                                <p>Text block ready for your content. Text block ready for your content</p>
                                <br/><Link to="/"><button className="review">find out more</button></Link>
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
                                <p>Text block ready for your content. Text block ready for your content</p>
                                <br/>
                                <Link to="/"><button className="review">find out more</button></Link>
                            </td>
                        </tr>
                </tbody>
            </table>
        </div>
        
    )
}

export default PhotosessionScreen;
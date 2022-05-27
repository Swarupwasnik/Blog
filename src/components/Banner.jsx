import React,{Component} from 'react'
import Travel from "../Images/travel.jpg";
export class Banner extends Component {
 
 render(){
    return (
    <div className='banner'>
<section className='banner_text'>
    <h2>Welcome to Travel</h2>
    <h3>Some text...</h3>
    <button>Explore News</button>
</section>
<section className='banner-image'>
    <img src={Travel} alt="baner-logo" />
</section>

    </div>
  )
    }
}
export default Banner;

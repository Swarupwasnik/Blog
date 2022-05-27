import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export class Contact extends Component{

    render(){

        return (
            <React.Fragment>
              <Header/>
              <form className="contact">
<section className='input_container'>
<label>First Name</label>
<input type="text" />

</section>


<section className='input_container'>
<label>First Name</label>
<input type="text" />

</section>

<section className='input_container'>
<label>Mobile No</label>
<input type="nunmber" />
</section>
<section className='input_container'>
<label>Mobile No</label>
<input type="nunmber" />
</section>
<section className='input_container'>
<label>Gender</label>
<input type="radio" name='gender' value="Male" />Male
<input type="radio" name='gender' value="Female" />Female

</section>
<section className='input_container'>
<label>Interest</label>
<input type="checkbox" name='interset' value="Cricket" />Cricket
<input type="checkbox" name='Interest' value="Football" />Football
<input type="checkbox" name='Interest' value="other" />Other
</section>
<section className='input_container'>
<button type='submiot'>Submit Contact</button>
</section>
              </form>
              <Footer/>
            </React.Fragment>
        )
    }
  
}
export default Contact;
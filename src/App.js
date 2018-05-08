import React, { Component } from "react";
import "./App.css";
import Scrollchor from 'react-scrollchor';
import {Helmet} from "react-helmet";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Payroll for Dummies</title>
          <link rel="canonical" href="http://mysite.com/example" />
          <meta name="description" content="payroll for dummies, a website explaining different ways for small businesses in Utah to handle payroll, such as employee leasing" />
          <meta name='keywords' content='payroll, payroll for dummies, quote, employee leasing, utah'/>
          <meta name='robots' content='index, follow'/>
        </Helmet>
        <div className="image-container" />
        <div className="image-container__text">Payroll For Dummies
          <div className='three-headings'>
          <Scrollchor className='Scrollchor' to='#in-house' ><span id='cursor'> 
          1) In-House
          </span></Scrollchor>
          <Scrollchor className='Scrollchor' to='#third-party'><span id='cursor'> 
          2) 3rd-Party Processor
          </span></Scrollchor>
          <Scrollchor className='Scrollchor' to='#employee-leasing'><span id='cursor'> 
          3) Employee Leasing
          </span></Scrollchor>
            </div> 
         
        </div>
        <div className="parallax-border" />
        <div className="image-container">
          <div className="image-two" />
          <div className="paragraph-container">
            <p className="image-container__text" id="small-font">
            Processing Payroll has become increasingly complex in today’s world but there are also some tools available to you. This document includes a basic overview of the payroll burden, the requirements of the employer with some solutions to alleviate you from the pain of it all.<br/>
            There are basically 3 ways to process payroll:
            </p>
          </div>
        </div>
        <div className="parallax-border" />
        <div className="image-container">
          <div className="image-five" />
          <div className="paragraph-container">
            <div className="image-container__text" id="small-font">
            <p className='subheading'  id='in-house'>1) In-House:</p>
            The employer or appointed employee keeps track of hours worked, and after the pay period ends (but before pay date) the Gross check is calculated using hrs worked X pay rate.  Then the estimated taxes are calculated, this is based upon an IRS Tax table for wages earned taking into consideration the total deductions claimed by the employee on Form W4.  Depending on the gross amount per check the actual withholding amount could vary, but one must also consider the Ytd wages earned by said employee as there are different Ytd thresholds which affect the withholding in a calendar year.  Certain laws have to be followed, including overtime.
            </div>
          </div>
        </div>
        <div className="parallax-border" />
        <div className="image-container">
          <div className="image-three" />
          <div className="paragraph-container">
            <div className="image-container__text" id="small-font">  
            <p className='subheading' id='third-party'>2) 3rd-Party Processor:</p>
            A common way for small and medium sized companies to process their payroll would be to use a company that specializes in payroll processing.  There are a few national companies in this space as well as numerous smaller processors, including CPAs that often take on this function at the request of their established clients.  You are basically paying for a service here, the cost of which can depend on the number of employees you are paying or the amount of payroll you run.  This relationship is one where they do the paperwork, deduct the withholdings and file the taxes on your behalf under your company’s withholding numbers.  They are acting on your behalf to know how much to withhold as well as be reliable to pay your taxes when do.  You face steep fines for failure to pay on time so it’s important to choose someone reliable who can back up their service.         
            </div>
          </div>
        </div>
        <div className="parallax-border" />
        <div className="image-container">
          <div className="image-four" />
          <div className="paragraph-container">
            <div className="image-container__text last-paragraph" id="small-font">  
            <p className='subheading' id='employee-leasing'>3) Employee Leasing:</p>
            In the state of UT. There is a designation that can be obtained whereby a payroll co. can enter a co-employment relationship (or employee leasing) with you.  They become the employer of record for your employees.  You still manage, hire, fire and determine pay to your employees as you have always done, but on paper the employees are paid by the co-employer under their tax withholding accounts.  For the right companies this has some advantages in that you get to close your withholding accounts and not have that lingering over your head. No risk of late filings or penalties.  They also handle all the paperwork associated with Payroll and tax filings.  Your company still pays the invoice for the total payroll burden for the employees but it’s a simple invoice with one line item to be reconciled in the company’s books.  This can be a great solution for the small and medium sized businesses who need to focus on their core business and simplify the paperwork and administration of payroll.  There can be added benefits included like Workers Comp management, new employee e-hire, Unemployment Insurance claims, Garnishment procedures, participation in large group benefits (dental, vision, 401K etc.).
            </div>
          </div>
        </div>
        <div className="parallax-border" id='last-parallax' />
        <div className="image-container">
          <div className="final-image" />
          <div className="paragraph-container">
            <div className='input-fields image-container__text'                     id='form-heading'>
              Send us a Message to get a free quote
            </div> 
            <form method="POST" className='image-container__text form'
                action="https://formspree.io/jessknapp@gmail.com">
              <input type="email" name="_replyto" placeholder="Your email"             className='input-fields'/>
              <textarea name="message" placeholder="Your message"                   className='input-fields' id='message'></textarea>
              <button type="submit" className=''>Send</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import React from 'react'
import "./Form.css"
const Form = () => {
  return (
    <div>
         <div id="main-container">

<div class="second-container" id="container-1"></div>

<div class="second-container" id="container-2">
    <h1>Questionnaire</h1>
</div>

<div class="second-container" id="container-3">
    <p>Email</p>
    <form action="" id="email">
        <input type="email" id="email" name="email"/>
    </form>
</div>

<div class="second-container" id="container-4">
    <p>Name</p>
    <form action="" id="name">
        <input type="text" id="name" name="name"/>
    </form>
</div>

<div class="second-container" id="container-5">
    <p>Roll No</p>
    <form action="" id="rollno">
        <input type="text" id="rollno" name="rollno"/>
    </form>
</div>

<div class="second-container" id="container-6">
    <p>Group Number</p>
    <select name="group" required>
        <option value="G1">G1</option>
        <option value="G2">G2</option>
        <option value="G3">G3</option>
        <option value="G4">G4</option>
    </select>
</div>

<div class="second-container" id="container-7">
    <div id="container-7-1">
        <p id="container-7-para1">Questions for Questionnaire</p>
    </div>
    <div>
        <p id="container-7-para2">Each Questions carries 1 marks</p>
    </div>
</div>

<div class="second-container" id="container-8">
    <p class="question">Q1- The time taken by a sound wave having frequency 2 kHz and wavelength 35 cm to cover
        the distance of
        1.5 km is </p>
    <div class="option">
        <input type="radio" id="html" name="question-1" value="2.1 s"/>
          <label for="html">2.1 s</label><br/>
        <input type="radio" id="html" name="question-1" value="10 s"/>
          <label for="html">10 s</label><br/>
        <input type="radio" id="html" name="question-1" value="20 s"/>
          <label for="html">20 s</label><br/>
        <input type="radio" id="html" name="question-1" value="8 s"/>
          <label for="html">8 s</label><br/>
    </div>
</div>
<div class="second-container" id="container-9">
    <p class="question">Q2-Soon after rain, when air is moist enough, the speed of sound changes as</p>
    <div class="option">
        <input type="radio" id="html2" name="question-2" value="Slower than in dry air"/>
          <label for="html2">Slower than in dry air</label><br/>
        <input type="radio" id="html2" name="question-2" value="Faster than in dry air"/>
          <label for="html2">Faster than in dry air</label><br/>
        <input type="radio" id="html2" name="question-2" value="Same as in dry air"/>
          <label for="html2">Same as in dry air</label><br/>
        <input type="radio" id="html2" name="question-2" value="None"/>
          <label for="html2">None</label><br/>
    </div>
</div>
<div class="second-container" id="container-10">
    <p class="question">Q3-A BNC Cable is a transmission line that fall under the category of</p>
    <div class="option">
        <input type="radio" id="html" name="question-3" value="Parallel Line"/>
          <label for="html">Parallel Line</label><br/>
        <input type="radio" id="html" name="question-3" value="Co-axial Cable"/>
          <label for="html">Co-axial Cable</label><br/>
        <input type="radio" id="html" name="question-3" value="Planar transmission line"/>
          <label for="html">Planar transmission line</label><br/>
        <input type="radio" id="html" name="question-3" value="None of these"/>
          <label for="html">None of these</label><br/>
    </div>
</div>
<div class="second-container" id="container-11">
    <p class="question">Q4-BNC Cables are used whenever</p>
    <div class="option">
        <input type="radio" name="question-4" value="A dc signal is required to be transferred from part A to part B"/>
          <label>A dc signal is required to be transferred from part A to part B
        </label><br/>

        <input type="radio" name="question-4" value="Transfer of very high frequency (VHF) signal is required"/>
          <label>Transfer of very high frequency (VHF) signal is required</label><br/>

        <input type="radio" name="question-4" value="Radio, television or other radio frequency (RF) signal is required to be transferred"/>
          <label>Radio, television or other radio frequency (RF) signal is required to be transferred
        </label><br/>

        <input type="radio" name="question-4" value="None of these"/>
          <label>None of these</label><br/>
     </div>
</div>

<div class="second-container" id="container-12">
    <p class="question">Q5-In the speed of sound experiment, a student noted the frequency as 2.24 kHz. The
        wavelength was found in two different ways. First one is noting down the single value of 13.7 cm and the
        second one is a mean of three values 13.7 cm, 14.1 cm, 13.4 cm. Which of the following best represents
        the value of the speed of sound calculated in the two ways</p>
    <div class="option">
        <input type="radio" name="question-5" value="306.9 m/s and 307.6 m/s"/>
          <label>306.9 m/s and 307.6 m/s</label><br/>
        <input type="radio" name="question-5" value="307 m/s and 308 m/s"/>
          <label>307 m/s and 308 m/s</label><br/>
        <input type="radio" name="question-5" value="307 m/s in both the cases"/>
          <label>307 m/s in both the cases</label><br/>
        <input type="radio" name="question-5" value="308 m/s in both the cases"/>
          <label>308 m/s in both the cases</label><br/>
    </div>
</div>
 <a href="#"><button class="btn">Submit</button></a>
<footer>This content is neither created nor endorsed by Google. - Terms of service - Privacy Policy
    <a href="https://www.google.com/forms/about/?utm_source=product&utm_medium=forms_logo&utm_campaign=forms">
        <img class="footer-image"
            src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_dark_clr_74x24px.svg" alt=""/>
        <span>Forms</span>
    </a>
</footer>
</div>

    </div>
  )
}

export default Form
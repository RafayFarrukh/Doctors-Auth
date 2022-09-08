import React from 'react'
import axios from "axios";
import "./Form2.css"
const { useState, useEffect } = React;
const data = [{id: 0, label: "Istanbul, TR (AHL)"}, {id: 1, label: "Paris, FR (CDG)"}];
const Form2 = () => {
    const [isOpen, setOpen] = useState(false);
    const [items, setItem] = useState(data);
    const [selectedItem, setSelectedItem] = useState(null);
    
    const toggleDropdown = () => setOpen(!isOpen);
    
    const handleItemClick = (id) => {
      selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        axios
          .post("https://pakdoctorsksa.com/api/Users/SignUp", {
          
          })
          .then(console.log("hii"))
          .catch("error");
      };


  return (
    <>
    <div className="ctrlqFormContentWrapper">
      <div className="ctrlqHeaderMast"></div>
      <div className="ctrlqCenteredContent">
        <div className="ctrlqFormCard">
          <div className="ctrlqAccent"></div>
          <div className="ctrlqFormContent">

        <form onSubmit={handleSubmit}>  

              <div className="row">
                <div className="input-field col s12">
                  <h4 className='text-xl'>SIGN UP Form</h4>
                  <p>All fields are required</p>
                </div>
              </div>
                  
              <p className='mt-9 -mb-4'>Name (as in Passport)</p>

              <div className="row">
                <div className="input-field col s12">
                  <input id="name" name="name" type="text" className="validate" data-error="#e1" required/>
                  <label for="name">Your Name</label>
                  <div id="e1"></div>
                </div>
              </div>


              <div className="row">
                <div className="input-field col s12">
                  <p for="color">Gender</p>
                 
                  <p>
                
                    <input name="color" type="radio" id="color_green" value="Green"/>
                    <label for="color_green">Male</label>
                  </p>
                  <p> 
                    <input name="color" type="radio" id="color_blue" value="Blue"/>
                    <label for="color_blue">Female</label>
                  </p>
                  <div className="input-field">
                    <br/>
                    <div id="e4"></div>
                  </div>
                </div>
              </div>


              <div className="row">
                <div className="input-field col s12">
                  <p for="food_select">QUALIFICATIONS</p>
                  <p>
                    <input type="checkbox" name="food" id="food_asian" data-error="#e7" required/>
                    <label for="food_asian">FCPS</label>
                  </p>
                  <p>
                    <input type="checkbox" name="food" id="food_french"/>
                    <label for="food_french">MCPS</label>
                  </p>
                  <p> 
                    <input type="checkbox" name="food" id="food_japanese"/> 
                    <label for="food_japanese">Fellowship from Royal College of U.K
                    </label> 
                  </p>
                  <p> 
                    <input type="checkbox" name="food" id="food_fjapanese"/> 
                    <label for="food_fjapanese">Fellowship from Royal College of Ireland
                    </label> 
                  </p>
                  <p> 
                    <input type="checkbox" name="food" id="food_uk"/> 
                    <label for="food_uk">Membership from Royal College of U.K
                    </label> 
                  </p>
                  <p> 
                    <input type="checkbox" name="food" id="food_Ireland"/> 
                    <label for="food_Ireland">Membership from Royal College of Ireland
                    </label> 
                  </p>
                  <p> 
                    <input type="checkbox" name="food" id="food_arab"/> 
                    <label for="food_arab">Arab Board
                    </label> 
                  </p>
                  <p> 
                    <input type="checkbox" name="food" id="food_Saudi"/> 
                    <label for="food_Saudi">Saudi Board
                    </label> 
                  </p>
                  <p> 
                    <input type="checkbox" name="food" id="food_American"/> 
                    <label for="food_American">American Board Certification
                    </label> 
                  </p>
                  <p> 
                    <input type="checkbox" name="food" id="food_European"/> 
                    <label for="food_European">European diploma
                    </label> 
                  </p>
                  <p> 
                    <input type="checkbox" name="food" id="food_FCPS"/> 
                    <label for="food_FCPS">FCPS Part-1 (part 2 not yer finished)
                    </label> 
                  </p>
                  <p> 
                    <input type="checkbox" name="food" id="food_Other"/> 
                    <label for="food_Other">Other
                    </label> 
                  </p>
                  <div className="input-field">
                    <br/><div id="e7"></div>
                  </div>
                </div>
              </div>




              <div className="row">
                <div className="input-field col s12">
                  <p for="food_select">SPECIALITY</p>
                  <p>
                    <input type="checkbox" name="food" id="food_ANAES1" data-error="#e7" required/>
                    <label for="food_ANAES1">ANAESTHESIOLOGY</label>
                  </p>
                  <p>
                    <input type="checkbox" name="food" id="food_french1"/>
                    <label for="food_french1">CARDIAC SURGERY</label>
                  </p>
                  <p> 
                    <input type="checkbox" name="food" id="food_japanese1"/> 
                    <label for="food_japanese1">CARDIOLOGY
                    </label> 
                  </p>
                  <p> 
                    <input type="checkbox" name="food" id="food_fjapanese1"/> 
                    <label for="food_fjapanese1">CHEMICAL PATHOLOGY
                    </label> 
                  </p>
                  <p> 
                    <input type="checkbox" name="food" id="food_uk1"/> 
                    <label for="food_uk1">CLINICAL HAEMATOLOGY
                    </label> 
                  </p>
                  <p> 
                    <input type="checkbox" name="food" id="food_Ireland1"/> 
                    <label for="food_Ireland1">COMMUNITY MEDICINE
                    </label> 
                  </p>
                  <p> 
                    <input type="checkbox" name="food" id="food_arab1"/> 
                    <label for="food_arab1">Arab DERMATOLOGY
                    </label> 
                  </p>
                  <p> 
                    <input type="checkbox" name="food" id="food_Saudi1"/> 
                    <label for="food_Saudi1">DIAGNOSTIC RADIOLOGY
                    </label> 
                  </p>
                  <p> 
                    <input type="checkbox" name="food" id="food_American1"/> 
                    <label for="food_American1">EMERGENCY MEDICINE
                    </label> 
                  </p>
                  <p> 
                    <input type="checkbox" name="food" id="food_European1"/> 
                    <label for="food_European1">FAMILY MEDICINE
                    </label> 
                  </p>
                  <p> 
                    <input type="checkbox" name="food" id="food_FCPS1"/> 
                    <label for="food_FCPS1">FORENSIC MEDICINE
                    </label> 
                  </p>
                  <p> 
                    <input type="checkbox" name="food" id="food_Other1"/> 
                    <label for="food_Other1">GASTROENTEROLOGY
                    </label> 
                  </p>
                  <p> 
                    <input type="checkbox" name="food" id="food_Other2"/> 
                    <label for="food_Other2">GENERAL SURGERY
                    </label> 
                  </p>
                  <p> 
                    <input type="checkbox" name="food" id="food_Other3"/> 
                    <label for="food_Other3">HAEMATOLOGY
                    </label> 
                  </p>
                  <p> 
                    <input type="checkbox" name="food" id="food_Other4"/> 
                    <label for="food_Other4">HISTOPATHOLOGY
                    </label> 
                  </p>
                  <p> 
                    <input type="checkbox" name="food" id="food_Other5"/> 
                    <label for="food_Other5">INTERNAL MEDICINE
                    </label> 
                  </p>
                 
                  <p> 
                    <input type="checkbox" name="food" id="food_Other6"/> 
                    <label for="food_Other6">MEDICINE
                    </label> 
                  </p>
                  <p> 
                    <input type="checkbox" name="food" id="food_Other7"/> 
                    <label for="food_Other7">MICROBIOLOGY
                    </label> 
                  </p>
                  <p> 
                    <input type="checkbox" name="food" id="food_Other8"/> 
                    <label for="food_Other8">Medical ONCOLOGY
                    </label> 
                  </p>
                  <p> 
                    <input type="checkbox" name="food" id="food_Other9"/> 
                    <label for="food_Other9">NEPHROLOGY
                    </label> 
                  </p>
                  <p> 
                    <input type="checkbox" name="food" id="food_Other10"/> 
                    <label for="food_Other10">NEUROLOGY
                    </label> 
                  </p>
                  <p> 
                    <input type="checkbox" name="food" id="food_Other11"/> 
                    <label for="food_Other11">NUCLEAR MEDICINE
                    </label> 
                  </p>
                  <p> 
                    <input type="checkbox" name="food" id="food_Other12"/> 
                    <label for="food_Other12">OBSTETRICS & GYNAECOLOGY
                    </label> 
                  </p>
                  <p> 
                    <input type="checkbox" name="food" id="food_Other13"/> 
                    <label for="food_Other13">Operative DENTISRY
                    </label> 
                  </p>
                  <p> 
                    <input type="checkbox" name="food" id="food_Other14"/> 
                    <label for="food_Other14">OPTHALMOLOGY
                    </label> 
                  </p>
                  <p> 
                    <input type="checkbox" name="food" id="food_Other15"/> 
                    <label for="food_Other15">ORAL & MAXILLO- FACIAL SURGERY
                    </label> 
                  </p>
                  <p> 
                    <input type="checkbox" name="food" id="food_Other16"/> 
                    <label for="food_Other16">ORTHODONTICS
                    </label> 
                  </p>
                  <p> 
                    <input type="checkbox" name="food" id="food_Other17"/> 
                    <label for="food_Other17">ORTHOPAEDIC Surgery
                    </label> 
                  </p>
                  <p> 
                    <input type="checkbox" name="food" id="food_Other18"/> 
                    <label for="food_Other18">OTO - RHINO- LOGY (E.N.T)
                    </label> 
                  </p>
                  <p> 
                    <input type="checkbox" name="food" id="food_Other19"/> 
                    <label for="food_Other19">PAEDIATRIC SURGERY
                    </label> 
                  </p>

                  <p> 
                    <input type="checkbox" name="food" id="food_Other20"/> 
                    <label for="food_Other20">PAEDIATRICS
                    </label> 
                  </p>
                  <p> 
                    <input type="checkbox" name="food" id="food_Other21"/> 
                    <label for="food_Other21">PERIODONTOLOGY
                    </label> 
                  </p>
                  <p> 
                    <input type="checkbox" name="food" id="food_Other22"/> 
                    <label for="food_Other22">PLASTIC SURGERY
                    </label> 
                  </p>
                  <p> 
                    <input type="checkbox" name="food" id="food_Other23"/> 
                    <label for="food_Other23">PHYSCHIATRY
                    </label> 
                  </p>
                  <p> 
                    <input type="checkbox" name="food" id="food_Other24"/> 
                    <label for="food_Other24">RADIO THERAPY
                    </label> 
                  </p>
                  <p> 
                    <input type="checkbox" name="food" id="food_Other25"/> 
                    <label for="food_Other25">THORACIC SURGERY
                    </label> 
                  </p>
                  <p> 
                    <input type="checkbox" name="food" id="food_Other26"/> 
                    <label for="food_Other26">UROLOGY
                    </label> 
                  </p>
                  <p> 
                    <input type="checkbox" name="food" id="food_Other27"/> 
                    <label for="food_Other27">CRITICAL CARE MEDICINE
                    </label> 
                  </p>
                  <p> 
                    <input type="checkbox" name="food" id="food_Other28"/> 
                    <label for="food_Other28">PAIN MEDICINE
                    </label> 
                  </p>
                  <p> 
                    <input type="checkbox" name="food" id="food_Other29"/> 
                    <label for="food_Other29">INFECTIOUS DISEASE 
                    </label> 
                  </p>
                  <p> 
                    <input type="checkbox" name="food" id="food_Other30"/> 
                    <label for="food_Other30">INTERVENTIONAL CARDIOLOGY
                    </label> 
                  </p>
                  <p> 
                    <input type="checkbox" name="food" id="food_Other31"/> 
                    <label for="food_Other31">INTERVENTIONAL RADIOLOGY
                    </label> 
                  </p>

                  <p> 
                    <input type="checkbox" name="food" id="food_Other32"/> 
                    <label for="food_Other32">VASCULAR SURGERY
                    </label> 
                  </p>
                  <p> 
                    <input type="checkbox" name="food" id="food_Other33"/> 
                    <label for="food_Other33">ENDOCRINOLOGY
                    </label> 
                  </p>
                  <p> 
                    <input type="checkbox" name="food" id="food_Other34"/> 
                    <label for="food_Other34">Other:
                    </label> 
                  </p>
                 

                  <div className="input-field">
                    <br/><div id="e7"></div>
                  </div>
                </div>
              </div>



              <div className="row">
                <div className="input-field col s12">
                  <p for="color">YEARS OF ALL POST GRADUATION *</p>
                  <p for="color">Fcps....,Mcps....,Arabboard....,etc...</p>
                  <input id="name" name="name" type="text" className="validate" data-error="#e1" required/>
                  {/* <label for="name">Your Answer </label> */}
                  <div id="e1"></div>
                </div>
              </div>
                {/* dropdown */}
                            <p>WORKING PLACE (CITY/REGION)</p>
                                    <div className='dropdown'>
                        <div className='dropdown-header' onClick={toggleDropdown}>
                            {selectedItem ? items.find(item => item.id == selectedItem).label : "Choose"}
                            <i className={`fa fa-chevron-right icon ${isOpen && "open"}`}></i>
                        </div>
                        <div className={`dropdown-body ${isOpen && 'open'}`}>
                            {items.map(item => (
                            <div className="dropdown-item" onClick={e => handleItemClick(e.target.id)} id={item.id}>
                                <span className={`dropdown-item-dot ${item.id == selectedItem && 'selected'}`}>• </span>
                                {item.label}
                            </div>
                            ))}
                        </div>
                        </div>


         
                  


                    <p className='mt-12 -mb-4'>WORKING PLACE HOSPITAL NAME WITH CITY</p>
              <div className="row">
                <div className="input-field col s12">
                  <input id="name" name="name" type="text" className="validate" data-error="#e1" required/>
                  <label for="name">Your Name</label>
                  <div id="e1"></div>
                </div>
              </div>


              <p className='mt-9 -mb-4'>YEAR of Entry in KSA</p>
              <div className="row">
                <div className="input-field col s12">
                  <input id="name" name="name" type="text" className="validate" data-error="#e1" required/>
                  <label for="name">Your Answer</label>
                  <div id="e1"></div>
                </div>
              </div>








              <p className='mt-9 -mb-4'>POST IN HOSPITAL</p>
               
              <div className="row">
                <div className="input-field col s12">
                 
                  <p>
                
                    <input name="color" type="radio" id="color_Consu" value="Green"/>
                    <label for="color_Consu">Consultant/Professor</label>
                  </p>
                  <p> 
                    <input name="color" type="radio" id="color_ Rgistrar" value="Blue"/>
                    <label for="color_ Rgistrar">Senior Rgistrar / Associate Consultant/ A.P</label>
                  </p>
                  <p> 
                    <input name="color" type="radio" id="color_Assiss" value="Blue"/>
                    <label for="color_Assiss">Rgistrar / Assisstant Consultant / Specialist</label>
                  </p>
                  <p> 
                    <input name="color" type="radio" id="color_Resident" value="Blue"/>
                    <label for="color_Resident">Resident</label>
                  </p>
                  <p> 
                    <input name="color" type="radio" id="color_Physician" value="Blue"/>
                    <label for="color_Physician">House Physician / General Practitioner</label>
                  </p>
                  <p> 
                    <input name="color" type="radio" id="color_Other" value="Blue"/>
                    <label for="color_Other">Other: </label>
                  </p>
                  <div className="input-field">
                    <br/>
                    <div id="e4"></div>
                  </div>
                </div>
              </div>


              <p className='mt-9 -mb-4'>POST IN SCFHS</p>
               
               <div className="row">
                 <div className="input-field col s12">
                  
                   <p>
                 
                     <input name="color" type="radio" id="color_Consu1" value="Green"/>
                     <label for="color_Consu1">Consultant</label>
                   </p>
                   <p> 
                     <input name="color" type="radio" id="color_ Rgistrar1" value="Blue"/>
                     <label for="color_ Rgistrar1">Senior Rgistrar</label>
                   </p>
                   <p> 
                     <input name="color" type="radio" id="color_Assiss1" value="Blue"/>
                     <label for="color_Assiss1">Rgistrar</label>
                   </p>
                   <p> 
                     <input name="color" type="radio" id="color_Physician1" value="Blue"/>
                     <label for="color_Physician1">General Practitioner</label>
                   </p>
                   <p> 
                     <input name="color" type="radio" id="color_Resident1" value="Blue"/>
                     <label for="color_Resident1">Resident</label>
                   </p>
                  
                 
                   <div className="input-field">
                     <br/>
                     <div id="e4"></div>
                   </div>
                 </div>
               </div>


           

              <p className='mt-9 -mb-4'>Email Address</p>
               
              <div className="row">
              <div className="input-field col s12">
                  <input id="name" name="name" type="text" className="validate" data-error="#e1" required/>
                  <label for="name">Your Answer</label>
                  <div id="e1"></div>
                </div>
              </div>

              <p className='mt-9 -mb-4'>Mobile Number
              Saudi Local Contact 05.......
              </p>
               
               <div className="row">
               <div className="input-field col s12">
                   <input id="name" name="name" type="text" className="validate" data-error="#e1" required/>
                   <label for="name">Your Answer</label>
                   <div id="e1"></div>
                 </div>
               </div>
              

              
              <div className="row">
                <div className="input-field col m6 s12">
                  <button type="submit" className="bg-green-400 hover:bg-blue-700 text-white font-bold py-4 px-3 rounded">Submit</button>
                </div>
              </div>

            </form>

          </div>
        </div>
      </div>
    </div>

    <div className="fixed-action-btn" >
      <a className="btn-floating btn-large red" href="http://www.labnol.org/" target="_blank" title="YouTube Uploader Support">
        <i className="large material-icons">live_help</i>
      </a>
    </div>
    </>
  )
}

export default Form2
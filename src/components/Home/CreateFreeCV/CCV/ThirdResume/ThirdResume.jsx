import React, {forwardRef} from "react";
import DefAvatar from "../../../../../img/user-bg.png"

const ThirdResume=forwardRef((props,ref)=>{
    const info=props.info;
    const photo={
        backgroundImage:info.photo?`url(${info.photo})`:""
    }
    console.log(info);
    return(
        <div className="resume-main-container" ref={ref}>
            <div className="cv-top-side">

            </div>
            <div className="cv-avatar-name-container">
                {photo.backgroundImage? <div className="cv-avatar" style={photo}>
                </div>:""}
               
                <div className="name-container" style={!photo.backgroundImage?{color:"#fff"}:{}}>
                    {info.contact.name?`${info.contact.name} ${info.contact.surname}`:"Name Surname"}
                </div>
                <div className="prof-container">
                {info.contact.profession?`${info.contact.profession}`:
                "Profession"}
                </div>
            </div>
            <div className="cv-main-info-container">
                <div className="main-info-table">
                <div className="main-info-row">
                    <div className="main-info-cell left-cell">
                        <div className="profile-container cv-info-box">
                            <div className="cv-info-title">
                                PROFILE
                            </div>
                            <div className="cv-info-profile-text">
                                {info.contact.objective?info.contact.objective
                                :`I am a software developer with robust problem-solving skills 
                                and proven experience in creating and designing software in a 
                                test-driven environment.`
                            }
                           
                            </div>

                        </div>
                      
                    </div>
                    <div className="main-info-cell right-cell">
                    <div className="career-container cv-info-box">
                            <div className="cv-info-title">
                            HOW TO REACH ME
                            </div>
                            <div className="cv-info-contacts">
                            <div className="contact-info-row email-row">
                                <div className="info-icon"></div>
                            {info.contact.mail?info.contact.mail:"example@gmail.com"}
                            </div>
                            
                            <div className="contact-info-row adress-row">
                            <div className="info-icon"></div>
                            {info.contact.adress?info.contact.adress:"Armenia, Yerevan, Avetisyan str."}
                            </div>
                            <div className="contact-info-row phone-row">
                            <div className="info-icon"></div>
                            {info.contact.phone?info.contact.phone:"+37488888888"}
                            </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="main-info-row">
                    <div className="main-info-cell left-cell">
                        <div className="profile-container cv-info-box">
                            <div className="cv-info-title">
                                SKILLS
                            </div>
                          <div className="skills-langs-container">
                            {
                            info.skills.length?info.skills.map((item,index)=>{
                                for(let key in item){
                                    return(
                                        <div className="skill-lang-row" key={index}>
                                            <div className="skill-lang-name">
                                            {key}
                                            </div>
                                            <div className="skill-lang-lvl">
                                                <div className="skill-lang-lvl-count"
                                                style={{width:`${item[key]}%`}}>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    )
                                }
                            }):""
                            }
                              <div className="skill-lang-row">
                                 
                              </div>
                          </div>

                        </div>
                      
                    </div>
                    <div className="main-info-cell right-cell">
                    <div className="career-container cv-info-box">
                            <div className="cv-info-title">
                            LANGUAGES
                            </div>
                            <div className="skills-langs-container">
                            {
                            info.languages.length?info.languages.map((item,index)=>{
                                for(let key in item){
                                    return(
                                        <div className="skill-lang-row" key={index}>
                                            <div className="skill-lang-name">
                                            {key}
                                            </div>
                                            <div className="skill-lang-lvl">
                                                <div className="skill-lang-lvl-count"
                                                style={{width:`${item[key]}%`}}>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    )
                                }
                            }):""
                            }
                              <div className="skill-lang-row">
                                 
                              </div>
                          </div>

                        </div>
                    </div>
                </div>
                <div className="main-info-row">
                    <div className="main-info-cell left-cell">
                        <div className="profile-container cv-info-box">
                            <div className="cv-info-title">
                            EDUCATION
                            </div>
                                <div className="edu-exp-container">
                                    {info.education.length?info.education.map((item,index)=>{
                                        return(
                                            <div className="edu-exp-row">
                                                <div className="edu-exp-prof-name">
                                                    {item.eduProf}
                                                </div>
                                                <div className="edu-exp-place-name">
                                                    {item.eduPlace}
                                                </div>
                                                <div className="edu-exp-timing">
                                                    {item.eduStart} - {item.eduEnd}
                                                </div>
                                            </div>
                                        )
                                    }):""}
                                   
                                </div>
                        </div>
                      
                    </div>
                    <div className="main-info-cell right-cell">
                    <div className="career-container cv-info-box">
                            <div className="cv-info-title">
                            CAREER SUMMARY
                            </div>
                            <div className="edu-exp-container">
                                    {info.experiance.length?info.experiance.map((item,index)=>{
                                        return(
                                            <div className="edu-exp-row">
                                                <div className="edu-exp-prof-name">
                                                    {item.expProf}
                                                </div>
                                                <div className="edu-exp-place-name">
                                                    {item.expPlace}
                                                </div>
                                                <div className="edu-exp-timing">
                                                    {item.expStart} - {item.expEnd}
                                                </div>

                                                {item.expDescription?
                                                <div className="exp-description">{item.expDescription}</div>:""}
                                            </div>
                                        )
                                    }):""}
                                   
                                </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>


        </div>
    )


})

export default ThirdResume;

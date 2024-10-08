import React from 'react';
import { resumeData } from './ResumeData';
import "../Styles/Resume.css";
import { useScrollContext } from '../Context/ScrollContext';

function Resume() {
  const { resumeRef } = useScrollContext();

  return (
    <div className='resume-section' ref={resumeRef}>
      <div className='resume-header'>Know Me Better</div>

      <div className='resume-main'>
        <div className='resume-item'>
          <div className='resume-item-heading'>Skills</div>
          <div className='resume-item-details'>
            {resumeData[0].map(({ title, details }, index) => (
              <div className='resume-item-individual' key={index}>
                <div className='skill-title'>
                  <p className='title'>{title}</p>
                </div>
                <div className='skill-details'>
                  <ol className='skill-set'>
                    {details.map((item, id) => (
                      <li key={id}>{item}</li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='resume-item'>
          <div className='resume-item-heading'>Experience</div>
          <div className='resume-item-details'>
            {resumeData[1].map(({ period, title, company, details }, index) => (
              <div className='resume-item-individual' key={index}>
                <div className='timeline'>
                  <p className='period'>{period}</p>
                  <p className='title'>{title}</p>
                </div>
                <div className='timeline-details'>
                  <p className='org'>{company}</p>
                  <ol className='org-details'>
                    {details.map((item, id) => (
                      <li key={id}>{item}</li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='resume-item'>
          <div className='resume-item-heading'>Education</div>
          <div className='resume-item-details'>
            {resumeData[2].map(({ period, title, institution, details }, index) => (
              <div className='resume-item-individual' key={index}>
                <div className='timeline'>
                  <p className='period'>{period}</p>
                  <p className='title'>{title}</p>
                </div>
                <div className='timeline-details'>
                  <p className='org'>{institution}</p>
                  <p className='org-details'>{details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='resume-item'>
          <div className='resume-item-heading'>Certifications</div>
          <div className='resume-item-details'>
            {resumeData[3].map(({ title, provider }, index) => (
              <div className='resume-item-individual' key={index}>
                <div className='timeline-certification'></div>
                <div className='timeline-details'>
                  <p className='certifications'>{title}</p>
                  <p className='org-details'>{provider}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='resume-button' onClick={() => { window.open("https://hashimresume.netlify.app/"); }}>
          Download/View CV
        </div>
      </div>
    </div>
  );
}

export default Resume;

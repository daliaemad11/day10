import { useEffect, useState } from 'react'
import Jobitems from '../Jobitems/Jobitems'
import photosnap from '../../assets/images/photosnap.svg'
import manage from '../../assets/images/manage.svg'
import account from '../../../public/images/account.svg'
import myhome from '../../assets/images/myhome.svg'
import faceit from '../../assets/images/faceit.svg'
import loop from '../../assets/images/loop-studios.svg'
import shortly from '../../assets/images/shortly.svg'
import insure from '../../assets/images/insure.svg'
import eyecam from '../../assets/images/eyecam-co.svg'
import airfilter from '../../assets/images/the-air-filter-company.svg'




import './Jobswrapper.css'
function Jobswrapper(){
    const[job,setjob]=useState([
        {
            "id": 1,
            "company": "Photosnap",
            "logo": photosnap,
            "new": true,
            "featured": true,
            "position": "Senior Frontend Developer",
            "role": "Frontend",
            "level": "Senior",
            "postedAt": "1d ago",
            "contract": "Full Time",
            "location": "USA Only",
            "languages": ["HTML", "CSS", "JavaScript"],
            "tools": []
          },
          {
            "id": 2,
            "company": "Manage",
            "logo":manage,
            "new": true,
            "featured": true,
            "position": "Fullstack Developer",
            "role": "Fullstack",
            "level": "Midweight",
            "postedAt": "1d ago",
            "contract": "Part Time",
            "location": "Remote",
            "languages": ["Python"],
            "tools": ["React"]
          },
          {
            "id": 3,
            "company": "Account",
            "logo": account,
            "new": true,
            "featured": false,
            "position": "Junior Frontend Developer",
            "role": "Frontend",
            "level": "Junior",
            "postedAt": "2d ago",
            "contract": "Part Time",
            "location": "USA Only",
            "languages": ["JavaScript"],
            "tools": ["React", "Sass"]
          },
          {
            "id": 4,
            "company": "MyHome",
            "logo": myhome,
            "new": false,
            "featured": false,
            "position": "Junior Frontend Developer",
            "role": "Frontend",
            "level": "Junior",
            "postedAt": "5d ago",
            "contract": "Contract",
            "location": "USA Only",
            "languages": ["CSS", "JavaScript"],
            "tools": []
          },
          {
            "id": 5,
            "company": "Loop Studios",
            "logo": loop,
            "new": false,
            "featured": false,
            "position": "Software Engineer",
            "role": "Fullstack",
            "level": "Midweight",
            "postedAt": "1w ago",
            "contract": "Full Time",
            "location": "Worldwide",
            "languages": ["JavaScript", "Ruby"],
            "tools": ["Sass"]
          },
          {
            "id": 6,
            "company": "FaceIt",
            "logo": faceit,
            "new": false,
            "featured": false,
            "position": "Junior Backend Developer",
            "role": "Backend",
            "level": "Junior",
            "postedAt": "2w ago",
            "contract": "Full Time",
            "location": "UK Only",
            "languages": ["Ruby"],
            "tools": ["RoR"]
          },
          {
            "id": 7,
            "company": "Shortly",
            "logo": shortly,
            "new": false,
            "featured": false,
            "position": "Junior Developer",
            "role": "Frontend",
            "level": "Junior",
            "postedAt": "2w ago",
            "contract": "Full Time",
            "location": "Worldwide",
            "languages": ["HTML", "JavaScript"],
            "tools": ["Sass"]
          },
          {
            "id": 8,
            "company": "Insure",
            "logo": insure,
            "new": false,
            "featured": false,
            "position": "Junior Frontend Developer",
            "role": "Frontend",
            "level": "Junior",
            "postedAt": "2w ago",
            "contract": "Full Time",
            "location": "USA Only",
            "languages": ["JavaScript"],
            "tools": ["Vue", "Sass"]
          },
          {
            "id": 9,
            "company": "Eyecam Co.",
            "logo": eyecam,
            "new": false,
            "featured": false,
            "position": "Full Stack Engineer",
            "role": "Fullstack",
            "level": "Midweight",
            "postedAt": "3w ago",
            "contract": "Full Time",
            "location": "Worldwide",
            "languages": ["JavaScript", "Python"],
            "tools": ["Django"]
          },
          {
            "id": 10,
            "company": "The Air Filter Company",
            "logo": airfilter,
            "new": false,
            "featured": false,
            "position": "Front-end Dev",
            "role": "Frontend",
            "level": "Junior",
            "postedAt": "1mo ago",
            "contract": "Part Time",
            "location": "Worldwide",
            "languages": ["JavaScript"],
            "tools": ["React", "Sass"]
          }
    ])
    // useEffect(() => {
    //     function calljobs(){
    //         fetch('http://localhost:3000/jobs')
    //         .then((response)=>response.json())
    //         .then((finalresult)=>setjob(finalresult))
    //     }
    //     calljobs()
    // },[])
   
   
return(
    <>
    <div id='jobs'>
        {job.map((eachjob)=>{
            return(
            <Jobitems key={eachjob.id} eachjob={eachjob}></Jobitems>
            )
        })}
        

    </div>
    </>
)
}
export default Jobswrapper
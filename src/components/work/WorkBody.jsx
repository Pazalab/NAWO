import { HiArrowLongRight } from "react-icons/hi2"
import { projects } from "../../data/projects"
import { useNavigate } from "react-router-dom"
import { CgSearch } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const WorkBody = () => {
    const navigate = useNavigate();
    const [ sanitizedProjects, setSanitizedProjects ] = useState(projects)
    const [ memberActive, setMemberActive ] = useState(false);
    const [ memberState, setMemberState ] = useState("All")
    const [ yearActive, setYearActive ] = useState(false);
    const [ yearState, setYearState ] = useState("All");
    const [ countryActive, setCountryActive ] = useState(false);
    const [ countryState, setCountryState ] = useState("All")
    const names = projects.map(item => item.name)
    const years = projects.map(item =>item.project_year).reduce((acc, curr) => {
             if(!acc.includes(curr)){
                    acc.push(curr)
             }
             return acc
    }, []);
    const countries = projects.map(item => item.country).reduce((acc, curr) => {
           if(!acc.includes(curr)){
                 acc.push(curr)
           }
           return acc
    }, [])
   
    const handleMemberChange = (val) => {
           setMemberState(val);
           setMemberActive(false)
           setYearActive(false);
           setYearState("All")
           setCountryActive(false)
           setCountryState("All")
           if(val == "All"){
                 setSanitizedProjects(projects)
           }else{
                 const memberResults = projects.filter(item => item.name === val);
                 setSanitizedProjects(memberResults)
           }
     
    }

    const handleYearChange = (val) => {
         setYearState(val);
         setYearActive(false)
         setMemberActive(false);
         setMemberState("All");
         setCountryActive(false);
         setCountryState("All")
         if(val == "All"){
               setSanitizedProjects(projects)
         }else{
              const yearResults = projects.filter(item => item.project_year === val);
              setSanitizedProjects(yearResults)
         }
    }
    const handleCountryChange = (val) => {
          setCountryState(val);
          setCountryActive(false);
          setYearActive(false);
          setYearState("All")
          setMemberActive(false)
          setMemberState("All")
          if(val == "All"){
               setSanitizedProjects(projects)
          }else{
              const countryResults = projects.filter(item => item.country === val);
              setSanitizedProjects(countryResults)
          }
    }



    //Search Functionality
    const handleSearch = (val) => {
           const search_results = projects.filter(item => item.title.toLowerCase().includes(val.toString().toLowerCase()));
           setCountryActive(false);
           setCountryState("All")
           setMemberActive(false);
           setMemberState("All")
           setYearActive(false);
           setYearState("All")
           if(val == ""){
                setSanitizedProjects(projects)
           }else{
               setSanitizedProjects(search_results);
           }
    }

    const handleMemberStatusBar = () => {
           setMemberActive(!memberActive)
           setCountryActive(false)
           setYearActive(false)
    }
    const handleYearStatusBar = () => {
          setYearActive(!yearActive);
          setCountryActive(false);
          setMemberActive(false)
    }
    const handleCountryStatusBar = () => {
          setCountryActive(!countryActive)
          setMemberActive(false);
          setYearActive(false)
    }
  return (
    <div className="work-body">
              <div className="inner-row">
                        <div className="work-body-filtration">
                                   <div className="search-area">
                                            <span><CgSearch /></span>
                                            <input type="text" placeholder="Search Project Title" onChange={(e) => handleSearch(e.target.value)} />
                                   </div>
                                   <div className="filters-wrapper">
                                             <div className="filter-by-member">
                                                        <label htmlFor="filter-member">Filter by Member</label>
                                                        <div className="active-choice" onClick={handleMemberStatusBar}>{memberState}<span><IoIosArrowDown /></span></div>
                                                        <div className={ memberActive ? "filter-choices active" : "filter-choices"}>
                                                                   <ul>
                                                                              <li onClick={() => handleMemberChange("All")}>All</li>
                                                                               { names.map(item => <li key={item} onClick={() => handleMemberChange(item)}>{item}</li>)}
                                                                   </ul>
                                                        </div>
                                             </div>
                                             <div className="filter-by-year">
                                                        <label htmlFor="filter-member">Filter by Year</label>
                                                        <div className="active-choice" onClick={handleYearStatusBar}>{yearState}<span><IoIosArrowDown /></span></div>
                                                        <div className={ yearActive ? "filter-choices active" : "filter-choices"}>
                                                                   <ul>
                                                                              <li onClick={() => handleYearChange("All")}>All</li>
                                                                               { years.map(item => <li key={item} onClick={() => handleYearChange(item)}>{item}</li>)}
                                                                   </ul>
                                                        </div>
                                             </div>
                                             <div className="filter-by-year">
                                                        <label htmlFor="filter-member">Filter by Country</label>
                                                        <div className="active-choice" onClick={handleCountryStatusBar}>{countryState}<span><IoIosArrowDown /></span></div>
                                                        <div className={ countryActive ? "filter-choices active" : "filter-choices"}>
                                                                   <ul>
                                                                              <li onClick={() => handleCountryChange("All")}>All</li>
                                                                               { countries.map(item => <li key={item} onClick={() => handleCountryChange(item)}>{item}</li>)}
                                                                   </ul>
                                                        </div>
                                             </div>
                                   </div>
                        </div>
                        { sanitizedProjects.length > 0 ? 
                               <div className="work-body-content">
                                          { 
                                            sanitizedProjects.map(item => 
                                                    <div className="single-project-moja" key={item.id} onClick={() => navigate(item.link)}>
                                                          <div className="single-project-image">
                                                                     <img src={item.coverphoto} alt="" />
                                                                     <p>{item.date}</p>
                                                                     <span><HiArrowLongRight /></span>
                                                          </div>
                                                          <div className="project-texts">
                                                                     <h3>{item.title}</h3>
                                                                     <h4>Location: <span>{item.location}</span></h4>
                                                          </div>
                                                     </div>
                                            )
                                    }
                               </div>
                               :
                               <p className="caution">No projects yet with such a title. Please recheck your search input</p>
                        }
                    
              </div>
    </div>
  )
}

export default WorkBody
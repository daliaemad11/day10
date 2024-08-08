import './Jobitems.css'
function Jobitems({eachjob}){
const compinearray=[...eachjob.languages,...eachjob.tools]
console.log(compinearray)   
return(
        <>
        <div id='alljobs'>
        <div className='jobitems' style={eachjob.new==true?{borderLeft:"5px solid rgb(1, 140, 128)"}:null}>
            <img src={eachjob.logo} alt="" />
            <div id='details'>
                <div id='jobfeature'>
                    <label id='companyname'>{eachjob.company}</label>
                    {eachjob.new==true? <label id='new'>new</label>:null}
                    {eachjob.featured==true?<label id='feature'>featured</label>:null}
                </div>
                <p id='position'>{eachjob.position}</p>
                <div id='time'>
                    <label>{eachjob.postedAt}</label>
                    <label>{eachjob.contract}</label>
                    <label>{eachjob.location}</label>
                </div>
            </div>
            <div id='buttons'>
                {compinearray.map((item)=>{
                    return(    
                    <button>{item}</button>
                    )
                })}
               
            </div>
        </div>
        </div>
        </>
    )
}
export default Jobitems




export default function IconSkill({icon}){

   
    return(
        <div className="container-skill">


    <div className="innerCircle" style={{backgroundImage:`url(${icon})`}}>  
  </div>
    <div className="outerCircle" >
  <span ></span>
  <span></span>
  <span></span>
  <span></span>
        </div>
</div>
    )
}
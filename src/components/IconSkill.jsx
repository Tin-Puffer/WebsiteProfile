



export default function IconSkill({icon}){

   
    return(
        <div className="container-skill">


    <div class="innerCircle" style={{backgroundImage:`url(${icon})`}}>  
  </div>
    <div class="outerCircle" >
  <span ></span>
  <span></span>
  <span></span>
  <span></span>
        </div>
</div>
    )
}
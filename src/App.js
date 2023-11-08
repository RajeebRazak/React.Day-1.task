 import './App.css';
 import Cards from './card.jsx'
 
 function App() {
  
  const PlanDetails = [
     { 
       planName:"free" ,
       price:"0" ,
       features :[
        {
           name :"Single User",
           enable : true 
        },
        {
           name :"5GB Storage" ,
           enable : true 
        },
        {
           name :"Unlimited Public Project" ,
           enable : true 
        },
        {
           name :"Community Acess" ,
           enable : true 
        },
        {
           name :"Unlimmited Private Projects" ,
           enable : false
        },
        {
           name :"Dedicated Phone Support" ,
           enable : false
        },
        { 
           name :"Free Subdomain" ,
           enable : false
        },
        {
          name :"Monthly Status Reports" ,
          enable : false
       },
       ]
       
     },
     {
      planName:"Plus" ,
      price:"9" ,
      features :[
        {
           name :"5 User" ,
           enable : true 
        },
        {
           name :"5GB Storage" ,
           enable : true 
        },
        {
           name :"Unlimited Public Project" ,
           enable : true 
        },
        {
           name :"Community Acess" ,
           enable : true 
        },
        {
           name :"Unlimmited Private Projects" ,
           enable : true 
        },
        {
           name :"Dedicated Phone Support" ,
           enable : true 
        },
        {
           name :"Free Subdomain" ,
           enable : true 
        },
        {
          name :"Monthly Status Reports" ,
          enable : false
       },
       ]
     },
     {
      planName:"Pro" ,
      price:"49" ,
      features :[
        {
           name :"Unlimited User" ,
           enable : true 
        },
        {
           name :"5GB Storage" ,
           enable : true 
        },
        {
           name :"Unlimited Public Project" ,
           enable : true 
        },
        {
           name :"Community Acess" ,
           enable : true 
        },
        {
           name :"Unlimmited Private Projects" ,
           enable : true 
        },
        {
           name :"Dedicated Phone Support" ,
           enable : true 
        },
        {
           name :"Free Subdomain" ,
           enable : true 
        },
        {
          name :"Monthly Status Reports" ,
          enable : true 
       },
       ]
     }
  ];
return (
    
    <section className="pricing py-5">
     <div className="container">
     <div className="row">
      {

        PlanDetails.map((detail) => {
           return <Cards details={detail}></Cards>
        })
      }



      
  
    </div>
  </div>
  </section>





  );
}

export default App;

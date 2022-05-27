class Orc{
    id;
    name;
    attack;
    health;
    weapon;
    icon;
    constructor(id, name){
        this.id=id;
        this.name=name;
        this.weapon=function(){
            if(this.name==="General Bolg" || this.name==="Azog"){
                this.weapon=new OrcWeapon("mace")
            } else{
                this.weapon=new OrcWeapon("sword")
            }
        }
        this.weapon();
        this.attack=this.weapon.damage;
        this.health=this.health=Math.floor(Math.random()*(500-300)+300);
        this.icon=function() {
            if(this.name==="Azog"){
                this.icon=`<img src="img/orcs/azog.png" alt="" />`
            }else if(this.name==="General Bolg"){
                this.icon=`<img src="img/orcs/general-bolg.png" alt="" />`
            } else{
                let rand=Math.floor(Math.random()*(6-1)+1);
                this.icon=`<img src="img/orcs/orc-${rand}.png" alt="" />`
            }
        }
        this.icon();
    }
    displayInfo(orc){
        let content=`<div class="row">
        <div class="hobbit col-6 ">
         ${orc.icon}
        </div>
        <div class="col-6">
          <h2>Name: ${orc.name}</h2>
          <h2>Attack: ${orc.attack}</h2>
          <h2>Health: ${orc.health}</h2>
          <h2>Weapon: ${orc.weapon.name}</h2>
        
        </div>
        </div>` ;
        
        orcInfo.innerHTML=content;
        }
        static displayOrcs(orcs){
            orcs.forEach(orc => {
                let divOrc=document.createElement("div");
                divOrc.setAttribute("data-orc-id",`${orc.id}`)
                divOrc.classList.add("orc");
                divOrc.classList.add("m-1");
                divOrc.innerHTML=orc.icon;
                divOrc.addEventListener("mouseenter",()=>{
                    orc.displayInfo(orc);
                })
                divOrcsArmy.append(divOrc)
              
                
            });
            }
}

let orcsArmy=[];
let orcsNames=["Azog", "General Bolg","Orc1", "Orc2", "Orc3","Orc4"]
createOrcs(orcsNames);
function createOrcs(orcsNames){


    orcsNames.forEach(function(name, index){
      orcsArmy.push(new Orc(index,name));

    } );
}


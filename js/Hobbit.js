class Hobbit{
id;
name;
attack;
health;
weapon;
icon;
constructor(id,name){
this.id=id;
this.name=name;
this.weapon=function(){
    if(this.name==="Gandalf"){
        this.weapon=new HobbitWeapon("magic");
    }else if(this.name==="Gloin"){
        this.weapon=new HobbitWeapon("axe");
    } else{
        this.weapon=new HobbitWeapon("sword");
    }
}
this.weapon();
this.attack=this.weapon.damage;
this.health=Math.floor(Math.random()*(500-300)+300);

this.icon= function(){
    if(this.name==="Gandalf"){
        this.icon=`<img src="img/hobbits/gandalf.png" alt="" />`
    }else if(this.name==="Bilbo"){
        this.icon=`<img src="img/hobbits/bilbo.png" alt="" />`
    } else if(this.name==="Thorin"){
        this.icon=`<img src="img/hobbits/thorin.png" alt="" />`
       
    }else if(this.name==="Gloin"){
        this.icon=`<img src="img/hobbits/gloin.png" alt="" />`
        
    }else if(this.name==="Dwalin"){
        this.icon=`<img src="img/hobbits/dwalin.png" alt="" />`
    }else{
        this.icon=`<img src="img/hobbits/balin.png" alt="" />`
    }
}
this.icon();

}

displayInfo(hobbit){
let content=`<div class="row">
<div class="hobbit col-6 ">
 ${hobbit.icon}
</div>
<div class="col-6">
  <h2>Name: ${hobbit.name}</h2>
  <h2>Attack: ${hobbit.attack}</h2>
  <h2>Health: ${hobbit.health}</h2>
  <h2>Weapon: ${hobbit.weapon.name}</h2>

</div>
</div>` ;

hobbitInfo.innerHTML=content;
}

static displayHobbits(hobbits){
    hobbits.forEach(hobbit => {
        let divHobbit=document.createElement("div");
        divHobbit.setAttribute("data-hobbit-id",`${hobbit.id}`)
        divHobbit.classList.add("hobbit");
        divHobbit.classList.add("m-1");
        divHobbit.innerHTML=hobbit.icon;
        divHobbit.addEventListener("mouseenter",()=>{
            hobbit.displayInfo(hobbit);
        })
        divHobbitsArmy.append(divHobbit)
      
        
    });
    }


}

let hobbitsArmy=[];
let hobbitsNames=["Gandalf", "Thorin","Bilbo", "Dwalin", "Gloin", "Balin"]
createHobbits(hobbitsNames);
function createHobbits(hobbitsNames){


    hobbitsNames.forEach(function(name, index){
      hobbitsArmy.push(new Hobbit(index,name));

    } );
}





class HobbitWeapon{
    name;
    damage;
    constructor(name){

        this.name=name;
        this.damage=function(){
            if(this.name==="sword"){
                this.damage=80;
            
            } else if(this.name==="magic"){
                this.damage=120;
            }else if(this.name==="axe"){
                this.damage=110;
            }
        }
        this.damage();
    }
}



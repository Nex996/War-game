class OrcWeapon{
    name;
    damage;
    constructor(name){

        this.name=name;
        this.damage=function(){
            if(this.name==="sword"){
                this.damage=80;
            
            } else if(this.name==="mace"){
                this.damage=115;
            }
        }
        this.damage();
    }
}

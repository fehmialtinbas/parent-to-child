class Person{
    constructor(name,hairColor,activity){
        this.name = name
        this.hairColor = hairColor
        this.activity = activity
    }
    getActivity(){
    }
}

class Child extends Person{
    constructor(name,hairColor,activity){
        super(name,hairColor,activity)
    }
    getActivity(){
        return this.activity
    }
}


class Father extends Person{
    constructor(name,hairColor){
        super(name,hairColor)
        this.treeMembers = []
    }
    addMember(Person){
        this.treeMembers.push(Person)
    }

    removeMember(Person){
       for(var i=0; i<this.treeMembers.length; i++){
           if(this.treeMembers[i] == Person){
               this.treeMembers.splice(i,1)
           }
       }
       return this.treeMembers
    }

    getActivity(){
         for(var i=0; i<this.treeMembers.length; i++){
            console.log(this.treeMembers[i].getActivity())
        }
    }
 
    showTeam(){
        for(var i=0; i<this.treeMembers.length; i++){
            console.log(this.treeMembers[i].name)
        }
    }
}

const childOne = new Child("Ali","White Hair","60%")
const childTwo = new Child("Ata","Brown-haired", "50%")
const teamLead = new Father("Zeynep", "Red Hair","90%")
teamLead.addMember(childOne)
teamLead.addMember(childTwo)
console.log("Family members list:")
teamLead.showTeam()
console.log("Get family members activity:")
teamLead.getActivity()
console.log("Removing Rachel from family:")
teamLead.removeMember(childOne)
console.log("Updated family members list:")
teamLead.showTeam()
const childTree = new Child("Gül", "Blond Hair", "80%")
console.log("Get personal activity:")
console.log(childTree.getActivity()) 

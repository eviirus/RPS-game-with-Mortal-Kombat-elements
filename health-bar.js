class HealthBar{
    constructor(maxHealth){
        this.maxHealth=maxHealth;
        this.healthPlayer=maxHealth;
        this.healthComputer=maxHealth;
        this.healthBarElementPlayer=document.getElementById("playerHealth");
        this.healthBarElementComputer=document.getElementById("computerHealth");
        this.containerWidth=this.healthBarElementPlayer.parentElement.clientWidth;  
    }
    
    showPlayer(){
        this.healthBarElementPlayer.style.width = (this.healthPlayer / this.maxHealth) * this.containerWidth + "px";
    }
    
    showComputer(){
        this.healthBarElementComputer.style.width = (this.healthComputer / this.maxHealth) * this.containerWidth + "px";
    }

    updateHealthPlayer(damage){
        this.healthPlayer -= damage;

        if (this.healthPlayer < 0) {
            this.healthPlayer = 0;
            this.emptyPlayer();
        }

        this.showPlayer();
    }

    updateHealthComputer(damage){
        this.healthComputer -= damage;

        if (this.healthComputer < 0) {
            this.healthComputer = 0;
            this.emptyComputer();
        }

        this.showComputer();
    }

    resetHealthPlayer(){
        this.healthPlayer=this.maxHealth;
        this.showPlayer();
    }

    resetHealthComputer(){
        this.healthComputer=this.maxHealth;
        this.showComputer();
    }

    emptyPlayer(){
        return this.healthPlayer<=0;
    }

    emptyComputer(){
        return this.healthComputer<=0;
    }

    HealthComputer(){
        return this.healthComputer;
    }

    HealthPlayer(){
        return this.healthPlayer;
    }
}
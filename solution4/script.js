var N=new Array();
N[0]="Yaakov";
N[1]="John";
N[2]="Jen";
N[3]="jason";
N[4]="paul";
N[5]="frank";
N[6]="larry";
N[7]="paula";
N[8]="laura";
N[9]="jim";


for (var i = 0; i < N.length; i++) {
	if(N[i].charAt(0)==='J'|| N[i].charAt(0)==='j'){
        console.log("Goodbye "+ N[i])
	}
	else{
		console.log("Hello "+ N[i])
	}
}
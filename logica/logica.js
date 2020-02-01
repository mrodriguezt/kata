function combinarPociones(pociones){
	var ataques = [];	
	var porcentajePociones = [3,5,10,20,25];
	var totalCerosPociones = cuentaCerosArray(pociones);
	var totalPorcentajes=0;
	var i=0;
	while(totalCerosPociones!=pociones.length){			
		if(totalCerosPociones==0 && cuentaUnosArray(pociones)>2){
			ataques.push("Usar 5 pociones distintas causan un 25% de daño");			
			totalPorcentajes += 25; 
			for (i=0;i<pociones.length;i++){
				if(pociones[i]>0){
					pociones[i] = pociones[i]-1; 	
				}				
			}				
		}
		totalCerosPociones = cuentaCerosArray(pociones);			
		if(totalDistintosCero(pociones)>=4){
			var aislarMayor = aislarMayorPociones(pociones);
			ataques.push("Usar 4 pociones distintas causan un 20% de daño");
			totalPorcentajes += 20;
			for (i=0;i<pociones.length;i++){
				if(aislarMayor!=i && pociones[i]>0){						
					pociones[i] = pociones[i]-1; 
				}
			}
		}else{
			var noPociones = totalDistintosCero(pociones);		
			
			if(cuentaUnosArray(pociones)==2 && totalCerosPociones==3){
				for (i=0;i<pociones.length;i++){				
					if(pociones[i]>0){
						pociones[i] = pociones[i]-1; 
					}
					break;
				}
				totalPorcentajes += 3;
				ataques.push("Usar 1 pocion causan un 3% de daño");

			}else{
				for (i=0;i<pociones.length;i++){				
					if(pociones[i]>0){
						pociones[i] = pociones[i]-1; 
					}
				}
				totalPorcentajes += porcentajePociones[noPociones-1];
				ataques.push("Usar "+ noPociones +" pociones distintas causan un "+porcentajePociones[noPociones-1]+"% de daño");

			}			

		}	
		totalCerosPociones = cuentaCerosArray(pociones);
	}
	ataques.push("Total Mejor Probabilidad: "+totalPorcentajes+"%");
	return ataques;
}

function cuentaCerosArray(pociones){
	var cont=0;
	for (var i=0;i<pociones.length;i++){
		if (pociones[i]==0){
			cont++;
		}
	}
	return cont;
}

function cuentaUnosArray(pociones){
	var cont=0;
	for (var i=0;i<pociones.length;i++){
		if (pociones[i]==1){
			cont++;
		}
	}
	return cont;
}

function aislarMayorPociones(pociones){
	var iNumeroMayor, iPosicion;   
	//Suponemos que el numero mayor es el primero
	iNumeroMayor = pociones[0];
	iPosicion = 0;
	for (var i=0;i<pociones.length;i++){
		if (pociones[i]<iNumeroMayor){
		   iNumeroMayor = pociones[i];
		   iPosicion = i;
		} 
	}
	return iPosicion
}
function totalDistintosCero(pociones){
	var cont=0;
	for (var i=0;i<pociones.length;i++){
		if (pociones[i]>=1){
			cont++;
		}
	}
	return cont;
}

module.exports.combinarPociones =  combinarPociones;
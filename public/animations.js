const elementosPrimeros = [document.getElementById("tech"),document.getElementById("studies"),document.getElementById("courses")]
const elementosSegundos = [document.getElementById("tech__images"),document.getElementById("studies__articles__first"),document.getElementById("courses__articles__first")]
const secciones= [document.getElementById("techDiv"),document.getElementById("study"),document.getElementById("cursos")]
class Interseccion{
	constructor(){
		this.visto = {"tech": false, "studies" :  false, "courses" : false};
		this.callback = this.callback.bind(this);
		this.observer = new IntersectionObserver(this.callback, {threshold:0.3});
		this.observer.observe(secciones[0]);
		this.observer.observe(secciones[1]);
		this.observer.observe(secciones[2]);
	}
	callback(entries) {
		entries.forEach(entry =>{
			const isVisible = entry.intersectionRatio >=0.3;
			if(isVisible && !this.visto[entry.target.className]){
				this.visto[entry.target.className]=true;
				show(entry.target.className)
			}

		});
	}
}
const intersect = new Interseccion();
function show(name){
	var elementPrimero;
	var elementSegundo;
	if(name=="techDiv"){
		elementPrimero=elementosPrimeros[0]
		elementSegundo=elementosSegundos[0]
	} 
	else if(name=="study"){
		elementPrimero=elementosPrimeros[1]
		elementSegundo=elementosSegundos[1]
	} 
	else if(name=="cursos"){
		elementPrimero=elementosPrimeros[2]
		elementSegundo=elementosSegundos[2]
	} 
	elementPrimero.animate([
		{left: "0"}
	],{
		duration:1500,
		fill: "forwards"
	})
	elementSegundo.animate([
		{transform: "scale(1,1)"}
	],{
		duration:1500,
		fill: "forwards"
	})
}

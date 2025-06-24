import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//Variables Main
let pronoun = ['the', 'our', 'your'];
let adj = ['great', 'big', 'small'];
let noun = ['jogger', 'racoon', 'panda'];
let domains = [".com", ".info", ".net", ".org", ".biz", ".edu"];

//Obtener todos los dominios
const allDomains = pronoun.flatMap(pronouns =>
	adj.flatMap(adjs =>
		noun.flatMap(nouns =>
			domains.map(domain =>
				`${pronouns}${adjs}${nouns}${domain}`
			)
		)
	)
);

// Filtrar dominion por extensión
function filterDomainExtesion(extension) {
	return allDomains.filter(domain => domain.endsWith(extension));

}

// Función que activa los dominios en el DOM
function displayDomains(domains, extension) {
	const resultsDomain = document.getElementById("domainResult");
	resultsDomain.className = "container-fluid mt-4"

	// Separa los domios en columnas individuales
	const domainsPerColumn = Math.ceil(domains.length / 3);
	const column1 = domains.slice(0, domainsPerColumn);
	const column2 = domains.slice(domainsPerColumn, domainsPerColumn * 2);
	const column3 = domains.slice(domainsPerColumn * 2);

	//Html que genera Dominios
	resultsDomain.innerHTML = `
        <div class="row">
            <div class="col-12">
                <h3 class="text-center mb-4">Domain ${extension} (${domains.length} finded)</h3>
            </div>
        </div>
        <div class="row">

			<!-- Columna 1 --!>
            <section class="col-12 col-md-4">
                <div class="border p-3 h-100">
                    <h5 class="text-center mb-3">Alcides</h5>
                    ${column1.map(domain => `<div class="mb-2 p-2 bg-secondary rounded">${domain}</div>`).join('')}
                </div>
            </section>
            
            <!-- Columna 2 --!>
            <section class="col-12 col-md-4">
                <div class="border p-3 h-100">
                    <h5 class="text-center mb-3">Me caes</h5>
                    ${column2.map(domain => `<div class="mb-2 p-2 bg-secondary rounded">${domain}</div>`).join('')}
                </div>
            </section>
            
            <!-- Columna 3 --!>
            <section class="col-12 col-md-4">
                <div class="border p-3 h-100">
                    <h5 class="text-center mb-3">Mal</h5>
                    ${column3.map(domain => `
                        <div class="mb-2 p-2 bg-secondary rounded">
                            ${domain}
                        </div>
                    `).join('')}
                </div>
            </section>
        </div>
    `;
}

//Boton dominios .com
let domainCom = document.getElementById("btnCom");
domainCom.addEventListener("click", function () {
	const getDomainCom = filterDomainExtesion(".com");
	displayDomains(getDomainCom, ".com");
});
// Boton dominios.info
let domainInfo = document.getElementById("btnInfo");
domainInfo.addEventListener("click", function () {
	const getDomainInfo = filterDomainExtesion(".info");
	displayDomains(getDomainInfo, ".info");
});
// Boton dominios .Net
let domainNet = document.getElementById("btnNet");
domainNet.addEventListener("click", function () {
	const getDomainNet = filterDomainExtesion(".net");
	displayDomains(getDomainNet, ".net");
});
// Boton dominios .org
let domainOrg = document.getElementById("btnOrg");
domainOrg.addEventListener("click", function () {
	const getDomainOrg = filterDomainExtesion(".org");
	displayDomains(getDomainOrg, ".org");
});
// Boton dominios .biz
let domainBiz = document.getElementById("btnBiz");
domainBiz.addEventListener("click", function () {
	const getDomainBiz = filterDomainExtesion(".biz");
	displayDomains(getDomainBiz, ".biz");
});
// Boton dominios .edu
let domainEdu = document.getElementById("btnEdu");
domainEdu.addEventListener("click", function () {
	const getDomainEdu = filterDomainExtesion(".edu");
	displayDomains(getDomainEdu, ".edu");
});




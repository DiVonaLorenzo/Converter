/**
 * Le seguenti due righe di codice utilizzano le DOM API per poter recuperare
 * dal DOM (AKA la pagina web) due elementi. Selezionati attraverso il selettore
 * passato come parametro al metodo querySelector. Il selettore è identico a
 * quello che si usa in CSS.
 *
 * Il DOM è la rappresentazione degli elementi della pagina web sotto forma di
 * oggetti. Questo significa che abbiamo accesso a metodi e proprietà che ci
 * che ci permettono di manipolarne caratteristiche e funzionalità.
 */
const form = document.querySelector('#form') // Qui selezioniamo l'elemento con ID form
const resultDiv = document.querySelector('#result-div') // Qui selezioniamo l'elemento con id result-div

/**
 * Una pagina web è ricchissima di eventi. In base a quello che ci serve possiamo
 * intercettarli e "rispondere" a quel determinato evento con una funzione.
 *
 * Qui di seguito avviene proprio questo. addEventListener rimane in attesa che
 * un evento submit si verifichi sull'elemento assegnato alla variabile form.
 * Quando ciò avviene viene eseguita una funzione di callback che eseguirà la
 * sua logica immediatamente.
 */
form.addEventListener('submit', function(e) {
  e.preventDefault() // Preveniamo che la pagina si refresci in seguito all'invio
  const targetForm = e.target // Passaggio extra che ci eviterà di scrivere troppo nella riga successiva e.target.eur.value diventerà targetForm.eur.value.
	// Con target si fa riferimento all'elemento che ha causato l'evento (nel nostro caso il form).
  const eur = targetForm.eur.value // Recuperiamo il valore del campo con attributo
	// name impostato a eur.
  const usd = eur*0.98 // Convertiamo
  resultDiv.innerHTML = `<p>Oggi, ${eur} euro valgono ${usd} dollari!</p>` // Inseriamo il risultato nel div creato appositamente per questo scopo.
})
// Funzione JavaScript per il Secondo convertitore
    const secform = document.querySelector('#secform');
    const secresultDiv = document.querySelector('#secresult-div');
    secform.addEventListener('submit', function(k) {
    k.preventDefault()
    const targetsecForm = k.target
    const celsius = targetsecForm.celsius.value
    const fahrenheit = celsius*9/5+32
    secresultDiv.innerHTML = `<p>${celsius}° Celsius equivalgono a ${fahrenheit}° Fahrenheit!</p>`
    })
// Funzione JavaScript per il terzo convertitore
    const terform = document.querySelector('#terform');
    const terresultDiv = document.querySelector('#terresult-div');
    terform.addEventListener('submit', function(g) {
    g.preventDefault()
    const targetterForm = g.target
    const kg = targetterForm.KG.value
    const lbs = kg*2.205
    terresultDiv.innerHTML = `<p>${kg} KG equivalgono a ${lbs} LBS!</p>`
    })

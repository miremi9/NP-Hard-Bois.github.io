
class Shop{
    constructor(parentElement,Ocean)
    {
        this.prixSaumon = 10
        this.parentElement = parentElement
        console.log(parentElement)
        //parentElement.getElementById("achatSaumon").addEventListener("click",this.achatSaumonMax)
        document.getElementById('boutique').innerHTML = "<h1>Boutique</h1>"
        this.createTable(10, 2);

    }
    achatSaumonMax()
    {
        console.log("Click achat")
        this.Ocean.AddSaumon()


    }
    // Fonction pour générer une table dynamiquement
    createTable(rows, cols) {
    // Crée l'élément table
    const table = document.createElement('table');
    table.style.borderCollapse = 'collapse'; // Style : évite les doubles bordures
    
    // Boucle pour créer les lignes
    for (let i = 0; i < rows; i++) {
      const row = document.createElement('tr'); // Crée une ligne
      
      // Boucle pour créer les colonnes dans une ligne
      for (let j = 0; j < cols; j++) {
        const cell = document.createElement(i === 0 ? 'th' : 'td'); // Tête ou cellule normale
        cell.textContent = i === 0 ? `Header ${j + 1}` : `Row ${i} Col ${j + 1}`;
        cell.style.border = '1px solid black'; // Style des bordures
        cell.style.padding = '8px'; // Style du padding
        row.appendChild(cell); // Ajoute la cellule à la ligne
      }
      
      table.appendChild(row); // Ajoute la ligne à la table
    }
  
    // Ajoute la table au conteneur existant
    const container = document.getElementById('boutique');
    container.appendChild(table);
  }
  
  // Appel de la fonction pour générer une table 4x5

  
}
export {Shop}
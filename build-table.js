class Guitar{
  constructor() {
  this.mountains = [
      { name: "Monte Falco", height: 1658, place: "Parco Foreste Casentinesi" },
      { name: "Monte Falterona", height: 1654, place: "Parco Foreste Casentinesi" },
      { name: "Poggio Scali", height: 1520, place: "Parco Foreste Casentinesi" },
      { name: "Pratomagno", height: 1592, place: "Parco Foreste Casentinesi" },
      { name: "Monte Amiata", height: 1738, place: "Siena" }
    ],
  this.fretboard = [ 
      ['e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e'],
      ['b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b'],
      ['b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'f', 'f#', 'g'],
      ['d', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b', 'c', 'c#', 'd'],
      ['a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a'],
      ['e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e'],
  ],
  this.notes = ['e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e']
  this.transitions = ['slide', 'bend', 'none']
  this.allLicks = []
  }


  makeLick(numberOfNotes, lick){
    if(numberOfNotes == 0){
      this.allLicks.push(lick);
      return;
    }
    
    let note, transition;
    for(note of this.notes){
      for(transition of this.transitions){
        this.makeLick(numberOfNotes - 1, lick+"   "+transition + "   " + note)
      }
    }
  }
  generateTableHead(table) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let i = 0; i < 12; i++) {
      let th = document.createElement("th");
      let text = document.createTextNode(i+1);
      th.appendChild(text);
      row.appendChild(th);
    }
  }
  
  generateTable(table) {
    for (let element of this.fretboard) {
      let row = table.insertRow();
      for (let key in element) {
        let cell = row.insertCell();
        let text = element[key];
      
        cell.className = text;
      }
    }
  }

}
  
  let table = document.querySelector("table"),
      guitar = new Guitar();
   
  //guitar.generateTableHead(table);
  table.className = "fretboard";
  guitar.generateTable(table);
  guitar.makeLick(2, "a");
  console.log(guitar.allLicks);
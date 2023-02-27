Consegna:
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un’immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull’aspetto logico.
MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
MILESTONE 3
Al click dell’utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.




-STEP 1:
Impostare il codice html e css per creare un layout del carosello in versione statica. 
-STEP 2:
Iniziare la programmazione Javascript partendo dal'impostazione delle costanti e variabili.
-STEP 3:
Iniziare a costruire gli array contenenti le img che saranno tutte provviste di classe css display none per evitare che siano visualizzabili.
-STEP 4:
Strutturare un ciclo for che dovrà tramite un evento del click del FA andare a aggiungere una classe show all'immagine con indice successivo e rimuovere contemporaneamente la classe hidden.
-STEP 5:
Sperare che funzioni se no rivedere il codice.






            <div class="item show"><img src="img/01.webp" alt="spiderman"></div>
            <div class="item"><img src="img/02.webp" alt="ratchet & clank"></div>
            <div class="item"><img src="img/03.webp" alt="fortnite"></div>
            <div class="item"><img src="img/04.webp" alt="stray"></div>
            <div class="item"><img src="img/05.webp" alt="marvel"></div>


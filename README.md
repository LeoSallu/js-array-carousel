Consegna:
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

                        MILESTONE 1 
Impostare il codice html e css per creare un layout del carosello in versione statica, sfruttando le proprietà css per centrare i nostri elementi, poi dedicarsi tramite ai poisition alla centratura della img visibile e infine sempre tramite posizionamenti assoluti inserite le due chevron up e bot per far scorrere le img successivamente con js.

                        MILESTONE 2  
Rimossi dal HTML le img, impostato il file javascript iniziando dalla formulazione delle costanti e variabili con annesso l'array contenente le img.
Impostato un ciclo For che farà scorrere le nostre immagini al click sul chevron ma di cui ce ne occuperemo dopo. Tornando al ciclo tramite l'interpolazione creiamo un sistema più efficiente che inserisca l'img direttamente dall'indice del Array nel HTML.
Il sistema sarà basato su le costanti che mi sono impostato che tramite un querySelector vadano a prima di tutto a prendere dal HTML i due chevron e infine una costante che vada a selezionare l'item generato all'interno del ciclo For.
                        MILESTONE 3
Infine come ultimo Milestone per far si che al nostro click sulle due chevron la foto passi alla successiva ci impostiamo due eventi separati per ambedue i chevron che al nostro click faranno due azioni differenti. 
Il primo andrà ad aggiungere al nostro elemento un numero[indice] ogni volta che andremo a cliccare su di esso per un massimo del numero totale del'indice - 1 perchè da consegna una volta giunti all'ultima img non possiamo procedere ad una successiva perchè terminata la nostra galleria.
Inoltre questo somma dell'indice si interpone fra la rimozione della classe show alla foto corrente (Per far visualizzare l'img) e l'aggiunta della classe all'img successiva per non far comparire più img contemporaneamente. Processo inverso per quanto riguardo il calcolo dell'indice del chevron bot che andrà a sottrarre ad ogni nostro click piuttosto che aggiungere per tornare cosi all'img precedente e cosi termina l'esercizio.






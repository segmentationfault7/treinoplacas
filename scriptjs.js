var lista = ["alfa", "bravo", "charlie", "carly", "charles", "charge", "celta", "echo", "eco", "eko", "foxtrot", "rockstar", "golf", "golfe", "hotel", "india", "índio", "inter", "juliett", "juliete", "juliana", "kilo", "lima", "mike", "maiki", "november", "novembro", "novembre", "oscar", "oscara", "rosca", "posca", "porca", "papa", "quebec", "playback", "romeo", "romeu", "sierra", "ceará", "serra", "tango", "uniform", "unifor", "victor", "whiskey", "xray", "yankee", "ianque", "yang", "funk", "eaq", "eaqui", "zulu", "xis rei", "cheguei", "shirley", "iank", "iankee", "ianque", "yanque", "bianchi", "quilo", "kg", "killer", "filó", "tiro", "rei", "x-rei", "x rei", "ex rei", "é que", "exrei", "errei", "bianca", "ierra", "x-man", "xmen", "zero", "cesto", "3º", "2º", "cesta", "sexta", "cisto", "pinto", "negativo", "quarto", "nono", "dona", "nona", "8º", "quinto", "quinta", "1º", "4º", "5º", "6º", "7º", "9º", "0", "frango", "7", "sete", "segundo", "índia", "sheik", "delta", "whisky", "x-ray", "juliet", "o meu", "sexto", "oitavo", "6", "primeiro", "terceiro", "sétimo", "x race", "aquilo", "maike", "é cor", "bianch", "x ray", "alpha", "segunda", "cielo", "é co", "sys", "x", "quarta", "no no", "tô no", "8", "1", "2", "3", "4", "5", "6", "7", "9", "bec", "nova", "nulo", "iac", "brabo", "gol", "ótica", "costa","s"];

var letrascorresp = ["A", "B", "C", "C", "C", "C", "D", "E", "E", "E", "F", "F", "G", "G", "H", "I", "I", "I", "J", "J", "J", "K", "L", "M", "M", "N", "N", "N", "O", "O", "O", "O", "O", "P", "Q", "Q", "R", "R", "S", "S", "S", "T", "U", "U", "V", "W", "X", "Y", "Y", "Y", "Y", "Y", "Y", "Z", "X", "X", "X", "Y", "Y", "Y", "Y", "Y", "K", "K", "K", "K", "K", "X", "X", "X", "X", "X", "X", "X", "Y", "S", "X", "X", "0", "6", "3", "2", "6", "6", "6", "5", "0", "4", "9", "9", "9", "8", "5", "5", "1", "4", "5", "6", "7", "9", "0", "T", "7", "7", "2", "I", "X", "D", "W", "X", "J", "R", "6", "8", "6", "1", "3", "7", "X", "K", "M", "E", "Y", "X", "A", "2", "S", "E", "S", "X", "4", "9", "9", "8", "1", "2", "3", "4", "5", "6", "7", "9", "Q", "9", "9", "Y", "B", "G", "O", "O","2"];

var sub = "-------------------------";
var letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeros = "1234567890";
var resultado = "result";
var placafalada = " ";
var lista2 = lista.join(" ");

var letrascorresp2 = letrascorresp.join(" ");
var resultadoanalise = " ";


var grammar = '#JSGF V1.0; grammar alfabeto; public <alfabetoOTAN> = Alfa | Bravo | Charlie | Carly | Charles | charge | Delta | Echo | eco | eko | Foxtrot | Rockstar | Golf | Gol | golfe | Hotel | India | índio | inter | Juliett | Juliete | Juliana | Kilo | Lima | Mike | maiki | November | Novembro | novembre | Oscar | os cara | rosca | Posca | porca | Papa | Quebec | playback | playback | Romeo | Romeu | Sierra | Ceará | serra | Tango | frango | Uniform | Unifor | Victor | Whiskey | X-ray | x | Yankee | ianque | Yang | funk | eaq | e aqui | Zulu | Xis Rei | cheguei | Shirley | iank | iankee | ianque| yanque | Bianchi | quilo | Kg | Killer |filó | tiro | Rei | X-rei | X rei | exrei | é que | ex rei | ex-rei | x | errei | Shirley | cheguei | Ianque | Bianca | ierra | Cheguei | X-man | X-men | Xis Rei | zero | Cesto | 3º | 2º | cesta | sexta | Cisto | Pinto | Face | negativo | quarto | nono | dona | nona | 8º | Quinto | quinta | quilo;'



function analisedefala() {

  var res = 0;
  var subst = "";

  var indices = [{ letra: "", valor: 0 }, { letra: "", valor: 0 }, { letra: "", valor: 0 }, { letra: "", valor: 0 }, { letra: "", valor: 0 }, { letra: "", valor: 0 }, { letra: "", valor: 0 }];

  for (var i = 0; i < 7; i++) {


    for (var j = 0; j < lista.length; j++) {

      if (resultado.search(lista[j]) >= 0) {
       
        indices[i].letra = letrascorresp[j];
        indices[i].valor = 1 + resultado.indexOf(lista[j]);


        res = lista[j].length;

        subst = sub.substr(1, res);

        resultado = resultado.replace(lista[j], subst);



        j = 1000;

      } else {



      }




    }




  }


  indices.sort(function (a, b) {
    return a.valor - b.valor;
  });


  for (var i = 0; i < 7; i++) {

    placafalada += indices[i].letra;
    
  }



  document.getElementById("Label4").innerHTML = placafalada;

  placafalada = "";
  resultado = "";

}



//______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________


var letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeros = "1234567890";
var cardinais = ["primeiro", "segundo", "terceiro", "quarto", "quinto", "sexto", "sétimo", "oitavo", "nono", "negativo"];
var alfabeto = ["Alfa", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel", "India", "Juliett", "Kilo", "Lima", "Mike", "November", "Oscar", "Papa", "Quebec", "Romeo", "Sierra", "Tango", "Uniform", "Victor", "Whiskey", "X-ray", "Yankee", "Zulu"];
var placa = ["B", "R", "A", "5", "I", "2", "2"];
var codigo = ["Bravo", "Romeo", "Alfa", "quinto", "India", "segundo", "segundo"];
var num = 1;
var maxalter = 1;

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition ;
if(SpeechRecognition===null){ alert('speech null');}

var SpeechGrammarList = window.SpeechRecognition || window.webkitSpeechRecognition ;

var grammar = '#JSGF V1.0; grammar alfabeto; public <alfabetoOTAN> = Alfa | Bravo | Charlie | Carly | Charles | charge | Delta | Echo | eco | eko | Foxtrot | Rockstar | Golf | Gol | golfe | Hotel | India | índio | inter | Juliett | Juliete | Juliana | Kilo | Lima | Mike | maiki | November | Novembro | novembre | Oscar | os cara | rosca | Posca | porca | Papa | Quebec | playback | playback | Romeo | Romeu | Sierra | Ceará | serra | Tango | frango | Uniform | Unifor | Victor | Whiskey | X-ray | x | Yankee | ianque | Yang | funk | eaq | e aqui | Zulu | Xis Rei | cheguei | Shirley | iank | iankee | ianque| yanque | Bianchi | quilo | Kg | Killer |filó | tiro | Rei | X-rei | X rei | exrei | é que | ex rei | ex-rei | x | errei | Shirley | cheguei | Ianque | Bianca | ierra | Cheguei | X-man | X-men | Xis Rei | zero | Cesto | 3º | 2º | cesta | sexta | Cisto | Pinto | Face | negativo | quarto | nono | dona | nona | 8º | Quinto | quinta | quilo;'

var ocultarlabel2 = true;

var menssagem = ["...", ".."];

var falarcodigo = new SpeechSynthesisUtterance(codigo.join(''));
falarcodigo.pitch = 1.0;
falarcodigo.volume = 1;
falarcodigo.rate = 0.9;
falarcodigo.lang = 'pt-BR';


var recognition = new SpeechRecognition();


recognition.maxAlternatives = 20;
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.lang = 'pt-BR';
recognition.interimResults = false;
recognition.continuous = false;


recognition.onresult = function (event) {

  var last = event.results.length - 1;
  var command = event.results[last][0].transcript;
  menssagem = command.toString();

  document.getElementById("Label3").innerHTML = menssagem;


  resultado = menssagem;


  resultado = resultado.toLowerCase();


  analisedefala();


};




recognition.onerror = function (event) {
  document.getElementById("Label3").innerHTML = ' ERRO... ';
}

recognition.onnomatch = function () {
  console.log('Speech not recognized');
}


function falar() {

  
  falarcodigo.text = "QAP";
  speechSynthesis.speak(falarcodigo);
   alert('OK');
  recognition.start();

}





function novaplaca() {
  cont = 1000;
 
 document.getElementById("Label3").innerHTML = 'placa falada';

  for (var i = 0; i < 7; i++) {


    if (i == 3 || i > 4) {

      num = Math.floor(Math.random() * 10);

      placa[i] = numeros.charAt(num);
      codigo[i] = cardinais[num];

    } else {

      num = Math.floor(Math.random() * 25);
      placa[i] = letras.charAt(num);
      codigo[i] = alfabeto[num];

    }

  }


  document.getElementById("Label1").innerHTML = placa.join('');


  if (ocultarlabel2) {

    document.getElementById("Label2").innerHTML = "mostrar-codigo";


  } else {

    document.getElementById("Label2").innerHTML = codigo.join('/');



  }



}



function ocultarcodigo() {


  if (ocultarlabel2) {

    ocultarlabel2 = false;
    document.getElementById("Label2").innerHTML = codigo.join('/');
  } else {

   document.getElementById("Label2").innerHTML = "mostrar-codigo";
    ocultarlabel2 = true;

  }



}



function ovircodigo() {

  falarcodigo.text = codigo.join(', ');
  speechSynthesis.speak(falarcodigo);


}




var cont = 1000;
var placasrepetidas = [];
var plakas = "";
var cont2 = 1000;
var codk = [];




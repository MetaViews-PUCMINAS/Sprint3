function lerDados() {
  let strDados = localStorage.getItem('filmes')
  let objDados = {};
  //Se tiver dados no storage
  if (strDados) {
    objDados = JSON.parse(strDados);
  }
  //Se não tiver dados no storage
  else {
    objDados = {
      filmes: [
        {
          id: 0,
          nome: "Interestelar",
          genero: "Ficção científica",
          lancamento: 2014,
          img:"https://image.tmdb.org/t/p/w600_and_h900_bestv2/nCbkOyOMTEwlEV0LtCOvCnwEONA.jpg",
          sinopse: "As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar."
        },

        {
          id: 1,
          nome: "Creed 2",
          genero: "Esporte",
          lancamento: 2019,
          img:"https://image.tmdb.org/t/p/w600_and_h900_bestv2/zAu6ajsuyL9dwMhOFerfwqtjsX4.jpg",
          sinopse: "Adonis Creed (Michael B. Jordan) saiu mais forte do que nunca de sua luta contra 'Pretty' Ricky Conlan (Tony Bellew) e segue sua trajetória rumo ao campeonato mundial de boxe, contra toda a desconfiança que acompanha a sombra de seu pai e com o apoio de Rocky (Sylvester Stallone). Sua próxima luta não será tão simples: Ele precisa enfrentar um adversário que possui uma forte ligação com o passado de sua família, o que torna tudo ainda mais complexo."
        },

        {
          id: 2,
          nome: "Projeto X",
          genero: "Comédia",
          lancamento: 2012,
          img:"https://image.tmdb.org/t/p/w600_and_h900_bestv2/9ER5NBqdSuxnmOzAqmm9OGNGg7g.jpg",
          sinopse: "Três garotos no último ano do colégio decidem fazer uma festa de aniversário para serem reconhecidos. Porém no decorrer da festa as coisas saem de controle."
        },

        {
          id: 3,
          nome: "Sniper Americano",
          genero: "Ação",
          lancamento: 2015,
          img:"https://image.tmdb.org/t/p/w600_and_h900_bestv2/mAXzc2oDTTYcnn6IGHlSXvmXloG.jpg",
          sinopse: "História real de Chris Kyle, atirador de elite das forças especiais da marinha dos Estados Unidos. Durante a guerra do Iraque, sua missão era uma só- proteger seus companheiros. Seu dever fez dele um dos maiores atiradores da história americana. Sua precisão salva inúmeras vidas, mas também o torna um alvo preferencial. Quando Kyle finalmente volta para casa, ele descobre que não tem como deixar a guerra para trás.  "
        },

        {
          id: 4,
          nome: "O lobo de Wall Street",
          genero: "Comédia",
          lancamento: 2014,
          img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/xfbnEVFKS26YHLuuckP0i58GPlo.jpg",
          sinopse: "Durante seis meses, Jordan Belfort trabalhou duro em uma corretora de Wall Street, seguindo os ensinamentos de seu mentor Mark Hanna. Quando finalmente consegue ser contratado como corretor da firma, acontece o Black Monday, que faz com que as bolsas de vários países caiam repentinamente. Sem emprego e bastante ambicioso, ele acaba trabalhando para uma empresa de fundo de quintal que lida com papéis de baixo valor, que não estão na bolsa de valores. É lá que Belfort tem a ideia de montar uma empresa focada neste tipo de negócio, cujas vendas são de valores mais baixos mas, em compensação, o retorno para o corretor é bem mais vantajoso. Ao lado de Donnie e outros amigos dos velhos tempos, ele cria a Stratton Oakmont, uma empresa que faz com que todos enriqueçam rapidamente e, também, levem uma vida dedicada ao prazer."
        },

        {
          id: 5,
          nome: "Crepúsculo",
          genero: "Romance",
          lancamento: 2008,
          img:"https://image.tmdb.org/t/p/w600_and_h900_bestv2/sgxHeCZE3H9n5jQFumQPs9HBnTV.jpg",
          sinopse: "Isabella Swan (Kristen Stewart) e seu pai, Charlie (Billy Burke), mudaram-se recentemente. No novo colégio ela logo conhece Edward Cullen (Robert Pattinson), um jovem admirado por todas as garotas locais e que mantém uma aura de mistério em torno de si. Eles aos poucos se apaixonam, mas Edward sabe que isto põe a vida de Isabella em risco."
        },

        {
          id: 6,
          nome: "Guardiões da Galáxia",
          genero: "Ação",
          lancamento: 2014,
          img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/gyhICZLe3wSCCy0vjFfiVlhYsfu.jpg",
          sinopse: "O aventureiro do espaço Peter Quill torna-se presa de caçadores de recompensas depois que rouba a esfera de um vilão traiçoeiro, Ronan. Para escapar do perigo, ele faz uma aliança com um grupo de quatro extraterrestres. Quando Quill descobre que a esfera roubada possui um poder capaz de mudar os rumos do universo, ele e seu grupo deverão proteger o objeto para salvar o futuro da galáxia."
        },

        {
          id: 7,
          nome: "O Regresso",
          genero: "Aventura",
          lancamento: 2016,
           img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/x1jViuXsm5ZmrR6uFmxU6AVdXzs.jpg",
          sinopse: "Em uma expedição pelo desconhecido deserto americano, o lendário explorador Hugh Glass é brutalmente atacado por um urso e deixado como morto pelos membros de sua própria equipe de caça. Em uma luta para sobreviver, Glass resiste à dor inimaginável, bem como à traição de seu confidente, John Fitzgerald. Guiado pela força de vontade e pelo amor de sua família, Glass deve navegar um inverno brutal em uma incessante busca por sobrevivência e redenção."
        },

        {
          id: 8,
          nome: "Harry Potter e a Ordem da Fênix",
          genero: "Aventura",
          lancamento: 2007,
          img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/jnFw6DAO0exJlkVZ418M3cYppgr.jpg",
          sinopse: "Harry Potter está em seu quinto ano em Hogwarts e acaba ouvindo que muitos não sabem a verdade sobre seu encontro com Lord Voldemort. O Ministro de Mágica, Cornelius Fudge, indica Dolores Umbridge para ser a nova professora de Defesa Contra as Artes das Trevas, por acreditar que Dumbledore planeja tomar seu lugar. Porém, os métodos que ela usa são totalmente inapropriados. Harry, então, se reúne com um grupo de alunos para defender sua escola."
        },

        {
          id: 9,
          nome: "Vingadores: Era de Ultron",
          genero: "Ação",
          lancamento: 2015,
          img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/ccmHe1heP8ztvynd1mFRE8FqjME.jpg",
          sinopse: "Ao tentar proteger o planeta de ameaças, Tony Stark constrói um sistema de inteligência artificial que cuidaria da paz mundial. O projeto acaba dando errado e gera o nascimento do Ultron. Com o destino da Terra em jogo, os Vingadores terão que se unir para mais uma vez salvar a raça humana da extinção."
        },

        {
          id: 10,
          nome: "As Branquelas",
          genero: "Comédia",
          lancamento: 2004,
          img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/tW3ovNQsn5jPDB5E9B4KeCNA6kU.jpg",
          sinopse: "Os irmãos Marcus (Marlon Wayans) e Kevin Copeland (Shawn Wayans) são detetives do FBI que estão com problemas no trabalho. A última investigação da dupla foi um grande fracasso e eles estão sob a ameaça de serem demitidos. Quando um plano para sequestrar as mimadas irmãs Brittany (Maitland Ward) e Tiffany Wilson (Anne Dudek) é descoberto, o caso é entregue aos principais rivais dos irmãos Copeland, os agentes Vincent Gomez (Eddie Velez) e Jack Harper (Lochlyn Munro). Para aumentar ainda mais a humilhação da dupla, eles são escalados para escoltar as jovens mimadas do aeroporto até o local de um evento pelo qual elas esperaram por meses. Porém no trajeto um acidente de carro provoca um verdadeiro desastre: enquanto uma das irmãs arranha o nariz, a outra corta o lábio. Desesperadas, elas se recusam a ir ao evento. É quando,para salvar o emprego, Marcus e Kevin decidem por assumir as identidades das irmãs."
        },

        {
          id: 11,
          nome: "À Espera de Um Milagre",
          genero: "Drama",
          lancamento: 1999,
          img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/sv85SorB63MaaBuoz8Xh25sXe2H.jpg",
          sinopse: "1935, no corredor da morte de uma prisão sulista. Paul Edgecomb (Tom Hanks) é o chefe de guarda da prisão, que temJohn Coffey (Michael Clarke Duncan) como um de seus prisioneiros. Aos poucos, desenvolve-se entre eles uma relação incomum, baseada na descoberta de que o prisioneiro possui um dom mágico que é, ao mesmo tempo, misterioso e milagroso."
        },

        {
          id: 12,
          nome: "O Senhor dos Anéis: A Sociedade do Anel",
          genero: "Aventura",
          lancamento: 2001,
          img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/tlvsNCwWEIgwAM23aNzTmMIcPEZ.jpg",
          sinopse: "Em uma terra fantástica e única, um hobbit recebe de presente de seu tio um anel mágico e maligno que precisa ser destruído antes que caia nas mãos do mal. Para isso, o hobbit Frodo tem um caminho árduo pela frente, onde encontra perigo, medo e seres bizarros. Ao seu lado para o cumprimento desta jornada, ele aos poucos pode contar com outros hobbits, um elfo, um anão, dois humanos e um mago, totalizando nove pessoas que formam a Sociedade do Anel."
        },

        {
          id: 13,
          nome: "Your Name: Kimi no na wa",
          genero: "Romance",
          lancamento: 2016,
          img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/vfJFJPepRKapMd5G2ro7klIRysq.jpg",
          sinopse: "Mitsuha é a filha do prefeito de uma pequena cidade, mas sonha em tentar a sorte em Tóquio. Taki trabalha em um restaurante em Tóquio e deseja largar o seu emprego. Os dois não se conhecem, mas estão conectados pelas imagens de seus sonhos."
        },

        {
          id: 14,
          nome: "A Voz do Silêncio",
          genero: "Drama",
          lancamento: 2016,
          img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/i2Enw8FboGOytXRGgb4bQRFrRpF.jpg",
          sinopse: "Nishimiya Shouko é uma estudante com deficiência auditiva. Durante o ensino fundamental, após se transferir para uma nova escola, Shouko passa a ser alvo de bullying e em pouco tempo precisa se transferir. O que ela não esperava é que alguns anos depois, Ishida Shouya, um dos valentões que tanto a fez sofrer no passado surgisse de novo em sua vida com um novo propósito."
        },

        {
          id: 15,
          nome: "Frozen II",
          genero: "Aventura",
          lancamento: 2019,
          img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/y2pvlZsqGcXKT4S7nUdvYfETG5r.jpg",
          sinopse: "De volta à infância de Elsa e Anna, as duas garotas descobrem uma história do pai, quando ainda era príncipe de Arendelle. Ele conta às meninas a história de uma visita à floresta dos elementos, onde um acontecimento inesperado teria provocado a separação dos habitantes da cidade com os quatro elementos fundamentais: ar, fogo, terra e água. Esta revelação ajudará Elsa a compreender a origem de seus poderes."
        }
      ]
    }
  }
  return objDados;
}

function lerDadosSeries() {
  let strDados = localStorage.getItem('series')
  let objDados = {};
  //Se tiver dados no storage
  if (strDados) {
    objDados = JSON.parse(strDados);
  }
  //Se não tiver dados no storage
  else {
    objDados = {
      series:[
    {
    
          id: 16,
          nome: "The Good Doctor",
          genero: "Drama",
          lancamento: 2017,
          img:"https://image.tmdb.org/t/p/w600_and_h900_bestv2/ucMdbTpOhV75R0NtxqHEg4hirNl.jpg",
          sinopse: "Um jovem médico com autismo começa a trabalhar em um famoso hospital. Além dos desafios da profissão, ele terá também que provar sua capacidade a seus colegas e superiores."

    },
     
     {
    
          id: 17,
          nome: "The Mandalorian",
          genero: "Sci-fi",
          lancamento: 2019,
          img:"https://image.tmdb.org/t/p/w600_and_h900_bestv2/7CQuB71u4fbZzRARJMBLusFd5eL.jpg",
          sinopse: "A saga de um guerreiro solitário, que também é um mercenário e pistoleiro, viajando pelos territórios esquecidos e marginais do espaço, logo após a queda do Império e antes da criação da temida Primeira Ordem."

    },

    {
    
          id: 18,
          nome: "Grey's Anatomy",
          genero: "Drama",
          lancamento: 2005,
          img:"https://image.tmdb.org/t/p/w600_and_h900_bestv2/wPZmf17LigifYUQayXRBgUlCmyI.jpg",
          sinopse: "Os médicos do Grey Sloan Memorial Hospital lidam diariamente com casos e consequências de vida ou morte. É um no outro que eles encontram apoio, conforto, amizade e, às vezes, até mais que amizade... Juntos, eles descobrem o quanto a vida profissional e a pessoal podem ser complicadas e se misturarem no meio do caminho."

    },

    {
    
          id: 19,
          nome: "Fear the Walking Dead",
          genero: "Ação",
          lancamento: 2015,
          img:"https://image.tmdb.org/t/p/w600_and_h900_bestv2/wGFUewXPeMErCe2xnCmmLEiHOGh.jpg",
          sinopse: "Ambientada em Los Angeles, a série mostra o começo do apocalipse zumbi e a temível desintegração da sociedade pelos olhos de uma família disfuncional, que precisa se unir para tentar sobreviver ao caos do fim dos tempos."

    },

    {
    
          id: 20,
          nome: "The Boys",
          genero: "Sci-fi",
          lancamento: 2019,
          img:"https://image.tmdb.org/t/p/w600_and_h900_bestv2/9yWidX1SgTfU176Q7ZxPMcGkMKU.jpg",
          sinopse: "Na trama, conhecemos um mundo em que super-heróis são as maiores celebridades do planeta, e rotineiramente abusam dos seus poderes ao invés de os usarem para o bem."

    },

    {
    
          id: 21,
          nome: "FBI",
          genero: "Ação",
          lancamento: 2018,
          img:"https://image.tmdb.org/t/p/w600_and_h900_bestv2/7aWmC7BjwBFgIKA77VqrXyRPicJ.jpg",
          sinopse: "A série acompanha os bastidores das operações do FBI em NY, onde os agentes Maggie Bell, Omar Adom e equipe buscam manter a cidade e o país a salvo."

    },

    {
    
          id: 22,
          nome: "Supernatural",
          genero: "Drama",
          lancamento: 2005,
          img:"https://image.tmdb.org/t/p/w600_and_h900_bestv2/ltLshA9CpddtLTHhcGQ7lGGM7uZ.jpg",
          sinopse: "Os irmãos Dean e Sam vasculham o país em busca de atividades paranormais, brigando com demônios, fantasmas e monstros no caminho."

    },

    {
    
          id: 23,
          nome: "Chicago P.D",
          genero: "Drama",
          lancamento: 2014,
          img:"https://image.tmdb.org/t/p/w600_and_h900_bestv2/tewHcTnK5DrJmyswBc95olFzKfY.jpg",
          sinopse: "O Distrito 21 do Departamento de Polícia de Chicado é composto pelos policiais uniformizados que lidam com o crime nas ruas e pela Unidade de Inteligência, que lida com crimes maiores como tráfico de drogas e assassinatos."

    },

    {
    
          id: 24,
          nome: "The 100",
          genero: "Sci-fi",
          lancamento: 2014,
          img:"https://image.tmdb.org/t/p/w600_and_h900_bestv2/cfhfcEt4bOXuVZkTC0nNBpqqiWb.jpg",
          sinopse: "Quase 100 anos após um apocalipse nuclear devastar a Terra, 100 sobreviventes de uma estação espacial voltam para avaliar as condições do planeta."

    },

    {
    
          id: 25,
          nome: "Game of Thrones",
          genero: "Drama",
          lancamento: 2011,
          img:"https://image.tmdb.org/t/p/w600_and_h900_bestv2/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",
          sinopse: "Em uma terra onde os verões podem durar vários anos e o inverno toda uma vida, sete nobres famílias lutam pelo controle da mítica terra de Westeros, dividida depois de uma guerra. Num cenário que lembra a Europa medieval, reis, rainhas, cavaleiros e renegados usam todos os meios possíveis em um jogo político pela disputa do Trono de Ferro, o símbolo do poder absoluto."

    },

    {
    
          id: 26,
          nome: "Chicago Fire",
          genero: "Drama",
          lancamento: 2012,
          img:"https://image.tmdb.org/t/p/w600_and_h900_bestv2/DhhB1lEWDtgORvBhOFVm6Q4O54.jpg",
          sinopse: "Acompanhe o dia-a-dia intenso e os dramas dos oficiais do Departamento de Bombeiros de Chicago e paramédicos do Quartel 51. A equipe composta por bombeiros, equipe de resgate e paramédicos, irá passar por situações tensas e delicadas, arriscando suas próprias vidas para salvar pessoas em perigo, além de ter que lidar com os conflitos pessoais e os desafios que surgem por conta das diferenças entre os companheiros de equipe."

    },

    {
    
          id: 27,
          nome: "Flash",
          genero: "Sci-fi",
          lancamento: 2014,
          img:"https://image.tmdb.org/t/p/w600_and_h900_bestv2/rNy8dBsoJ4jVtIBzJbK7HddZsSc.jpg",
          sinopse: "Barry enfrenta diversos assassinos que invadem a premiação onde ele acompanha Iris, mas os efeitos colaterais de seus novos superpoderes representam uma ameaça."

    },

    {
    
          id: 28,
          nome: "Vikings",
          genero: "Ação",
          lancamento: 2013,
          img:"https://image.tmdb.org/t/p/w600_and_h900_bestv2/oktTNFM8PzdseiK1X0E0XhB6LvP.jpg",
          sinopse: "Ragnar Lothbrok, um jovem que se considera descendente de Odin, é um guerreiro, fazendeiro e chefe de família. Visionário e sonhando viver diversas aventuras, ele acredita que as riquezas sonhadas por seu povo encontram-se além do mar Báltico. Mas para conseguir conquistá-las ele precisa convencer Earl Haraldson, o líder de seu povo, a permitir que ele e seus guerreiros viagem em direção à Inglaterra."

    },

    {
    
          id: 29,
          nome: "Smallville",
          genero: "Ação",
          lancamento: 2001,
          img:"https://image.tmdb.org/t/p/w600_and_h900_bestv2/yskRd1hd2NGeBLTTPk4nf3SuhjN.jpg",
          sinopse: "Antes da vida como Super-Homem, o jovem Clark Kent encara os problemas da adolescência enquanto aprende a controlar seus poderes e usá-los para proteger a cidade de Smallville."

    },

    {
    
          id: 30,
          nome: "Law and Order: SVU",
          genero: "Drama",
          lancamento: 1999,
          img:"https://image.tmdb.org/t/p/w600_and_h900_bestv2/63hv5psi330k7fvjbZgyAteSyK3.jpg",
          sinopse: "Detetives que fazem parte da Unidade de Vítimas Especiais da polícia de Nova York investigam crimes de natureza sexual, como estupros, em que a vítima sobrevive, e auxilia as autoridades na investigação."

    },

    {
    
          id: 31,
          nome: "Breaking Bad",
          genero: "Drama",
          lancamento: 2008,
          img:"https://image.tmdb.org/t/p/w600_and_h900_bestv2/30erzlzIOtOK3k3T3BAl1GiVMP1.jpg",
          sinopse: "Ao saber que tem câncer, um professor passa a fabricar metanfetamina pelo futuro da família, mudando o destino de todos."

    }
    ]
    }
  }
  return objDados;
}


function exibirRecentes ()
{
let codigo_html = '';
let objDados = lerDados();

for( i = 0; i < 4; i++)
{
  let titulo = objDados.filmes[i].nome;
  let imagem = objDados.filmes[i].img;
  let sinopse = objDados.filmes[i].sinopse;
  
  
  codigo_html += `<div class="col-3"><div class="card-group" id="lista_recentes" style="padding-top:30px;" >
<div class="card" style="width: 18rem;">
<img src="${imagem}" class="card-img-top"alt="">
<div class="card-body">
<h5 class="card-title">${titulo}</h5>
<a href="Movie${i}.html" class="btn btn-dark">Acesse</a>
</div>
</div>
</div>
</div>`;
}  

// Repassar os cards para a página
$('#lista_recentes').html(codigo_html)
}

function exibirFilmes ()
{
let codigo_html = '';
let objDados = lerDados();

for( i = 4; i < 8; i++)
{
  let titulo = objDados.filmes[i].nome;
  let imagem = objDados.filmes[i].img;
  let sinopse = objDados.filmes[i].sinopse;
  
  
  codigo_html += `<div class="col-3"><div class="card-group" id="lista_filmes" style="padding-top:30px; >
<div class="card" style="width: 18rem;">
<img src="${imagem}" class="card-img-top"alt="">
<div class="card-body">
<h5 class="card-title">${titulo}</h5>
<a href="Movie${i}.html" class="btn btn-dark">Acesse</a>
</div>
</div>
</div>
</div>`;
}  

// Repassar os cards para a página
$('#lista_filmes').html(codigo_html)
}

function exibirSeries()
{
let codigo_html = '';
let objDados = lerDadosSeries();

for( i = 0; i < 4; i++)
{
  let titulo = objDados.series[i].nome;
  let imagem = objDados.series[i].img;
  let sinopse = objDados.series[i].sinopse;
  
  
  codigo_html += `<div class="col-3"><div class="card-group" id="lista_series" style="padding-top:30px;" >
<div class="card" style="width: 18rem;">
<img src="${imagem}" class="card-img-top"alt="">
<div class="card-body">
<h5 class="card-title">${titulo}</h5>
<a href="Series${i}.html" class="btn btn-dark">Acesse</a>
</div>
</div>
</div>
</div>`;
}  

// Repassar os cards para a página
$('#lista_series').html(codigo_html)
}

//Series em Destaque
//html "Series"
function exibirSeriesDestaque()
{
let codigo_html = '';
let objDados = lerDadosSeries();

for( i = 0; i < 4; i++)
{
  let titulo = objDados.series[i].nome;
  let imagem = objDados.series[i].img;
  let sinopse = objDados.series[i].sinopse;
  
  
  codigo_html += `<div class="col-3"><div class="card-group" id="lista_series_destaque" style="padding-top:30px; padding-bottom:30px;" >
<div class="card" style="width: 18rem;">
<img src="${imagem}" class="card-img-top"alt="">
<div class="card-body">
<h5 class="card-title">${titulo}</h5>
<a href="Series${i}.html" class="btn btn-dark">Acesse</a>
</div>
</div>
</div>
</div>`;
}  

// Repassar os cards para a página
$('#lista_series_destaque').html(codigo_html)
}

//Series em Destaque
//html "Series"
function exibirSeriesConheca()
{
let codigo_html = '';
let objDados = lerDadosSeries();

for( i = 12; i < 16; i++)
{
  let titulo = objDados.series[i].nome;
  let imagem = objDados.series[i].img;
  let sinopse = objDados.series[i].sinopse;
  
  
  codigo_html += `<div class="col-3"><div class="card-group" id="lista_series_conheca" style="padding-top:30px; padding-bottom:30px;" >
<div class="card" style="width: 18rem;">
<img src="${imagem}" class="card-img-top"alt="">
<div class="card-body">
<h5 class="card-title">${titulo}</h5>
<a href="Series${i}.html" class="btn btn-dark">Acesse</a>
</div>
</div>
</div>
</div>`;
}  

// Repassar os cards para a página
$('#lista_series_conheca').html(codigo_html)
}

//HTML Filmes
function exibirFilmesDestaque ()
{
let codigo_html = '';
let objDados = lerDados();
let n = 0;

for( i = 0; i < 4; i++)
{
  let titulo = objDados.filmes[i].nome;
  let imagem = objDados.filmes[i].img;
  let sinopse = objDados.filmes[i].sinopse;
  
  
  codigo_html += `<div class="col-3"><div class="card-group" id="lista_filmes_destaque" style="padding-top:30px; padding-bottom:30px;" >
<div class="card" style="width: 18rem;">
<img src="${imagem}" class="card-img-top"alt="">
<div class="card-body" id="card-body-css">
<h4 class="card-title">${titulo}</h4>
<a href="Movie${n}.html" class="btn btn-dark">Acesse</a>
</div>
</div>
</div>
</div>`;
n++;
}  

// Repassar os cards para a página
$('#lista_filmes_destaque').html(codigo_html)
}

//HTML Filmes
function exibirFilmesTalvez ()
{
let codigo_html = '';
let objDados = lerDados();

for( i = 12; i < 16; i++)
{
  let titulo = objDados.filmes[i].nome;
  let imagem = objDados.filmes[i].img;
  let sinopse = objDados.filmes[i].sinopse;
  
  
  codigo_html += `<div class="col-3"><div class="card-group" id="lista_filmes_talvez" style="padding-top:30px; padding-bottom:30px;" >
<div class="card" style="width: 18rem;">
<img src="${imagem}" class="card-img-top"alt="">
<div class="card-body" id="card-body-css">
<h4 class="card-title">${titulo}</h4>
<a href="Movie${i}.html" class="btn btn-dark">Acesse</a>
</div>
</div>
</div>
</div>`;
}  

// Repassar os cards para a página
$('#lista_filmes_talvez').html(codigo_html)
}


function sortear ()
{
   let codigo_html = '';
let objDados = lerDados();
let n = 0;

for( i = 0; i < 4; i++)
{
  filmes = Math.floor(Math.random() * (16 - 0));
  let titulo = objDados.filmes[filmes].nome;
  let imagem = objDados.filmes[filmes].img;
  let sinopse = objDados.filmes[filmes].sinopse;
  
  
  codigo_html += `<div class="col-3"><div class="card-group" id="sortear" style="padding-top:30px; padding-bottom:30px;" >
<div class="card" style="width: 18rem;">
<img src="${imagem}" class="card-img-top"alt="">
<div class="card-body" id="card-body-css">
<h4 class="card-title">${titulo}</h4>
<a href="Movie${filmes}.html" class="btn btn-dark">Acesse</a>
</div>
</div>
</div>
</div>`;
n++;
}  
    // Repassar os cards para a página
    $('#sortear').html(codigo_html)
  }

  function sortearSeries ()
{
   let codigo_html = '';
let objDados = lerDadosSeries();
let n = 0;
for( i = 0; i < 4; i++)
{
  valor = Math.floor(Math.random() * (31 - 16));
  let titulo = objDados.series[valor].nome;
  let imagem = objDados.series[valor].img;
  let sinopse = objDados.series[valor].sinopse;
  
  
  codigo_html += `<div class="col-3"><div class="card-group" id="sortearseries" style="padding-top:30px; padding-bottom:30px;" >
<div class="card" style="width: 18rem;">
<img src="${imagem}" class="card-img-top"alt="">
<div class="card-body" id="card-body-css">
<h4 class="card-title">${titulo}</h4>
<a href="Series${valor}.html" class="btn btn-dark">Acesse</a>
</div>
</div>
</div>
</div>`;
n++;
}  
    // Repassar os cards para a página
    $('#sortearseries').html(codigo_html)
  }



function salvarDadosSeries(dados) {
 localStorage.setItem('series', JSON.stringify(dados));
  
}

function salvarDados(dados) {
  localStorage.setItem('filmes', JSON.stringify(dados));
  
}

//Carregando a database DB e FILMES
function carregarStorage () {
  //Ler os dados do LocalStorage
  let objDados = lerDados();
  let objDados2 = lerDadosSeries();
  salvarDados(objDados);
  salvarDadosSeries(objDados2);
 

}


//Carregar chaves
$( document ).ready(function () {
  carregarStorage();
  exibirRecentes ();
  exibirFilmes ();
  exibirSeries ();
  exibirSeriesDestaque ();
  exibirSeriesConheca();
  exibirFilmesDestaque ();
  exibirFilmesTalvez ();
  sortear();
  sortearSeries ();
}); 
import { Knex } from "knex";

export async function seed(knex: Knex) {
  await knex("movies").insert([
    {
      author: "Autor 1",
      title: "Sonic the Hedgehog 2",
      description:
        "Sonic 2 – O Filme é uma sequência dos acontecimentos do primeiro live-action de Sonic – O Filme, baseado no videogame de sucesso. Após conseguir se estabelecer em Green Hills, Sonic está pronto para mais liberdade e quer provar que tem o necessário para ser um herói de verdade. Seu teste virá quando Tom e Maddie concordam em deixá-lo em casa enquanto saem de férias para ir ao casamento da irmã de Rachel, no Havaí. Mas para a infelicidade do ouriço, a data acaba coincidindo com o retorno do Dr. Robotnik, dessa vez com um novo parceiro, Knuckles, depois que o doutor do mal vai embora para o planeta cogumelo. O terrível Robotnik está à procura de uma esmeralda com o poder de destruir civilizações. Sonic se une a um novo companheiro, Tails, e juntos eles embarcam em uma jornada para encontrar a esmeralda antes que ela caia nas mãos erradas.",
      image: "sonic2.jpg",
    },
    {
      author: "Autor 2",
      title: "Encanto",
      description:
        "Encanto é a nova animação da Disney situada na Colômbia, sobre a extraordinária família Madrigal, que vive escondida em uma região montanhosa isolada, conhecido como Encanto. A magia da região abençoou todos os meninos e meninas membros da família com poderes mágicos, desde superforça até o dom da cura. Mirabel é a única que não tem um dom mágico. Mas, quando descobre que a magia que cerca o Encanto está em perigo, ela decide que pode ser a última esperança de sua família excepcional.",
      image: "encanto.jpg",
    },
    {
      author: "Autor 3",
      title: "Priest",
      description:
        " No filme Padre, Há séculos humanos e vampiros estão em guerra, o que fez com que o planeta fosse devastado. Padre (Paul Bettany) é um guerreiro lendário que participou da guerra com os vampiros. Hoje ele vive na obscuridade, numa das cidades controladas pela igreja. Ele volta à ativa quando Lucy Pace (Lily Collins) é sequestrada por um grupo de vampiros liderados por Black Hat (Karl Urban). Ao lado do xerife Hicks (Cam Gigandet) e de Priestess (Maggie Q), uma integrante da legião de matadores de vampiros, Padre parte para resgatá-la.",
      image: "priest.jpg",
    },
    {
      author: "Autor 4",
      title: "Shang-Chi and the Legend of the Ten Rings",
      description:
        "Em Shang-Chi e a Lenda dos Dez Anéis, acompanhamos a história de Shang-Chi (Simu Liu), um jovem chinês que foi criado por seu pai em reclusão para que pudesse focar totalmente em ser um mestre de artes marciais. Entretanto, quando ele tem a chance de entrar em contato com o resto do mundo pela primeira vez, logo percebe que seu pai não é o humanitário que dizia ser, vendo-se obrigado a se rebelar e traçar o seu próprio caminho.",
      image: "shang_chi.jpg",
    },
    {
      author: "Autor 5",
      title: "Uncharted",
      description:
        "Baseado em uma das séries de videogame mais vendidas e aclamadas pela crítica de todos os tempos, Uncharted: Fora do Mapa serve como uma prequela para os jogos, seguindo o jovem explorador Nathan “Nate” Drake (Tom Holland), descendente do grande explorador Francis Drake, antes de ser conhecido como um famoso explorador. Mas antes disso, Nate vivia uma vida pacata como bartender em uma cidade, mas acaba se envolvendo com um estranho que viria ser um dos seus mais confiáveis companheiros. Uncharted: Fora do Mapa mostra sua primeira aventura de caça ao tesouro com o sagaz parceiro Victor “Sully” Sullivan (Mark Wahlberg). Os dois partem em uma perigosa busca pelo “maior tesouro nunca encontrado”, na cidade sul americana de El Dorado, mas a aventura acaba se estendendo por todo o mundo, enquanto rastreiam pistas que podem levar ao irmão há muito perdido de Nathan. Porém, mal sabiam eles que seriam perseguidos por um grupo de mercenários que também buscam pelo tesouro perdido.",
      image: "uncharted.jpg",
    },
    {
      author: "Autor 6",
      title: "The Lost City",
      description:
        "A brilhante, porém reclusa autora Loretta Sage (Sandra Bullock) escreve sobre lugares exóticos em seus romances populares de aventura, cujas capas são estreladas pelo belo modelo Alan (Channing Tatum), que tem dedicado sua vida a personificar o personagem herói, Dash. Durante a turnê de promoção de seu novo livro com Alan, Loretta é raptada por um bilionário excêntrico (Daniel Radcliffe), para que ela o guie ao tesouro da cidade perdida descrita em seu livro recente. Para provar que é possível ser um herói na vida real, não somente nas páginas de seus livros, Alan parte para resgatá-la. Forçados a viver uma aventura épica na selva, o par improvável precisa trabalhar junto para sobreviver e encontrar o antigo tesouro, antes que seja perdido para sempre.",
      image: "lost_city.jpg",
    },
  ]);
}

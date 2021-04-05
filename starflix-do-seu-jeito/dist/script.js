alert("Bem vindo(a) ao Starfilx do seu jeito,uma versão do Starflix original onde você pode adicionar a capa do seu filme favorito, basta colocar o endereço/link da imagem no local indicado, montando assim o seu catálogo! Aproveite!")
function adicionarFilme(){
  var campoFilmeFavotrito = document.querySelector('#filme')
  var filmeFavorito = campoFilmeFavotrito.value
  if (filmeFavorito.endsWith('.jpg')){
     listarFilmesNaTela(filmeFavorito)
  } else {
    alert("Imagem inválida")
  }
 campoFilmeFavotrito.value = ""
}

function listarFilmesNaTela(filme){
  var listaFilmes =  document.querySelector('#listaFilmes')
  var elementoFilme = "<img src=" + filme + ">"
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}
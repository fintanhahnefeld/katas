function bump(x){
  return x.split('').filter(e => e === "n").length > 15 ? "Car Dead" : 
"Woohoo!"
}

bump("_nnnnnnn_n__n______nn__nn_nnn")
bump("______n___n_")
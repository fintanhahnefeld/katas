
function alan(x){
  const stations = ['Rejection', 'Disappointment', 'Backstabbing Central', 'Shattered Dreams Parkway']
  return stations.every(station => x.includes(station)) ?
    'Smell my cheese you mother!' :
    'No, seriously, run. You will miss it.'
}
alan(['Norwich', 'Rejection', 'Disappointment', 'Backstabbing Central', 'Shattered Dreams Parkway', 'London'])

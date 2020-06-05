/* jshint esversion:6 */
function remove_duplicate(arr) {
  var r=[];
  arr.forEach(e => {
    if (!r.includes(e)) r.push(e);
  });
  return r;
}

Nodes=[
  {'data': {'id': 'A'}},
  {'data': {'id': 'A'}},
  {'data': {'id': 'A'}},
  {'data': {'id': 'A'}},
  {'data': {'id': 'B'}},
  {'data': {'id': 'B'}},
  {'data': {'id': 'D'}},
  {'data': {'id': 'D'}},
  {'data': {'id': 'B'}},
  {'data': {'id': 'B'}},
  {'data': {'id': 'B'}},
  {'data': {'id': 'B'}},
  {'data': {'id': 'E'}},
  {'data': {'id': 'E'}}];

console.log(remove_duplicate(Nodes),[
  {'data': {'id': 'A'}},
  {'data': {'id': 'B'}},
  {'data': {'id': 'D'}},
  {'data': {'id': 'E'}}]);
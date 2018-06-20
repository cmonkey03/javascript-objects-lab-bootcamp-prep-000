var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  
}

function updateObjectWithKeyAndValue(object, key, value) {
  object.key = value
}

function deleteFromObjectByKey(object, key) {
  var newObject = Object.assign({}, object)
  delete newObject.key
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return key
}
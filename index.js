var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var newObject = Object.assign({}, object)
  newObject[key] = value
  return bject
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  
}

function deleteFromObjectByKey(object, key) {
  var newObject = Object.assign({}, object)
  delete newObject[key]
  return newObject
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return key
}
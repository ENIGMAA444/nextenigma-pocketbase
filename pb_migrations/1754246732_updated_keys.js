/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2474845020")

  // update collection data
  unmarshal({
    "listRule": "",
    "viewRule": ""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2474845020")

  // update collection data
  unmarshal({
    "listRule": "id != \"\"\n",
    "viewRule": "id != \"\"\n"
  }, collection)

  return app.save(collection)
})

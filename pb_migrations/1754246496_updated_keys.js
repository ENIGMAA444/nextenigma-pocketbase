/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2474845020")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id != \"\"\n",
    "deleteRule": "@request.auth.id != \"\"",
    "listRule": "id != \"\"\n",
    "updateRule": "@request.auth.id != \"\"",
    "viewRule": "id != \"\"\n"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2474845020")

  // update collection data
  unmarshal({
    "createRule": null,
    "deleteRule": null,
    "listRule": null,
    "updateRule": null,
    "viewRule": null
  }, collection)

  return app.save(collection)
})

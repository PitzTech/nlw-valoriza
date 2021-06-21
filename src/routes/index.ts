import { Router } from "express"

const routes = Router()

routes.get("/test", (request, response) => {
	return response.send("Hello World!")
})

routes.post("/test-post", (request, response) => {
	return response.send("Hello World Post!")
})

export default routes

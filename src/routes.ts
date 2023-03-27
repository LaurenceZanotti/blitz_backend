const express = require("express")
const router = express.Router()

router.get('/', () => console.log("Route controller called"))
router.get('/todos/', () => console.log("Route controller called"))

export default router
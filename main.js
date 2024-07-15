const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// Add custom routes before JSON Server router
server.get('/echo', (req, res) => {
    res.jsonp(req.query)
})
// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)

server.post('/api/login', (req, res) => {

    const { email, password } = req.body;
    const user = router.db.get('users').find({ email, password }).value();

    if (!user) {
        return res.status(401).json({ message: 'Email or password is incorrect' });
    }

    // Trả về thông tin user nếu đăng nhập thành công
    res.json({ success: true, id: user.id, name: user.name });
});





server.use((req, res, next) => {
    if (req.method === 'POST') {
        // req.body.createdAt = Date.now()
        req.body.dateAdded = Date.now()
    }
    // Continue to JSON Server router
    next()
})


// Use default router
server.use("/api", router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})
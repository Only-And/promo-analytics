export default async function getDados (request, response) {
    console.log(request.query.produto)
    const dados = await fetch(`http://localhost:3001/api/req?produto=` + request.query.produto)
    
    const dadosJson = await dados.json();
    response.setHeader('Cache-Control', 's-max-age=86400, stale-while-revalidate')
    response.send(dadosJson)
}
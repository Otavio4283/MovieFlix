//Todas as requisições serão feitas por meio desse arquivo

const API_KEY = '84c2e94e58561d2845fbf2de10a1a1a5';
const API_BASE =  'https://api.themoviedb.org/3';

/*
- Mais assistidos
- Proximos lançamentos
- Ação
- Comédia
- Terror
*/

//O await faz a função esperar a resposta do request para poder continuar executando o codigo
const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'trending',
                title:'Em alta',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)

            },
            {
                slug: 'upcoming',
                title: 'Próximos Lançamentos',
                items: await basicFetch(`/movie/upcoming?api_key=${API_KEY}&language=pt-BR`)
            },
            {
                slug:'action', 
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'horror',
                title:'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'comedy',
                title:'Comédia',
                items:await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            }
        ];
    }
}
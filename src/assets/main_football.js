const API_football = 'https://free-football-soccer-videos.p.rapidapi.com/';

const content_football = null || document.getElementById('content_football');

const options_football = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c24b41b707msh7fb58e31a885f3dp180167jsnc17839f88830',
		'X-RapidAPI-Host': 'free-football-soccer-videos.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options_football);
    const data = await response.json();
    return data;
}

// Creamos una funcion anonima que se llama a si misma
(async () => {
    try {
        const partidos = await fetchData(API_football);
        let view = `
        ${partidos.map(partido => `
            <div class="group relative">
                ${partido.videos[0].embed}
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0">
                        </span>
                        ${partido.title}
                    </h3>
                </div>
            </div>
        `).slice(0,8).join('')}
        `;
        // Agregamos la inserción de la vista que creamos
        content_football.innerHTML = view;
    } catch (error) {
        console.log(error);
    }
})();
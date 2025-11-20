fetchData();

async function fetchData() {
    try {
        const pokimonName = document.getElementById("pokimonName").value;

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokimonName}`);
        if (!response.ok) {
            throw new Error('could not fetch data');
        }
        const data = await response.json();
        const pokimonSprite = data.sprites.front_default;
        const imgElement = document.getElementById('pokimonSprite');

        imgElement.src = pokimonSprite;
        imgElement.style.display = "block";
    } catch (error) {
        console.error('Error:', error);
    }
}
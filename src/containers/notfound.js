export const notfound = () => {
    const node = document.querySelector('.map');
    const view = `
        <div class="map__notfound">
            <p>Not found any address. Let's do it again</p>
            <img src="../src/assets/lost.svg" alt="There is no map">
        </div>        
    `;

    node.innerHTML = view;
}
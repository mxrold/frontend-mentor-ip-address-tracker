export const notfound = () => {
    const node = document.querySelector('.map');
    const view = `
        <div class="no-map">
            <p>Not found any address. Let's do it again</p>
            <img src="../src/assets/lost.svg" alt="There is no map">
        </div>        
    `;

    node.innerHTML = view;
}
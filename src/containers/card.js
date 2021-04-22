export const card = response => {
    const node = document.querySelector('.footer');

    const { ip, location, isp } = response;

    const view = `
        <div class="footer__info">
            <div class="footer__info--item">
                <p>IP ADDRESS</p>
                <span>${ip}</span>
                <div class="separator"></div>
            </div>
            <div class="footer__info--item">
                <p>LOCATION</p>
                <span>${location.city}, ${location.region}, ${location.country}</span>
                <div class="separator"></div>
            </div>
            <div class="footer__info--item">
                <p>TIMEZONE</p>
                <span>${location.timezone}</span>
                <div class="separator"></div>
            </div>
            <div class="footer__info--item">
                <p>ISP</p>
                <span>${isp}</span>
            </div>
        </div>
    `;

    node.innerHTML = view;
}

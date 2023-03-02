export const Header = (props) => {
    const {title, links} = props;

    const anchor = links.map((link) => `<a href="#">${link}</a>`).join('');

    return ` <header>
            <h1 class="site-title">${title}</h1>
                <nav>
                    ${ anchor }
                </nav>
        </header>
    `
}
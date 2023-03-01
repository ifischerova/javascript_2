export const Header = (props) => {
    const {title, link} = props

    return ` <header>
            <h1 class="site-title">${title}</h1>
                <nav>
                    <a href="#">${link}</a>
                    <a href="#">${link}</a>
                    <a href="#">${link}</a>
                    <a href="#">${link}</a>
                    <a href="#">${link}</a>
                </nav>
        </header>
    `
}
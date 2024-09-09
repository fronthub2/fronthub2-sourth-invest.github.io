const btnBurger = document.querySelector('.header-menu')
const burgerWindow = document.querySelector('.header-burger-show')
btnBurger.addEventListener('click', function () {
    burgerWindow.classList.add('header-burger--active')
})

const btnCloseBurger = document.querySelector('.burger-img')
btnCloseBurger.addEventListener('click', function () {
    burgerWindow.classList.remove('header-burger--active')
})

const shareBtn = document.querySelector('#shares-btn')
const inShare = document.querySelector('.shares')

shareBtn.addEventListener('click', function () {
    shareBtn.classList.add('active')
    contructionBtn.classList.remove('active')
    companyNewsBtn.classList.remove('active')
    inShare.innerHTML = ''
    return inShare.innerHTML = `
        <div class="grid2">
                            <div class="image-container">
                                <img src="img/grid2-img.jpg" alt="Изображение">
                                <div class="flex1">
                                    <h2 class="title">Снижение цен на Мансарду</h2>
                                    <h2 class="fl1">
                                        <svg width="30" height="40" viewBox="0 0 40 40" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="20" cy="20" r="19.5" stroke="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M23.5028 15.8629H16.3838V15H24.3657V22.9819H23.5028V15.8629Z"
                                                fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M15 23.7551L23.6291 15.126L24.2393 15.7361L15.6102 24.3652L15 23.7551Z"
                                                fill="white" />
                                        </svg>
                                        <a href="price-reduction.html">Подробнее</a>
                                    </h2>
                                </div>
                                <div class="overlay1">
                                </div>
                            </div>
                            <div class="image-container">
                                <img src="img/grid2-img.jpg" alt="Изображение">
                                <div class="flex1">
                                    <h2 class="title">Снижение цен на Мансарду</h2>
                                    <h2 class="fl1">
                                        <svg width="30" height="40" viewBox="0 0 40 40" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="20" cy="20" r="19.5" stroke="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M23.5028 15.8629H16.3838V15H24.3657V22.9819H23.5028V15.8629Z"
                                                fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M15 23.7551L23.6291 15.126L24.2393 15.7361L15.6102 24.3652L15 23.7551Z"
                                                fill="white" />
                                        </svg>
                                        <a href="price-reduction.html">Подробнее</a>
                                    </h2>
                                </div>
                                <div class="overlay1">
                                </div>
                            </div>
                            <div class="image-container">
                                <img src="img/grid2-img.jpg" alt="Изображение">
                                <div class="flex1">
                                    <h2 class="title">Снижение цен на Мансарду</h2>
                                    <h2 class="fl1">
                                        <svg width="30" height="40" viewBox="0 0 40 40" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="20" cy="20" r="19.5" stroke="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M23.5028 15.8629H16.3838V15H24.3657V22.9819H23.5028V15.8629Z"
                                                fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M15 23.7551L23.6291 15.126L24.2393 15.7361L15.6102 24.3652L15 23.7551Z"
                                                fill="white" />
                                        </svg>
                                        <a href="price-reduction.html">Подробнее</a>
                                    </h2>
                                </div>
                                <div class="overlay1">

                                </div>
                            </div>
                            <div class="image-container">
                                <img src="img/grid2-img.jpg" alt="Изображение">
                                <div class="flex1">
                                    <h2 class="title">Снижение цен на Мансарду</h2>
                                    <h2 class="fl1">
                                        <svg width="30" height="40" viewBox="0 0 40 40" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="20" cy="20" r="19.5" stroke="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M23.5028 15.8629H16.3838V15H24.3657V22.9819H23.5028V15.8629Z"
                                                fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M15 23.7551L23.6291 15.126L24.2393 15.7361L15.6102 24.3652L15 23.7551Z"
                                                fill="white" />
                                        </svg>
                                        <a href="price-reduction.html">Подробнее</a>
                                    </h2>
                                </div>
                                <div class="overlay1">

                                </div>
                            </div>
                        </div>
    `
})

const contructionBtn = document.querySelector('#construction-reports-btn')
// const inConstruction = document.querySelector('.')

contructionBtn.addEventListener('click', function () {
    shareBtn.classList.remove('active')
    contructionBtn.classList.add('active')
    companyNewsBtn.classList.remove('active')
    inShare.innerHTML = ''
    return inShare.innerHTML = `
        <div class="grid1">
                            <a href="https://www.youtube.com">
                                <div class="image-container">
                                    <img src="img/img-youtube.jpg" alt="Изображение">
                                    <div class="flex">
                                        <h2 class="title">ЖК «Южный»</h2>
                                        <h2 style="color: #FFFFFF;" class="fl">
                                            Фотоотчет
                                            <span>9 фотографий</span>
                                        </h2>
                                    </div>
                                    <div class="overlay">
                                    </div>
                                </div>
                            </a>
                            <a href="https://www.youtube.com">
                                <div class="image-container">
                                    <img src="img/img-youtube.jpg" alt="Изображение">
                                    <div class="flex">
                                        <h2 class="title">ЖК «Южный»</h2>
                                        <h2 style="color: #FFFFFF;" class="fl">
                                            Фотоотчет
                                            <span>9 фотографий</span>
                                        </h2>
                                    </div>
                                    <div class="overlay">
                                    </div>
                                </div>
                            </a>
                            <a href="https://www.youtube.com">
                                <div class="image-container">
                                    <img src="img/img-youtube.jpg" alt="Изображение">
                                    <div class="flex">
                                        <h2 class="title">ЖК «Южный»</h2>
                                        <h2 style="color: #FFFFFF;" class="fl">
                                            Фотоотчет
                                            <span>9 фотографий</span>
                                        </h2>
                                    </div>
                                    <div class="overlay">
                                    </div>
                                </div>
                            </a>
                            <a href="https://www.youtube.com">
                                <div class="image-container">
                                    <img src="img/img-youtube.jpg" alt="Изображение">
                                    <div class="flex">
                                        <h2 class="title">ЖК «Южный»</h2>
                                        <h2 style="color: #FFFFFF;" class="fl">
                                            Фотоотчет
                                            <span>9 фотографий</span>
                                        </h2>
                                    </div>
                                    <div class="overlay">
                                    </div>
                                </div>
                            </a>
                        </div>
    `
})

const companyNewsBtn = document.querySelector('#company-news-btn')
companyNewsBtn.addEventListener('click', function () {
    shareBtn.classList.remove('active')
    contructionBtn.classList.remove('active')
    companyNewsBtn.classList.add('active')
    inShare.innerHTML = ''
    return inShare.innerHTML = `
        <div class="grid3-items">
                            <div class="grid3-item">
                                <h2 class="grid3-item-title">Рынок Дагестана растет</h2>
                                <p class="grid3-item-text">Экономисты России прогнозируют рост рынка на недвижимость в
                                    Дагестана в течении 5
                                    последующих лет!</p>
                                <h2 class="grid3-item-link">
                                    <div class="grid3-item-link">
                                        <svg width="30" height="40" viewBox="0 0 40 40" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="20" cy="20" r="19.5" stroke="#1C2025" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M23.5018 15.8629H16.3828V15H24.3647V22.9819H23.5018V15.8629Z"
                                                fill="#1C2025" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M15 23.7551L23.6291 15.126L24.2393 15.7361L15.6102 24.3652L15 23.7551Z"
                                                fill="#1C2025" />
                                        </svg>
                                        <a href="shares.html">Подробнее</a>
                                    </div>
                                    <p>20 марта 2024 г.</p>
                                </h2>
                            </div>
                            <div class="grid3-item">
                                <h2 class="grid3-item-title">Рынок Дагестана растет</h2>
                                <p class="grid3-item-text">Экономисты России прогнозируют рост рынка на недвижимость в
                                    Дагестана в течении 5
                                    последующих лет!</p>
                                <h2 class="grid3-item-link">
                                    <div class="grid3-item-link">
                                        <svg width="30" height="40" viewBox="0 0 40 40" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="20" cy="20" r="19.5" stroke="#1C2025" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M23.5018 15.8629H16.3828V15H24.3647V22.9819H23.5018V15.8629Z"
                                                fill="#1C2025" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M15 23.7551L23.6291 15.126L24.2393 15.7361L15.6102 24.3652L15 23.7551Z"
                                                fill="#1C2025" />
                                        </svg>
                                        <a href="shares.html">Подробнее</a>
                                    </div>
                                    <p>20 марта 2024 г.</p>
                                </h2>
                            </div>
                            <div class="grid3-item">
                                <h2 class="grid3-item-title">Рынок Дагестана растет</h2>
                                <p class="grid3-item-text">Экономисты России прогнозируют рост рынка на недвижимость в
                                    Дагестана в течении 5
                                    последующих лет!</p>
                                <h2 class="grid3-item-link">
                                    <div class="grid3-item-link">
                                        <svg width="30" height="40" viewBox="0 0 40 40" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="20" cy="20" r="19.5" stroke="#1C2025" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M23.5018 15.8629H16.3828V15H24.3647V22.9819H23.5018V15.8629Z"
                                                fill="#1C2025" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M15 23.7551L23.6291 15.126L24.2393 15.7361L15.6102 24.3652L15 23.7551Z"
                                                fill="#1C2025" />
                                        </svg>
                                        <a href="shares.html">Подробнее</a>
                                    </div>
                                    <p>20 марта 2024 г.</p>
                                </h2>
                            </div>
                            <div class="grid3-item">
                                <h2 class="grid3-item-title">Рынок Дагестана растет</h2>
                                <p class="grid3-item-text">Экономисты России прогнозируют рост рынка на недвижимость в
                                    Дагестана в течении 5
                                    последующих лет!</p>
                                <h2 class="grid3-item-link">
                                    <div class="grid3-item-link">
                                        <svg width="30" height="40" viewBox="0 0 40 40" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="20" cy="20" r="19.5" stroke="#1C2025" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M23.5018 15.8629H16.3828V15H24.3647V22.9819H23.5018V15.8629Z"
                                                fill="#1C2025" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M15 23.7551L23.6291 15.126L24.2393 15.7361L15.6102 24.3652L15 23.7551Z"
                                                fill="#1C2025" />
                                        </svg>
                                        <a href="shares.html">Подробнее</a>
                                    </div>
                                    <p>20 марта 2024 г.</p>
                                </h2>
                            </div>
                        </div>
        </div>
    `

})



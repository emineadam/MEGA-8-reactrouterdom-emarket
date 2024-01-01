import React from "react";
import "./Home.css";
import Product from "./Product";


function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img src="https://www.prodigia-cosmetics.com/wp-content/uploads/2021/04/Article-2-Huile-v%C3%A9g%C3%A9tale-et-mac%C3%A9rat.jpg" alt="" className="home__image" />
                <div className="home__row">
                    <Product
                        id="12321341"
                        title="Doğal Soğuk Sıkım Zeytinyağı (750 ml)"
                        price={23.99}
                        rating={5}
                        image="https://m.patronlardunyasi.com/haber_resim/komsu-da-zeytinyagi-fiyatindan-dertli-litresi-10-15-euro-oldu-298198.jpg"
                    />
                    <Product
                        id="49538094"
                        title="Doğal Lavanta Yağı (5,59 ml)"
                        price={6.10}
                        rating={4}
                        image="https://im.haberturk.com/2022/01/14/3314446_d75d71ee9f97483f67ed5fcdf9af08e9.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="4903850"
                        title="Doğal Argan Yağı (15 ml)"
                        price={6.40}
                        rating={3}
                        image="https://www.sultansha.com/wp-content/uploads/2020/01/argan-yagi-satisi.jpg"
                    />
                    <Product
                        id="23445930"
                        title="Doğal Biberiye Yağı (5,62 ml)"
                        price={9.20}
                        rating={5}
                        image="https://iasbh.tmgrup.com.tr/50d2ec/650/344/0/0/724/380?u=https://isbh.tmgrup.com.tr/sbh/2022/01/24/biberiye-yaginin-saca-faydalari-nelerdir-biberiye-yagi-saca-nasil-uygulanir-1643028205903.jpg"
                    />
                    <Product
                        id="3254354345"
                        title="Doğal Papatya Yağı (2,27 ml)"
                        price={16.99}
                        rating={4}
                        image="https://i.nefisyemektarifleri.com/2022/10/03/papatya-yaginin-10-muthis-faydasi-nasil-yapilir-18.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="90829332"
                        title="Doğal Gül Yağı (30 ml)"
                        price={24.50}
                        rating={4}
                        image="https://gulhane.net/cdn/shop/articles/Untitled_design_1_2a343895-7c6d-4b58-a91b-0d5be2345eaf.png?v=1615412488"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
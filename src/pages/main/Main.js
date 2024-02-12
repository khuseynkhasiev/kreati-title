import './main.scss';
import {useRef, useState} from "react";
import backgroundImage from '../../image/main-background.png';
import {useEffect} from "react";

export default function Main() {
    const [isActiveTitle, setIsActiveTitle] = useState(false);
    const [decrementScaleSvg, setDecrementScaleSvg] = useState(false);
    const [positionSvg, setPositionSvg] = useState(false);

    useEffect(() => {
        const changeAnimation = () => {
            const paths = document.querySelectorAll('svg path');
            const time = 300;
            setTimeout(() => {
                const path = paths[0];
                path.style.fillOpacity = 1;
            }, 900)

            setTimeout(() => {
                const path = paths[1];
                path.style.fillOpacity = 1;
            }, time * 3)
            setTimeout(() => {
                const path = paths[2];
                path.style.fillOpacity = 1;
            }, time * 6)
            setTimeout(() => {
                const path = paths[3];
                path.style.fillOpacity = 1;
            }, time * 8)
            setTimeout(() => {
                const path = paths[4];
                path.style.fillOpacity = 1;
            }, time * 4)
            setTimeout(() => {
                const path = paths[5];
                path.style.fillOpacity = 1;
            }, time * 7)
            setTimeout(() => {
                const path = paths[6];
                path.style.fillOpacity = 1;
            }, time * 2)
            setTimeout(() => {
                const path = paths[7];
                path.style.fillOpacity = 1;
            }, time * 5)
            // setTimeout(() => {
            //     const path = paths[8];
            //     path.style.fillOpacity = 1;
            // }, time)
            setTimeout(() => {
                setDecrementScaleSvg(true);
            }, 2000)
            setTimeout(() => {
                setIsActiveTitle(true);
            }, 4000)
            setTimeout(() => {
                setDecrementScaleSvg(false);
                setPositionSvg(true);
            }, 4200)
        };

        // Запускаем анимацию изменения fill-opacity
        changeAnimation();
    }, []); // Выполняем эффект только один раз после загрузки

    return (
        <main className='main' style={{backgroundImage: isActiveTitle ? `url(${backgroundImage})` : 'none'}}>
            <svg
                className={`main__title-svg ${decrementScaleSvg && 'main__title-svg_scale'} ${positionSvg && 'main__title-svg_position'}`}
                width="629"
                height="157"
                viewBox="0 0 629 157"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0 156.362V105.943H20.4345V84.563H0V0H20.4345V84.563L67.37 42.122H93.5518L36.399 93.8171L106.962 156.362H77.268L20.4345 105.943V156.362H0Z"
                    fill="white" fillOpacity="0"/>
                <path
                    d="M139.849 156.362H119.414V43.7175H139.849V64.1402C141.381 46.015 157.41 43.7175 159.645 43.7175H182.633V64.1402H204.026V83.6057H182.633V64.1402H139.849V156.362Z"
                    fill="white" fillOpacity="0"/>
                <path d="M629 0.638211H606.33V21.6992H629V0.638211Z" fill="white" fillOpacity="0"/>
                <path d="M629 44.3557H606.33V157H629V44.3557Z" fill="white" fillOpacity="0"/>
                <path
                    d="M513.098 8.61585H533.532V44.0366H570.889V63.502H533.532V134.982H570.889V156.681H533.532V134.982H513.098V63.502H485.639V42.7602H513.098V8.61585Z"
                    fill="white" fillOpacity="0"/>
                <path
                    d="M435.511 64.7785H367.821V43.3984H435.511V64.7785H456.903V156.681H435.511V137.117C435.198 144.456 430.316 156.681 412.203 156.681H385.382C385.382 156.681 360.797 156.681 360.797 135.62H435.511V107.858H382.828V86.4776H435.511V64.7785Z"
                    fill="white" fillOpacity="0"/>
                <path d="M360.797 135.939V107.858H381.87V135.939H360.797Z" fill="white" fillOpacity="0"/>
                <path
                    d="M251.281 156.043V135.301H230.208V90.3069V63.502C230.208 49.972 244.256 44.4621 251.281 43.3984C263.627 43.292 291.767 43.1431 305.56 43.3984C319.353 43.6537 324.93 56.9072 325.994 63.502V88.3923H305.56V63.502H251.281V86.3069H325.994V110.091H251.281V135.301H325.994V156.043H251.281Z"
                    fill="white" fillOpacity="0"/>
                {/*<path d="M325.994 90.3069V88.3923H305.56V90.3069H325.994Z" fill="white" fillOpacity="0"/>*/}
            </svg>

            <div className={`main__container ${isActiveTitle && 'main__container_active'}`}>
                <p className='main__subtitle'>НАША РАЗРАБОТКА — ВАШ УСПЕХ</p>
                <div className='main__text-container'>
                    <p className='main__text'>Brand-стратегия, нэйминг, фирменный стиль, разработка сайтов,
                        приложений, а также поддержка проектов</p>
                    <ul className='main__list'>
                        <li className='main__item'>
                            <p className='main__item-key'>telegram:</p>
                            <p className='main__item-key'>e-mail:</p>

                        </li>
                        <li className='main__item'>
                            <a href="https://t.me/kreatii" className='main__item-value'>https://t.me/kreatii</a>
                            <a href="mailto:kreati.ru@mail.ru" className='main__item-value'
                               target='_blank'>kreati.ru@mail.ru</a>
                        </li>
                    </ul>


                    <ul className='main__list-mobile'>
                        <li className='main__item-mobile'>
                            <p className='main__item-key'>telegram:</p>
                            <a href="https://t.me/kreatii" className='main__item-value'>https://t.me/kreatii</a>
                        </li>
                        <li className='main__item-mobile'>
                            <p className='main__item-key'>e-mail:</p>
                            <a href="mailto:kreati.ru@mail.ru" className='main__item-value'
                               target='_blank'>kreati.ru@mail.ru</a>
                        </li>
                    </ul>
                </div>
                <p className='main__sorry-text'>sorry/ведутся работы над сайтом</p>
                <div className='main__circle-top-left'/>
                <div className='main__circle-top-right'/>
                <div className='main__circle-bottom-right'/>
            </div>
        </main>
    )
}
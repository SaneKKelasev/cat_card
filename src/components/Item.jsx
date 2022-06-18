function Item(props) {
    const reverseColorCard = (e) => {
        e.preventDefault();
        if (e.currentTarget.matches('.card')) {
            if (e.currentTarget.parentElement.matches('.disabled')) return;
            e.currentTarget.classList.toggle('checked');
            e.currentTarget.style.hover = false;
        }
    };

    const reverseColorCardLink = (e) => {
        e.preventDefault();
        const cards = document.querySelectorAll('.card');

        cards[e.currentTarget.dataset.num].classList.toggle('checked');
    };

    const checkStateCard = (disabled, dataNum) => {
        if (disabled === 'disabled') return <p className='buy'> Печалька с фуа-гра закончился </p>;

        return (
            <p className='buy'>Чего сидишь? Порадуй котэ,
                <a className='buy__link'
                   href="##"
                   onClick={ reverseColorCardLink }
                   data-num={ dataNum }>купи</a>
            </p>
        )
    }

    const products = props.state.map( ( {taste, promo, weight, dataNum, disabled} ) => {
        return (
            <li className={ `${disabled} item` }>
                <div className="card" onClick={ reverseColorCard }>
                    <h2 className="product-list">Сказочное заморское яство</h2>
                    <div className="product">
                        <p className="product-name">Нямушка</p>
                        <p className="product-taste"> { taste }</p>
                    </div>
                    <div className="product">
                        { promo.map( (promo) => {
                            return <p className="product-promo"> { promo } </p>
                        }) }
                    </div>
                    <div className="weight">
                        <p className="weight__digit"> { weight } </p>
                        <p className="weight__unit">кг</p>
                    </div>
                </div>
                {/*<p className='buy'>Чего сидишь? Порадуй котэ,*/}
                {/*    <a className='buy__link'*/}
                {/*       href="##"*/}
                {/*       onClick={ reverseColorCardLink }*/}
                {/*       data-num={ dataNum }>купи</a>*/}
                {/*</p>*/}
                { checkStateCard(disabled, dataNum) }
            </li>
        )
    });

    return (
        <ul className="list">
            {products}
        </ul>
    )
};

export default Item;
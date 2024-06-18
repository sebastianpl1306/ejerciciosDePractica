import { getCookie, hasCookie, setCookie } from 'cookies-next';

export const getCookieCart = (): { [ id: string ]: number } => {
    if ( hasCookie('cart') ) {
        const cookieCart = JSON.parse( getCookie('cart') as string ?? '{}' );
        return cookieCart;
    }

    return {}
}

export const addProductToCart = ( id: string ) => {
    const cookieCart = getCookieCart();

    if ( cookieCart[id] ) {
        cookieCart[id] += 1;
    } else {
        cookieCart[id] = 1
    }

    setCookie('cart', JSON.stringify(cookieCart));
}

export const removeProductFromCart = ( id: string ): void => {
    const cookieCart = getCookieCart();
    delete cookieCart[id];

    setCookie('cart', JSON.stringify(cookieCart));
}

export const removeSingleItemFromCart = ( id: string ) => {
    const cookieCart = getCookieCart();

    if ( !cookieCart[id] ) return;

    if ( cookieCart[id] && cookieCart[id] > 1 ) {
        cookieCart[id] -= 1;
    } else {
        delete cookieCart[id];
    }

    setCookie('cart', JSON.stringify(cookieCart));
}
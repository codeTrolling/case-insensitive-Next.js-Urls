// use client is needed for usePathname to work
'use client'
import { usePathname, redirect } from 'next/navigation';

// 404 page
const NotFound = () => {
    // get current path
    const path = usePathname();
    // check if it contains any capital letters
    if(path != path.toLocaleLowerCase()){
        // redirect to the lower case version of the path
        redirect(path.toLocaleLowerCase());
    }

    // your custom 404 page
    return(
        <h1>Page not found!</h1>
    )
}

export default NotFound;
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="mt-10 max-w-4xl mx-auto">

            <img className="relative" src="https://www.impactbnd.com/hubfs/404-error-page-examples-best.jpg" alt="" />

            <button className="ms-[350px] btn bg-emerald-400 border-0 absolute top-96"><Link to='/'>Back to home</Link></button>
        </div>
    );
}
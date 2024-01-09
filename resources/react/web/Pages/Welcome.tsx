import { ReactNode } from "react";
import { Web } from "../Layouts/Web";

export const Welcome = () => (
    <div>
        <div>
            Welcome
        </div>
    </div>
);

Welcome.layout = (page: ReactNode) => <Web>{page}</Web>;

export default Welcome;

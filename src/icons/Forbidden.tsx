import React from "react";

export default ({ size = 24, color = "black" }) => (
    <svg fill={color} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm10 12c0 2.397-.85 4.6-2.262 6.324l-14.062-14.062c1.724-1.412 3.927-2.262 6.324-2.262 5.514 0 10 4.486 10 10zm-20 0c0-2.397.85-4.6 2.262-6.324l14.062 14.062c-1.724 1.412-3.927 2.262-6.324 2.262-5.514 0-10-4.486-10-10z" />
    </svg>
);
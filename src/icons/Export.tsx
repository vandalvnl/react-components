import React from "react";

export default ({ size = 24, color = "black" }) => (
    <svg fill={color} width={size} height={size} xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
        <path d="M8 11h-6v10h20v-10h-6v-2h8v14h-24v-14h8v2zm-1-4l5-6 5 6h-4v11h-2v-11h-4z" />
    </svg>
);

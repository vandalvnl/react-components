import React from "react";

export default ({ size = 24, color = "black" }) => (
    <svg fill={color} width={size} height={size} xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
        <path d="M8 14.781c-.693-.041-1.295-.486-1.51-1.13-.54-1.619-.355-1.368-1.786-2.362-.45-.312-.704-.808-.704-1.321 0-.17.027-.341.085-.509.553-1.611.554-1.3 0-2.92-.058-.166-.085-.338-.085-.507 0-.514.254-1.009.704-1.322 1.43-.992 1.245-.741 1.786-2.363.225-.675.878-1.131 1.615-1.131h.005c1.765.006 1.451.109 2.889-.903.298-.209.649-.313 1.001-.313.352 0 .703.104 1.001.313 1.428 1.004 1.12.909 2.889.903h.005c.737 0 1.39.456 1.616 1.131.54 1.619.351 1.368 1.786 2.363.449.312.703.808.703 1.321 0 .169-.026.342-.085.508-.552 1.612-.554 1.302 0 2.92.059.168.085.34.085.509 0 .513-.254 1.009-.703 1.321-1.435.996-1.246.745-1.786 2.362-.216.643-.817 1.089-1.511 1.13v9.219l-3.958-3-4.042 3v-9.219zm9.714-6.781c0-3.155-2.557-5.714-5.714-5.714-3.155 0-5.714 2.559-5.714 5.714 0 3.155 2.559 5.714 5.714 5.714 3.157 0 5.714-2.559 5.714-5.714zm-5.714-4c-2.205 0-4 1.794-4 4s1.795 4 4 4c2.206 0 4-1.794 4-4s-1.794-4-4-4z" />
    </svg>
);

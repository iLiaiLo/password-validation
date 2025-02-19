export const FormContent=[
    {name:"password",text:"password must contain:",regex:null},
    {name:"password",text:"a capital letter",regex:/[A-Z]/g},
    {name:"password",text:"lowercase letter",regex:/[a-z]/g},
    {name:"password",text:"a number",regex:/[0-9]/g},
    {name:"password",text:"minimum 8 characters",regex:/.{8,}/g},

    {name:"username",text:"username must contain:",regex:null},
    {name:"username",text:"at least 6 character",regex:/.{6,}/},

    {name:"email",text:"email must be in format:",regex:null},
    {name:"email",text:"something@example.com",regex:/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
];



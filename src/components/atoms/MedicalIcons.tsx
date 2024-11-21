import * as React from 'react';

const MedicalIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1em"
            width="1em"
            {...props}
        >
            <path d="M15 2.013H9V9H2v6h7v6.987h6V15h7V9h-7z" />
        </svg>
    );
};

export default MedicalIcon;

interface InfoButtonProps {
    onClick?: () => void;
}

const InfoButton = ({ onClick }: InfoButtonProps) => {
    return (
        <button
            onClick={onClick}
            style={{
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                border: '1px solid #868e96',
                backgroundColor: 'transparent',
                color: '#868e96',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 0,
                cursor: 'pointer',
                fontSize: '12px',
                fontFamily: 'serif',
                fontStyle: 'italic',
                lineHeight: 1,
                fontWeight: 'bold',
            }}
        >
            i
        </button>
    );
};

export default InfoButton;

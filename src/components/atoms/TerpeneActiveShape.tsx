import { Sector } from 'recharts';
import { TERPENES_MAP } from '../../lib/constants';

const TerpeneActiveShape = (props: any) => {
    const {
        cx,
        cy,
        innerRadius,
        outerRadius,
        startAngle,
        endAngle,
        fill,
        payload,
    } = props;

    return (
        <g>
            <text
                x={cx}
                y={cy}
                dy={8}
                textAnchor="middle"
                fill="#333"
                style={{ fontSize: '13px', fontWeight: 'bold' }}
            >
                <tspan>
                    {TERPENES_MAP[payload.name as keyof typeof TERPENES_MAP]
                        .split(' ')
                        .map((word, i, arr) => (
                            <tspan key={i} x={cx} dy={i === 0 ? 0 : 15}>
                                {word}
                            </tspan>
                        ))}
                </tspan>
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
                filter="url(#shadow)"
                style={{
                    cursor: 'pointer',
                }}
            />
            <defs>
                <filter
                    id="shadow"
                    x="-20%"
                    y="-20%"
                    width="140%"
                    height="140%"
                >
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                    <feOffset dx="2" dy="2" result="offsetblur" />
                    <feComponentTransfer>
                        <feFuncA type="linear" slope="0.3" />
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>
        </g>
    );
};

export default TerpeneActiveShape;

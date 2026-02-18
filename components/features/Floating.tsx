export default function Floating({ children }: { children: React.ReactNode }) {
    const style = {
        '--float': Math.random() * 1 + 10, // 10 – 40px
        '--rot': Math.random() * 4 + 1, // 1 – 7 deg
        '--speed': `${Math.random() * 4 + 4}s`, // 4 – 8s
    } as React.CSSProperties;

    return (
        <div className="float" style={style}>
            {children}
        </div>
    );
}

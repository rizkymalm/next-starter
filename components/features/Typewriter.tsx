import useTypewriter from '@/utils/useTypewriter';

const TypeWriterEffect = ({
    text,
    speed,
    start,
}: {
    text: string;
    speed: number;
    start: boolean;
}) => {
    const typewriter = useTypewriter({ text, speed, start });
    return <span>{typewriter}</span>;
};

export default TypeWriterEffect;

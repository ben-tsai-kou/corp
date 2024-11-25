import performanceImg from '/public/performance.jpg';
import Hero from '@/components/hero.component';

export default function Performance() {
    return (
        <Hero
            imgData={performanceImg}
            imgAlt="welding"
            title="We serve high performance applications"
        />
    );
}

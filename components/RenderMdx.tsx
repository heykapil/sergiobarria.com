import Link from 'next/link';
import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { cn } from '@/lib/utils';

function AppLink(props: any) {
    const href = props.href;

    if (href.startsWith('/')) return <Link href={href}>{props.children}</Link>;

    if (href.startsWith('#')) return <a {...props} />;

    return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

function RoundedImage(props: any) {
    return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

function Callout(props: any) {
    return (
        <div
            className={cn('p-3 rounded-xl my-5 [&_p]:my-4', {
                'border-b border-green-400 text-green-200 bg-green-400/20': props.type === 'tip',
                'border-b border-yellow-400 text-yellow-200 bg-yellow-400/20':
                    props.type === 'warn',
                'border-b border-red-400 text-red-200 bg-red-400/20': props.type === 'error',
                'border-b border-blue-400 text-blue-200 bg-blue-400/20': props.type === 'info',
            })}
        >
            {props.children}
        </div>
    );
}

// NOTE: add more custom components here 👇🏼
const components = {
    a: AppLink,
    Image: RoundedImage,
    Callout,
};

interface RenderMdxProps {
    code: string;
}

export function RenderMdx({ code }: RenderMdxProps) {
    const Component = useMDXComponent(code);

    return (
        <article className="prose prose-neutral dark:prose-invert">
            <Component components={{ ...components }} />
        </article>
    );
}

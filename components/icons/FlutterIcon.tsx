import { cn } from '@/lib/utils';

export function FlutterIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={cn('w-6 h-6 icon icon-tabler icon-tabler-brand-flutter', className)}
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 14l-3 -3l8 -8h6z" />
            <path d="M14 21l-5 -5l5 -5h5l-5 5l5 5z" />
        </svg>
    );
}

import NowPlaying from '../misc/NowPlaying'
import SocialIcons from '../misc/SocialIcons'

export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="py-8 layout border-t-[1px] border-gray-light dark:border-gray-regular">
        <div className="self-start mb-6">
          <NowPlaying />
        </div>
        <div className="flex flex-col items-center text-center">
          <SocialIcons />
          <p className="flex items-center justify-center mt-4 text-sm long-text">
            <span>&copy; {new Date().getFullYear()}</span>
            <span className="mx-1 text-3xl">&middot;</span>
            <span>Sergio Barria</span>
          </p>
          <p className="text-sm long-text">
            Built with{' '}
            <a
              href="https://nextjs.org/"
              className="font-semibold transition duration-300 ease-in-out hover:text-gray-800 dark:text-gradient"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js
            </a>
            ,{' '}
            <a
              href="https://tailwindcss.com/"
              className="font-semibold transition duration-300 ease-in-out hover:text-gray-800 dark:text-gradient"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tailwind CSS
            </a>
            . Content with{' '}
            <a
              href="https://mdxjs.com/"
              className="font-semibold transition duration-300 ease-in-out hover:text-gray-800 dark:text-gradient"
              target="_blank"
              rel="noopener noreferrer"
            >
              MDX
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

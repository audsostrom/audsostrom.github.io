import * as Tooltip from '@radix-ui/react-tooltip';
import { GitHubLogoIcon, LinkedInLogoIcon, PlusIcon } from '@radix-ui/react-icons';

export default function Home() {
  return (
    <div className="h-[calc(100vh-56px)] overflow-hidden">
      <main className="flex flex-col justify-center px-20 h-[calc(100vh-100px-4rem)]">
        <h1 className="text-4xl font-bold text-gray-800">
          hello there <span role="img" aria-label="wave" className="wave">👋</span>
        </h1>
        <h2 className="text-6xl font-extrabold text-purple-600 mt-4 font-accent">
          I'm Audrey
        </h2>
        <p className="text-2xl text-gray-600 mt-4">
          a full-stack developer designing seamless experiences to inspire learning through technology
        </p>
        <p className="text-xl text-gray-500 mt-4">
          research lead @ tech4good | cs + statistics alum @ ucsc
        </p>
      </main>
      <footer className="flex justify-center space-x-8 my-8">
        {/* GitHub Link */}
        <Tooltip.Provider>
    <Tooltip.Root>
      <Tooltip.Trigger className="text-black px-4 py-2 hover:text-purple-600">
      <GitHubLogoIcon className='size-7'/>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content
          className="bg-white text-black px-3 py-2 rounded shadow-md"
          sideOffset={5}
        >
          Check out my GitHub!
          <Tooltip.Arrow className="fill-white" />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
    <Tooltip.Root>
      <Tooltip.Trigger className="text-black px-4 py-2 hover:text-purple-600">
      <LinkedInLogoIcon className='size-7'/>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content
          className="bg-white text-black px-3 py-2 rounded shadow-md"
          sideOffset={5}
        >
          Check out my LinkedIn!
          <Tooltip.Arrow className="fill-white" />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  </Tooltip.Provider>
      </footer>
    </div>
  );
}

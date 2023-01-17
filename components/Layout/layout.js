import Sidebar from "./sidebar";

export default function Layout({ children }) {
  return (
    <div className='flex flex-row min-h-screen'>
      <Sidebar className='navbar transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-indigo-200' />
      <main className='main-container flex flex-col flex-grow md:ml-0 transition-all duration-150 ease-in'>
        {children}
      </main>
    </div>
  );
}

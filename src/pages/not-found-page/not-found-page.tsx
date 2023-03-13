import { Logo } from '../../components/logo/logo';

export const NotFoundPage = () => {
  return (
    <div className="bg-[#01012A] min-h-screen flex flex-col">
      <div className="container mx-auto p-6 flex-grow flex flex-col items-center">
        <div className="mb-10">
          <Logo />
        </div>

        <h1 className="font-bold text-white text-4xl text-center my-10">404. Page not found</h1>
      </div>
    </div>
  );
};

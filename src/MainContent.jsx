export default function MainContent() {
  return (
    <main
      className="max-w-2xl mx-auto p-6 rounded-lg shadow-md mt-8 flex-grow"
      
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-100 pb-2">
        Reasons I'm Excited to Learn React
      </h1>
      <ol className="list-decimal list-inside space-y-4 text-gray-700">
        <li className="text-lg hover:bg-blue-50 p-3 rounded transition-colors">
          React is a popular library, so I will be able to fit in with all the
          coolest devs out there! <span className="text-2xl">😎</span>
        </li>
        <li className="text-lg hover:bg-blue-50 p-3 rounded transition-colors">
          I'm more likely to get a job as a frontend developer if I know React
          <span className="ml-2 text-blue-500">💰</span>
        </li>
      </ol>
    </main>
  );
}

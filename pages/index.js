export default function Home() {
  return (
    <div className="text-center">
      <div className="w-40 h-40 mx-auto overflow-hidden rounded-full">
        <img 
          src="/images/profile.jpg" 
          alt="Mohammadsajad Abavisani" 
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="text-4xl font-bold mt-4">Mohammadsajad Abavisani</h1>
      <p className="text-xl mt-2">Final-year PhD Candidate in Electrical & Computer Engineering</p>
      <p className="mt-4">
        With seven years of experience in machine learning, causal inference, and time series analysis, I am actively seeking internship opportunities for Summer 2025 and full-time positions for Fall/Winter 2025.
      </p>
      <p className="mt-2 font-semibold">
        Specializing in causal learning, deep learning, and advanced time series analysis.
      </p>
    </div>
  );
}
